//all home components


//functions that holds component

//main-Img
function mainImgComponent(){
    //create element
    const element = document.createElement('div');

    //add class
    element.classList.toggle("main-img");
    
    //return component when function is called
    return element;
}

//2nd image
function secImgComponent(){
    //create element
    const element = document.createElement('div');

    //add class
    element.classList.toggle("second-img");
    
    //return component when function is called
    return element;
}


export{mainImgComponent,secImgComponent}