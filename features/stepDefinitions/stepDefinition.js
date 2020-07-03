let {Given,When,Then,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


     Given("I am on the landing page", async function () {
      await browser.manage().timeouts().implicitlyWait(50 * 8000);
      browser.ignoreSynchronization = true;
      browser.get("https://www.bymiles.co.uk/");
      browser.getCurrentUrl().then(url => {
        console.log('The current URL is' + url)
      })
      //sleep waits for the steps to be complete(reduce execution speed)
      //so you can see the execution browser.wait can be used as well
      await browser.driver.sleep(5000);
      return console.log("@Given -- I am on the landing page");
     });


        When("I click on get a quote", async function () {
         await browser.manage().timeouts().implicitlyWait(50 * 8000);
         element(by.css('[placeholder = "Enter your reg"]')).sendKeys('FV56WGD');
         element(by.css('span.chevron')).click();
         await browser.driver.sleep(2000);
         element(by.css("div.formbox__estimated-mileage-cta-continue")).click();
         await browser.driver.sleep(2000);
         return console.log("@When -- I click on get a quote button");
  
        });


         Then("I fill the claims form", async function () {
           await browser
             .manage()
             .timeouts()
             .implicitlyWait(50 * 8000);
            element(by.css('select[name="ncd"]'))
              .element(by.cssContainingText("option", "1"));
           await browser.driver.sleep(2000);
             element(by.css('input[name="age"]')).sendKeys('40')
             element(by.css('input[name="postcode"]')).sendKeys("E33LP");
            element(by.css('select[name="renewal_month"]'))
            .element(by.cssContainingText("option", "January"));
          await browser.driver.sleep(2000);
              element(by.css("div:nth-of-type(9)")).click();
            await browser.driver.sleep(2000);
              element.all(
                by.css(
                  "section:nth-of-type(5)>div:nth-of-type(1)>div:nth-of-type(1)>form>button>span"
                )
              ).click();
               return console.log("@Then -- I fill the claims form and get a the quote");
             });
        

        