import {browser, element, by, until, ExpectedConditions, Key} from "protractor"
import { setDefaultTimeout } from "cucumber";
import { when } from "../node_modules/@types/q";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(30000);

Given(/^I am able to access mortgage cart home page$/, async() => {
    //await browser.get("I am able to access mortgage cart home page");
    await expect(browser.getTitle()).to.eventually.equal("MortgageKart");
});

When(/^I click on Let's begin here$/, async()=>{
    await element(by.buttonText("Let's begin here")).click();
});

When(/^I click on First time Buyer$/, async()=> {
    await element(by.buttonText("First time Buyer")).click();
});

When(/^I click on Start Here$/, async()=>{
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Start Here"))));
    await element(by.buttonText("Start Here")).click();
});

When(/^I select I'm applying on my own$/, async()=>{
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//p[text()='Are you applying on your own or with someone else?']"))));
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div/div[2]"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div/div[2]"))));
    await element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div/div[2]")).click();
    await browser.wait(element(by.xpath("//input[@name='group1' and @value='1']")).isSelected);
    await element(by.buttonText("Proceed")).click();
});

When(/^I select Wales$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//p[text()='Where is the property you want to buy located?']"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[2]/p-radiobutton/div/div[2]"))));
    await element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[2]/p-radiobutton/div/div[2]")).click();
    await browser.wait(element(by.xpath("//input[@name='group1' and @value='2']")).isSelected);
    await element(by.buttonText("Proceed")).click();
});

When(/^I slide the slide bar to 11,323$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.id("_log_slider"))));
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

When(/^I slide the slide bar to 4,678$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await browser.wait(ExpectedConditions.visibilityOf(element(by.id("sliderValue"))));
    await element(by.id("sliderValue")).sendKeys("4678");
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

When(/^I select Yes$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div"))))
    await element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/div[1]/p-radiobutton/div")).click();
});

When(/^I click on proceed$/, async()=> {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

When(/^I slide the slide bar to 20,969$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.id("_log_slider"))));
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await element(by.id("_log_slider")).sendKeys(Key.ARROW_RIGHT);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

When(/^I select None of the above$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='prelimWheel']/div[2]/span/div[2]/div/span/div[4]/p-checkbox/div/div[2]"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[2]/span/div[2]/div/span/div[4]/p-checkbox/div/div[2]"))))
    await element(by.xpath("//*[@id='prelimWheel']/div[2]/span/div[2]/div/span/div[4]/p-checkbox/div/div[2]")).click();
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

When(/^I select A low introductory rate$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[1]/p-checkbox/div/div[2]"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[1]/p-checkbox/div/div[2]"))))
    await element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[1]/p-checkbox/div/div[2]")).click();
    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[3]/p-checkbox/div/div[2]"))));
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[3]/p-checkbox/div/div[2]"))))
    await element(by.xpath("//*[@id='prelimWheel']/div[1]/span/div[2]/div/span/span/div[3]/p-checkbox/div/div[2]")).click();
    await browser.wait(ExpectedConditions.visibilityOf(element(by.buttonText("Proceed"))));
    await element(by.buttonText("Proceed")).click();
});

Then(/^I should see Reset Goals$/,async()=>{
    await browser.sleep(2000);
    await browser.wait(ExpectedConditions.visibilityOf(element(by.partialButtonText("Reset Goals"))));
});



