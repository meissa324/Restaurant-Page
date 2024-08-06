//create a form

//form element
function formComponent(){
    //create element
    const element = document.createElement("form");

    return element;
}

//creates input element
function nameInputComponent(){
    //create input
    const element = document.createElement("input");
    element.setAttribute("id","name");
    return element;

}

function emailInputComponent(){
    //create input
    const element = document.createElement("input");
    element.setAttribute("id","email");
    return element;

}

//creates label element
function nameLabelComponent(){
    //create label
    const element = document.createElement("label");
    //link to appropriate input
    element.setAttribute("for","name");
    //return element
    return element;

}
function emailLabelComponent(){
    //create label
    const element = document.createElement("label");
    //link to appropriate input
    element.setAttribute("for","email");
    //return element
    return element;

}

//creates text-area element
function textAreaComponent(){
    const element = document.createElement("text-area");

    return element;
}

//append to form element(inside form element)

export{formComponent,inputComponent,labelComponent,textAreaComponent}