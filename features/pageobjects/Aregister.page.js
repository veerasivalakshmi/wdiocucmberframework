class Registerclass
{
    get aregister()
    {
        return $('.ico-register')
    }
    get agender()
    {
        return $('#gender-female')
    }
    get afname()
    {
        return $('#FirstName')
    }
    get alname()
    {
        return $('#LastName')
    }
    get aemail()
    {
        return $('#Email')
    }
    get apassword()
    {
        return $('#Password')
    }
    get aconfpass()
    { 
        return $('#ConfirmPassword')
    }
    get aregisterbut()
    {
        return $('#register-button')
    }

    // async register(fname,lname,mail,password,confpass)
    // {
    //     await this.aregister.click()
    //     await browser.pause(500)
    //     await this.agender.click()
    //     await browser.pause(500)
    //     await this.afname.setValue(fname)
    //     await browser.pause(500)
    //     await this.alname.setValue(lname)
    //     await browser.pause(500)
    //     await this.aemail.setValue(mail)
    //     await browser.pause(500)
    //     await this.apassword.setValue(password)
    //     await browser.pause(500)
    //     await this.aconfpass.setValue(confpass)
    //     await browser.pause(500)
    //     await this.aregisterbut.click()
    //     await browser.pause(500)
    // }
}
module.exports = new Registerclass()