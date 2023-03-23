import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

describe('Feature: Automationpractice', () => {
   let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();  
     
    }, 30000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.navigateTo('http://automationpractice.pl/index.php');
    
       // await loginPage.navigateTo('https://www.saucedemo.com/');
    });
    it("Select FormLogin",async () => {
        await loginPage.selectLoginFormulario();
    });
    it("Select FormLogin Center",async () => {
        await loginPage.centrarFormulario();
    });

    it('Sets Username', async () => {
        await loginPage.setUsername('CandyNena1985@outlook.com');
    });

    it('Sets Password', async () => {
      
        await loginPage.setPassword('Candy.......?');
    });

    it('Clicks login Button', async () => {
       
        await loginPage.clickButton();
        
    });

    it('Go To Page Login by user', async () => {
        await loginPage.navigateTo('http://automationpractice.pl/index.php?controller=authentication&back=my-account');
    
    });
});