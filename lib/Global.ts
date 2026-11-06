import {Page} from '@playwright/test';
export class Global{
    constructor (public page :Page){

    }

    //**********TestData */
    public url  : string = "https://sureshitacademy.in/hrms/index.php";
    public username : string = "sureshit";
    public password : string  = "sureshit";
    public empfirstname : string =   "Sureshit12";
    public emplastname  : string =   "Academy12";
    


    //**********Object/elements */

    public textbox_loginname  : string = "//input[@name='txtUserName']";
    public textbox_password   : string = "//input[@name='txtPassword']";
    public login_button       : string = "//input [@name='Submit']";
    public link_logout        : string = "//a[normalize-space(text())='Logout']";
    //public link_logout      : string = "//a[@text ()= 'Logout']";
    
    // Employee data
    public frame                    : string = "//iframe[@name = 'rightMenu']";
    public button_add               : string = "//input[@value = 'Add']";
    public text_empfirstname        :string  = "//input[@name = 'txtEmpFirstName']";
    public textbox_emplastname      :string  ="//input[@name = 'txtEmpLastName']";
    public button_save              :string  = "//input[@id = 'btnEdit']";

    //public link_button            : string = "//a[@text ()= 'Logout']";

};