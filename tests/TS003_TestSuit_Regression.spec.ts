import{test} from "@playwright/test";
import { General } from "../lib/General";

    test.describe('TestSuit', ()=>{
    test("TS001 for Automation test", async({page})=>{
        let obj = new General(page);
        await obj.OpenApplication();
        await obj.wattime();
        await obj.Login();
        await obj.wattime();
        await obj.Logout();
        await obj.wattime();
        
    });
    test('New Employee added', async ({page})=>{
        const obj = new General(page);
        await obj.OpenApplication();
        await obj.wattime();
        await obj.Login();
        await obj.wattime();
        await obj.AddNewEmployee();
        await obj.wattime();
        await obj.Logout();
        await obj.wattime();

        console .log("New Empl0yee Addedd Sucessfully");
        
    });
    
});
