const { Given, When, Then } = require('@wdio/cucumber-framework');
const Config = require('../config/data');
const Registerclass = require('../pageobjects/Aregister.page');

Given(/^user launches the browser$/, async () => {
	await browser.url('https://demowebshop.tricentis.com/')
	await browser.pause(2000)
   // await browser.maximizeWindow()
});

When(/^user click the register$/, async () => {

	await Registerclass.aregister.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the gender$/, async () => {
	await Registerclass.agender.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user enter the fname$/, async () => {
	await Registerclass.afname.setValue(Config.Firstname)
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user enter the lname$/, async () => {
	await Registerclass.alname.setValue(Config.Lastname)
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user enter the email$/, async () => {
	await Registerclass.aemail.setValue(Config.Email)
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user enter the password$/, async () => {
	await Registerclass.apassword.setValue(Config.Password)
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user enter the confirmpassword$/, async () => {
	await Registerclass.aconfpass.setValue(Config.Confirmpassword)
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click on registerbutton$/, async () => {
	await Registerclass.aregisterbut.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});
