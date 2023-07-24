class Apparelclass
{
    get aapparel()
    {
    return $("ul[class='top-menu'] li:nth-child(4) a:nth-child(1)")
    }
    get afrockimg()
    {
        return $('[src="https://demowebshop.tricentis.com/content/images/thumbs/0000018_50s-rockabilly-polka-dot-top-jr-plus-size_125.jpg"]')
    }
    get acart()
    {
        return $('#add-to-cart-button-5')
    }
    get ashopcart()
    {
        return $("a[class='ico-cart'] span[class='cart-label']")
    }
    get aterms()
    {
        return $('#termsofservice')
    }
    get acheckout()
    {
        return $('#checkout')
    }

//     async apparel()
//     {
//         await this.aapparel.click()
//         await browser.pause(3000)
//         await browser.takeScreenshot()
//         await this.afrockimg.click()
//         await browser.pause(1000)
//         await browser.takeScreenshot()
//         await this.acart.click()
//         await browser.pause(1000)
//         await browser.takeScreenshot()
//         await this.ashopcart.click()
//         await browser.pause(1000)
//         await browser.takeScreenshot()
//         await this.aterms.click()
//         await browser.pause(1000)
//         await browser.takeScreenshot()
//         await this.acheckout.click()
//         await browser.pause(1000)
//         await browser.takeScreenshot()
       
//     }
 }
module.exports = new Apparelclass()


  

  