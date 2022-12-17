var XLSX = require("xlsx");
const fs =require('fs/promises')
var workbook = XLSX.readFile("Block-chain excel sheet.xlsx");
var sheet_name_list = workbook.SheetNames;
//console.log(sheet_name_list); // getting as Sheet1

sheet_name_list.forEach(function (y) {
  var worksheet = workbook.Sheets[y];
  //getting the complete sheet
  // console.log(worksheet);

  var headers = {};
  var data = [];
  for (z in worksheet) {
    if (z[0] === "!") continue;
    //parse out the column, row, and value
    var col = z.substring(0, 1);
    // console.log(col);

    var row = parseInt(z.substring(1));
    // console.log(row);

    var value = worksheet[z].v;
    // console.log(value);

    //store header names
    if (row == 1) {
      headers[col] = value;
      // storing the header names
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();
  fs.writeFile("name.txt",data.join("\r\n"));
 console.log(data);
});

/*
//const puppeteer = require('puppeteer')
const fs =require('fs/promises')

async function start(){
// const browser = await  puppeteer.launch()
// const page = await browser.newPage();
// await page.goto("https://ethindia2022.devfolio.co/projects")
// const names=await page.evaluate(()=>{
//    return Array.from(document.querySelector("#infinite-projects-root > div.sc-gJwTLC.sc-fxvKuh.sc-jvLaUc.iheGVK.jkDUfa > div:nth-child(2) > div.sc-gKXOVf.wagQf > a > div > div.sc-fytwQQ.gANdoh > div > div > h6")).map(x=>x.textContent);
// })
// console.log(names);
 await fs.writeFile("name.txt",data.join("\r\n"));
// await browser.close();
}
start();*/