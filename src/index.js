import './style.css';//so it gets compile
import {mainImgComponent,secImgComponent, secImgComponentLeft, secImgComponentRight, footer} from "./home.js" //to import components
import {menuComponent} from "./menu.js" //to import components
import {formComponent,nameInputComponent,emailInputComponent,emailLabelComponent,nameLabelComponent,textAreaComponent,textAreaLabelComponent} from "./contact.js" //to import components

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

    //adding the form to dom
    document.getElementById('content').appendChild(formComponent());
    //name input and label
    document.querySelector("form").appendChild(nameLabelComponent());
    document.querySelector("form").appendChild(nameInputComponent());
    //email input and label
    document.querySelector("form").appendChild(emailLabelComponent());
    document.querySelector("form").appendChild(emailInputComponent());
    //textarea input and labe;
    document.querySelector("form").appendChild(textAreaLabelComponent());
    document.querySelector("form").appendChild(textAreaComponent());
}

//clears every element in #content
function clearContent(){
//loop to select each element and delete it

//select parent
let parentElement = document.getElementById('content');

//have array of the children 
let childNodes = Array.from(parentElement.children);

//loop over array to remove each child
for(const element of childNodes){ 
    if(!element.classList.contains("footer")){//if its not the footer delete it
        element.remove()
    }
    
}

//we can run it in console to make sure it works
}
//append footer
document.getElementById('content').appendChild(footer());