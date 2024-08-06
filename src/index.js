import './style.css';//so it gets compile
import {mainImgComponent,secImgComponent, secImgComponentLeft, secImgComponentRight, footer} from "./home.js" //to import components
import {menuComponent} from "./menu.js" //to import components
import {formComponent,inputComponent,labelComponent,textAreaComponent} from "./contact.js" //to import components

//all home components
function selectHome(){
    document.getElementById('content').appendChild(mainImgComponent());
    document.getElementById('content').appendChild(secImgComponent());
    
    //append 2 divs into second-img div
    document.querySelector(".second-img").appendChild(secImgComponentLeft());
    document.querySelector(".second-img").appendChild(secImgComponentRight());
}

function selectMenu(){
    document.getElementById("content").appendChild(menuComponent());
}

function selectContact(){

}
//adding the form
document.getElementById('content').appendChild(formComponent());
document.querySelector("form").appendChild(inputComponent());

//append footer
document.getElementById('content').appendChild(footer());