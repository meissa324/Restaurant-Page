//create a form

//form element
function formComponent(){
    //create element
    const element = document.createElement("form");

    return element;
}

//creates input element
function inputComponent(){
    //create input
    const element = document.createElement("input");

    return element;

}

//creates label element
function nameLabelComponent(){
    //create label
    const element = document.createElement("label");
    //its attribute changed when appended
    element.setAttribute("id","name");
    //return element
    return element;

}
function emailLabelComponent(){
    //create label
    const element = document.createElement("label");
    //its attribute changed when appended
    element.setAttribute("id","email");
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