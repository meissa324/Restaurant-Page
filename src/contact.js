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
function labelComponent(){
    //create label
    const element = document.createElement("label");
    //its attribute changed when appended
    return element;

}

//creates text-area element
function textAreaComponent(){
    const element = document.createElement("text-area");

    return element;
}

//append to form element(inside form element)

export{formComponent,inputComponent,labelComponent,textAreaComponent}