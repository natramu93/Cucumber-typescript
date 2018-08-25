import { browser, element, by } from "protractor";
import { setDefaultTimeout } from "cucumber";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60*1000);

Given(/^I am able to access magento web page$/, async() => {
    await browser.get("https://angularjs.org/");
});

Given(/^I am able to navigate to user page$/, async()=> {
    await element(by.model("yourName")).sendKeys("Test");
});

When(/^I update the crentials$/, async()=> {
});

When(/^I click on Login$/, async()=> {
    
});

Then(/^I should get magento ID$/,async()=> {
    await expect(element(by.binding("yourName")).getText()).to.eventually.equal("Hello Test!");
});
