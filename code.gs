// Este proyecto cuenta con licencia conforme a los términos de la licencia MIT.
// https://github.com/YoshiHike/gsheets2sendgrid.git

function sendgrid(){
  const myBook =  SpreadsheetApp.getActiveSpreadsheet();
  const myVarSheet =  myBook.getSheets()[1];
  const idTemplete = myVarSheet.getRange('B1').getValue();
  const apiKey = myVarSheet.getRange('B2').getValue();
  const emailFrom = myVarSheet.getRange('B3').getValue();
  const myDataSheet =  myBook.getSheets()[0];
  const myData = myDataSheet.getDataRange().getValues();
  const typesHead = myData[0];
  const varsHead = myData[1];

  let countMails = (myData.length - 2);
  var result = SpreadsheetApp.getUi().alert("⚠️ ALERTA!","Estás a punto de enviar emails a "+countMails+" personas.",SpreadsheetApp.getUi().ButtonSet.OK_CANCEL);
  if(result !== SpreadsheetApp.getUi().Button.OK) {return}

  myData.slice(2).forEach(row => {
    let mailTo = row[0];
    let fullName = row[1] + ' ' + row[2];
    let myVars = {};

    row.forEach((cell, index) => {
      let myCell = undefined;
      let myType = typesHead[index];
      let myVarName = varsHead[index];
      switch(myType) {
        case "LIST":
          myCell = cell.trim().split(",");
          break;
        case "JSON_LIST":
          myCell = JSON.parse(cell);
          break;
        default:
          myCell = cell;
      }
      myVars[myVarName] = myCell;
    })

    Logger.log(JSON.stringify(myVars));

    let dynamic = {};
    let fullDynamic = {...myVars, ...dynamic};
    var data = {
      "from": {
          "email": emailFrom
      },
      "personalizations": [
        {
          "to": [
            {"email": mailTo}
          ],
          "dynamic_template_data": fullDynamic,
        }
      ],
      "template_id": idTemplete
    };
    var options = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify(data),
      'headers': {
        "Authorization" : 'Bearer ' + apiKey
      }
    };
    var response = UrlFetchApp.fetch('https://api.sendgrid.com/v3/mail/send', options);
    var respCode = response.getResponseCode();
    Logger.log(respCode);
  });
  SpreadsheetApp.getUi().alert("Finalizo el envio de emails.");
}

