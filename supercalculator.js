//var supercalcul = require("./Pomsupercalc.js");
//var XLSX = require("xlsx");
//var workbook = XLSX.readFile(
  //"C:/Users/PraveenKumar/Desktop/Automation/Protractor Scripts/SuperCalculator.xlsx"
//);
//var worksheet = workbook.Sheets["Sheet1"];
//const m = worksheet["A6"].v;
//const n = worksheet["A8"].v;

describe("Testing Super calculator", function () {
  it("super calculator", function () {
   browser.manage().window().maximize();
   //Browser Methods
    browser.get('https://juliemr.github.io/protractor-demo/')
    browser.sleep(5000);
   /*.then(()=>(browser.navigate().back()))
   .then(()=>(browser.sleep(3000)))
   .then(()=>(browser.navigate().forward()))
   .then(()=>(browser.sleep(3000)))
   .then(()=>(browser.sleep(3000)))
   .then(()=>(browser.navigate().refresh()))
   .then(()=>(browser.sleep(3000)))
   .then(()=>(browser.quit()));*/
   
  browser.getCurrentUrl().then((url)=>{

       console.log(url);

       browser.sleep(3000);
   });

   browser.getTitle().then(function(title){
     
     console.log(title);

   });

   browser.sleep(10000);

   /*var firsnumber = element(by.model('first')).sendKeys('100');

   firsnumber.getAttribute('value').then((att)=>{

       console.log(att);

       browser.sleep(3000);
   })

    browser.get(worksheet["A2"].v);
    for (var i = m; i <= n; i++) {
      supercalcul.firsttextbox1(worksheet['B'+i].v);
      browser.sleep(2000);
      supercalcul.secontextbox2(worksheet['C'+i].v);
      browser.sleep(2000);
      supercalcul.click1();
      browser.sleep(5000);
    }*/
});
});
