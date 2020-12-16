const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = [ 'https://www.googleapis.com/auth/spreadsheets.readonly' ];
const TOKEN_PATH = 'token.json';

const ColumnId = {
  Name: 0,
  Bait: 1,
  Tug: 2,
  BiteTime: 3,
  Weather: 4,
  Points: 5,
  DH: 6,
  Notes: 7,
  TriggersSpectral: 8,
  Type: 9,
  Intuition: 10
};

fs.readFile('tools/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), generateFishJson);
});

function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function generateFishJson(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1qRt-2GDcvmKzsQThyc5oPyS1K-W0C-GJtDU0T10crnY',
    range: 'Ocean Fish Data!A1:L161',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;

    const data = rows.reduce((prev, currRow) => {
      // Ignore empty rows or rows which do not have required data
      // and reset meta
      if (currRow.length <= 1) {
        prev.meta = {};
        return prev;
      }

      // If row contains Preferred Bait title we switch locations...
      if (currRow[ 1 ] === 'Preferred Bait') {
        // unless this is a spectral current in which case we
        // just set the meta
        if (currRow[ 0 ] === 'Spectral Current') {
          prev.meta.spectral = true;
        } else {
          prev.data.push({
            translationKey: currRow[ 0 ].toUpperCase().replace(/ /gi, '_'),
            fish: []
          });
        }

        return prev;
      }

      // Otherwise fill fish structure
      const fish = {};
      fish.id = sanitizeInput(currRow[ ColumnId.Name ]).replace(/[ \-]/gi, '');
      fish.name = sanitizeInput(currRow[ ColumnId.Name ])
      fish.translationKey = makeTranslationKey(sanitizeInput(currRow[ ColumnId.Name ]));
      fish.bait = sanitizeInput(currRow[ ColumnId.Bait ]).split('/')[0];
      fish.tug = parseInt(sanitizeInput(currRow[ ColumnId.Tug ]).length, 10);
      fish.biteTime = [ ...sanitizeInput(currRow[ ColumnId.BiteTime ] || '0').split('-').map(a => parseInt(a, 10)) ];
      fish.points = parseInt(currRow[ ColumnId.Points ], 10);
      fish.dhBonus = parseInt(sanitizeInput(currRow[ ColumnId.DH ]), 10);
      fish.comment = sanitizeInput(currRow[ ColumnId.Notes ] || '');
      fish.onlyDuringSpectral = prev.meta && prev.meta.spectral === true;
      fish.triggersSpectral = currRow[ ColumnId.TriggersSpectral ];
      fish.type = currRow[ ColumnId.Type ];
      fish.isIntuitionFish = currRow[ ColumnId.Intuition ];

      // In case of spectral current we need to switch between time and weather
      if (prev.meta.spectral) {
        fish.weatherConditions = [ 'Spectral' ];
        fish.timeConditions = sanitizeInput(currRow[ ColumnId.Weather ]);
      } else {
        const weather = sanitizeInput(currRow[ ColumnId.Weather ]).trim();
        fish.weatherConditions = weather ? weather.split('/') : null;
      }

      prev.data[prev.data.length -1].fish.push(fish);
      return prev;
    }, { meta: {}, data: [] });

    fs.writeFileSync('./fish.json', JSON.stringify(data.data, null, 2))

    const allFish = data.data.reduce((prev, next) => prev.concat(next.fish), []);

    fs.writeFileSync('./static-fish.ts',
`export const StaticFish = {
  ${allFish.map((fish) => `${fish.id}: makeFish(${getMakeFishParams(fish)})`).join(',\r\n  ')}
}`);

    return data.data;
  });
}

function getMakeFishParams(fish) {
  return [
    `$localize\`${fish.name}\``,
    `Bait.${fish.bait.replace(/[ \-]/gi, '')}`,
    fish.tug,
    fish.biteTime[0],
    fish.biteTime[1] || fish.biteTime[0],
    fish.points,
    fish.dhBonus,
    fish.type ? 'FishType.'+fish.type : 'null',
    fish.onlyDuringSpectral ? 'true' : 'false',
    fish.weatherConditions && fish.weatherConditions.length ? `[ ${fish.weatherConditions.map((condition) => `Weather.${condition.replace(/[ \-]/gi, '')}` ).join() } ]` : 'null',
    fish.triggersSpectral ? 'true' : 'false',
    fish.isIntuitionFish ? 'true' : 'false'
  ].join(', ');
}

function sanitizeInput(str) {
  return str.replace(/[^a-z0-9\-\/! ]/gi, '').trim();
}

function makeTranslationKey(str) {
  return str.toUpperCase().replace(/ /gi, '_');
}
