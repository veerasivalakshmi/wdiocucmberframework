class Loginclass
{
    get alogin()
    {
        return $('.ico-login')
    }
    get aemail1()
    {
        return $('#Email')
    }
    get apassword1()
    {
        return $('#Password')
    }
    get aloginbut()
    {
        return $("input[value='Log in']")
    }

    // async login(mail,password)
    // {
    //     await this.alogin.click()
    //     await browser.pause(2000)
    //     await this.aemail1.setValue(mail)
    //     await browser.pause(2000)
    //     await this.apassword1.setValue(password)
    //     await this.aloginbut.click()
    //     await browser.pause(2000)
    // }
}
module.exports = new Loginclass()