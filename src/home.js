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
function secImgComponentLeft(){
    //create element
    const element = document.createElement('div');

    //add class
    element.classList.toggle("second-img-left");
    
    //return component when function is called
    return element;
}
function secImgComponentRight(){
    //create element
    const element = document.createElement('div');

    //add class
    element.classList.toggle("second-img-right");
    
    //return component when function is called
    return element;
}


//create second component left and right div
//append them in index.js, or should i append them here?? or will this file just hold all the components?

//create footer component to hold website info(have this consistent throughout all pages)
export{mainImgComponent, secImgComponent, secImgComponentLeft, secImgComponentRight}