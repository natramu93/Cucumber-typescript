import { browser, element, by, ExpectedConditions} from "protractor";
import { setDefaultTimeout } from "cucumber";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60*1000);

Given(/^I am able to access mortgage site$/, async() => {
    //await browser.get("http://magento.com");
    await expect(browser.getTitle()).to.eventually.equal("MortgageKart");
});
When(/^I click on Lets begin here$/, async() =>{
    await element(by.buttonText("Let's begin here")).click();
});
When(/^I click on First time buyer$/, async() =>{
    await element(by.buttonText("First time Buyer")).click();
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Start Here"))));
    await element(by.buttonText("Start Here")).click();
    let list = await element.all(by.className("ui-radiobutton-box"));
    await browser.wait(ExpectedConditions.visibilityOf(list[0]));
    await element(by.className("ui-radiobutton-box")).click();
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
    await browser.pause();
});



