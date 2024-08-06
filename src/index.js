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

    //footer
    document.getElementById('content').appendChild(footer());
}

function selectMenu(){
    document.getElementById("content").appendChild(menuComponent());

    //footer
    document.getElementById('content').appendChild(footer());
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

    //footer
    document.getElementById('content').appendChild(footer());
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
    element.remove()
}

//we can run it in console to make sure it works
}

//immediately invoked function expression to create home on page load
const home = (function (){
    document.getElementById('content').appendChild(mainImgComponent());
    document.getElementById('content').appendChild(secImgComponent());

    //append 2 divs into second-img div
    document.querySelector(".second-img").appendChild(secImgComponentLeft());
    document.querySelector(".second-img").appendChild(secImgComponentRight());

    //footer
    document.getElementById('content').appendChild(footer());
})();

//query select nav bar
let navBtns = document.querySelector("nav");

//based on which btn pressed load page from function
navBtns.addEventListener("click", (e)=>{
    let target = e.target;//get information about the even listener and put it into variable target

    if(target.id === "home"){
        clearContent();
        selectHome();
    }
    else if(target.id === "menu"){
        clearContent();
        selectMenu();
    }
    else if(target.id === "contact"){
        clearContent();
        selectContact();
    }
})


