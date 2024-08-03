//all home components


//function that holds component
function divComponent(){
    //create element
    const element = document.createElement('div');

    //add class
    element.classList.toggle("main-img"); //doesn't work
    
    //return component when function is called
    return element;
}



export{divComponent}