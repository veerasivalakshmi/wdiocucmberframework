const { Given, When, Then } = require('@wdio/cucumber-framework');
const Digitalclass = require('../pageobjects/Edigital.page');

Given(/^user launching the url$/, async () => {
    await browser.url('https://demowebshop.tricentis.com/')
	await browser.takeScreenshot()
	await browser.pause(2000)
});

When(/^user click the digitalmodule$/, async () => {
	await Digitalclass.adigital.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user select the sort options$/, async() => {
	await Digitalclass.clicksort('Price: Low to High')
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the album page$/,async () => {
	await Digitalclass.aalbumimg.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the cartbutton$/, async() => {
	await Digitalclass.acartbutton.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the shoppingbutton$/, async() => {
	await Digitalclass.ashopcartbutton.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click on  termsofservice$/, async() => {
	await Digitalclass.atermsofservice.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the checkoutbut$/, async() => {
	await Digitalclass.acheckoutbutton.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});
