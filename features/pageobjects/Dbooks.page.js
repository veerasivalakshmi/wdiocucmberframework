class Booksclass
{
    get abooks()
    {
    return $("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1)")
    }
    get abookimg()
    {
        return $('[src="https://demowebshop.tricentis.com/content/images/thumbs/0000130_computing-and-internet_125.jpeg"]')
    }
    get acartbut()
    {
        return $('#add-to-cart-button-13')
    }
    get ashopcartbut()
    {
        return $("a[class='ico-cart'] span[class='cart-label']")
    }
    get atermservice()
    {
        return $('#termsofservice')
    }
    get acheckoutbut()
    {
        return $('#checkout')
    }

    // async books()
    // {
    //     await this.abooks.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.abookimg.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.acartbut.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.ashopcartbut.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.atermservice.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.acheckoutbut.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
       
    // }
}
module.exports = new Booksclass()
