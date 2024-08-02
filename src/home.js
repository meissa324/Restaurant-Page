//all home components

//function that holds component
function divComponent(){
    //create element
    const element = document.createElement('div');

    //add background image here or in css?
    // element.setAttribute("style",`background: ${mexicanFoodImage}`);

    //return component when function is called
    return element;
}
document.appendChild(divComponent());



export{divComponent}