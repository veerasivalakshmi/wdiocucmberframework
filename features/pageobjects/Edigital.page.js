class Digitalclass
{
    get adigital()
    {
    return $("ul[class='top-menu'] li:nth-child(5) a:nth-child(1)")
    }
    get sortby(){ //dropdowns for sortby
     return $("#products-orderby")
    }

    async clicksort(optionText){
    await this.sortby.click();
    const option = $(`//option[text()="${optionText}"]`);
    await option.click();

    }

    get aalbumimg()
    {
        return $('[src="https://demowebshop.tricentis.com/content/images/thumbs/0000235_3rd-album_125.png"]')
    }
    get acartbutton()
    {
        return $('#add-to-cart-button-53')
    }
    get ashopcartbutton()
    {
        return $("a[class='ico-cart'] span[class='cart-label']")
    }
    get atermsofservice()
    {
        return $('#termsofservice')
    }
    get acheckoutbutton()
    {
        return $('#checkout')
    }

    // async digital()
    // {
    //     await this.adigital.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.clicksort('Price: Low to High')
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.aalbumimg.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.acartbutton.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.ashopcartbutton.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.atermsofservice.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
    //     await this.acheckoutbutton.click()
    //     await browser.pause(1000)
    //     await browser.takeScreenshot()
       
    // }
}
module.exports = new Digitalclass()