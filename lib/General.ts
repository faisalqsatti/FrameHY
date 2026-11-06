//import {test} from "@playwright/test";
import { Global } from './Global';


export class General extends Global{

    async OpenApplication(){
    await this.page.goto(this.url); 
    console.log("Application Opened");

}
async Login(){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.login_button).click();
    console.log("Login completed");

}

async Logout(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout completed ");

}
async AddNewEmployee(){
    const frame = this.page.frameLocator(this.frame);
    await frame.locator(this.button_add).click();
    await frame.locator(this.text_empfirstname).fill(this.empfirstname);
    await frame.locator(this.textbox_emplastname).fill(this.emplastname);
    await frame.locator(this.button_save).click();
    console.log("New Employee data Added");
}
async wattime(){
    await this.page.waitForTimeout(3000);
    console.log("timeout for 3 sec completed"); 
}

};