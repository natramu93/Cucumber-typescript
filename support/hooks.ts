const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
import { delay } from "q";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
});

AfterAll({timeout: 100 * 1000}, async () => {
    //await browser.quit();
    await delay(10000);
    await browser.pause();
});
