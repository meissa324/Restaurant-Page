import './style.css';//so it gets compile
import {mainImgComponent,secImgComponent, secImgComponentLeft, secImgComponentRight, footer} from "./home.js" //to import components


document.getElementById('content').appendChild(mainImgComponent());
document.getElementById('content').appendChild(secImgComponent());

//append 2 divs into second-img div
document.querySelector(".second-img").appendChild(secImgComponentLeft());
document.querySelector(".second-img").appendChild(secImgComponentRight());

//append footer
document.getElementById('content').appendChild(footer());