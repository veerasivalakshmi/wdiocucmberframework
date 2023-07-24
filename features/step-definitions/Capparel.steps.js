const { Given, When, Then } = require('@wdio/cucumber-framework');
const Apparelclass = require('../pageobjects/Capparel.page');

Given(/^user launch the url$/, async () => {
	await browser.url('https://demowebshop.tricentis.com/')
    await browser.pause(2000)
    await browser.takeScreenshot()
    //await browser.maximizeWindow()
});

When(/^user click the apparelmodule$/, async () => {
    await Apparelclass.aapparel.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
    
});

Then(/^user click the frockimage$/, async () => {
    await Apparelclass.afrockimg.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the addtocart$/, async () => {
    await Apparelclass.acart.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the shoppingcart$/, async () => {
    await Apparelclass.ashopcart.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click on terms$/, async () => {
    await Apparelclass.aterms.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the checkout$/, async () => {
    await Apparelclass.acheckout.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});
