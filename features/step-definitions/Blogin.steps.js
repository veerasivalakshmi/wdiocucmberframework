const { Given, When, Then } = require('@wdio/cucumber-framework');
const Config = require('../config/data');
const Loginclass = require('../pageobjects/Blogin.page');

Given(/^user open the browser$/, async () => {
	await browser.url('https://demowebshop.tricentis.com/')
	await expect(browser).toHaveUrl('https://demowebshop.tricentis.com/')
	await browser.pause(2000)
    //await browser.maximizeWindow()
});

When(/^user click the login$/, async () => {
	await Loginclass.alogin.click()
	await browser.pause(2000)
    await browser.takeScreenshot()
});

Then(/^user enter the email1$/, async() => {
	await Loginclass.aemail1.setValue(Config.Email)
	await browser.pause(2000)
    await browser.takeScreenshot()
});

Then(/^user enter the password1$/, async() => {
	await Loginclass.apassword1.setValue(Config.Password)
	await browser.pause(2000)
    await browser.takeScreenshot()
});

Then(/^user click the loginbutton$/, async() => {
	await Loginclass.aloginbut.click()
	await browser.pause(2000)
    await browser.takeScreenshot()
});
