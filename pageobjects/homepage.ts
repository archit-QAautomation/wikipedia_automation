import { expect , type Page,type Locator } from "playwright/test";


export class Homepage {
//locator type defined
  readonly page :Page
  readonly searchbox : Locator
  readonly searchbutton :Locator

// constructor 
    constructor(page :Page) {
        this.page = page ;
        this.searchbox = page.getByRole('searchbox',{name:"search"})
        this.searchbutton = page.locator('//fieldset//button')
         }

//methods
async homesearchinput(text:any){
  await this.searchbox.fill(text);
}
async homesearchbutton(){
  await this.searchbutton.click()
}
} 