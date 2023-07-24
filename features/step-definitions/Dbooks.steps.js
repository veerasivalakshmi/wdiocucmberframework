const { Given, When, Then } = require('@wdio/cucumber-framework');
const Booksclass = require('../pageobjects/Dbooks.page')


Given(/^user open the url$/, async () => {
    await browser.url('https://demowebshop.tricentis.com/')
	await expect(browser).toHaveTitle('Demo Web Shop')
    await browser.pause(2000)
    await browser.takeScreenshot()
    //await browser.maximizeWindow()
});

When(/^user click the booksmodule$/, async () => {
    await Booksclass.abooks.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the bookimg$/, async () => {
    await Booksclass.abookimg.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the addcart$/, async () => {
    await Booksclass.acartbut.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the shoppingtocart$/, async () => {
    await Booksclass.ashopcartbut.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click on termservice$/, async () => {
    await Booksclass.atermservice.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});

Then(/^user click the checkoutbutton$/, async () => {
    await Booksclass.acheckoutbut.click()
	await browser.pause(2000)
	await browser.takeScreenshot()
});
