import './style.css';//so it gets compile
import {mainImgComponent,secImgComponent} from "./home.js" //to import components


document.getElementById('content').appendChild(mainImgComponent());
document.getElementById('content').appendChild(secImgComponent());
