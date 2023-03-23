 import { BasePage } from "./base.page";

 export class LoginPage extends BasePage {
    // Locators
    private selectOptionLogin:string="#header > div.nav > div > div > nav > div.header_user_info > a";
    private centrarLogin:string="#login_form";
    private username: string = '#email';
    private password: string = '#passwd';
    private loginButton: string = '#SubmitLogin';
  


     constructor(){
         super();
     }

    async selectLoginFormulario(){
        await this.driver.Page.click(this.selectOptionLogin);
    }
    async centrarFormulario(){
        await this.driver.Page.click(this.centrarLogin);

    }
    

    async setUsername(text: string) {
        await this.driver.Page.fill(this.username, text);
    }
    async setPassword(text: string) {
        await this.driver.Page.fill(this.password, text);
    }

    async clickButton() {
        
        await this.driver.Page.click(this.loginButton);
    }


    // async Login(username: string, password: string) {
    //     await this.driver.Page.fill(this.username, username);
    //     await this.driver.Page.fill(this.password, password);
    //     await this.driver.Page.click(this.loginButton);
    //     //await this.driver.Page.waitForTimeout(10000);
    // }
}
