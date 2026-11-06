import {test } from "@playwright/test";
import {General} from "../lib/General";

test("TS001 for Automation test", async({page})=>{
    let obj = new General(page);
    await obj.OpenApplication();
    await obj.wattime();
    await obj.Login();
    await obj.wattime();
    await obj.Logout();
    await obj.wattime();
    
});