import { test , expect , type Page  } from "playwright/test";
import { Homepage } from "../pageobjects/homepage";



test.describe('Title :- automation for Topic "Leonal Messi"',()=>{


test.beforeEach('loading the homepage', async ({page}) => {
        await page.goto('https://www.wikipedia.org/');
        await page.waitForLoadState('domcontentloaded');
    });
    

test('search name from hompage and confirm the title of the opened page ', async ({page}) => {
     const home = new Homepage(page);
     await expect.soft(page).toHaveTitle('Wikipedia')
    
});
test('search name from hompage and search thie name of leo messi ', async ({page}) => {
     const home = new Homepage(page);
     await home.homesearchinput('messi')
     await home.homesearchbutton()
     let name : any = await page.title()
     expect.soft(name).toContain("Messi")
    
});





})