import config from "../config";
/**
 * Load the volunteers from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:B"
      })
      .then(
        response => {
          const data = response.result.values;
          const volunteers = data.map(volunteer => ({
            name: volunteer[0],
            email: volunteer[1]
          })) || [];
          callback({
            volunteers
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}