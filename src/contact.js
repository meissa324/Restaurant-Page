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
    //label text
    element.textContent = "name";
    //link to appropriate input
    element.setAttribute("for","name");
    //return element
    return element;

}
function emailLabelComponent(){
    //create label
    const element = document.createElement("label");
    //label text
    element.textContent = "email";
    //link to appropriate input
    element.setAttribute("for","email");
    //make the type email
    element.setAttribute("type","email");
    //return element
    return element;

}

function textAreaLabelComponent(){
    //create label
    const element = document.createElement("label");
    //label text
    element.textContent = "tell us more";
    //link to appropriate input
    element.setAttribute("for","text-area");
    //return element
    return element;

}

//creates text-area element
function textAreaComponent(){
    const element = document.createElement("textarea");
    element.setAttribute("id","text-area");
    return element;
}

//append to form element(inside form element)

export{formComponent,nameInputComponent,emailInputComponent,emailLabelComponent,nameLabelComponent,textAreaComponent,textAreaLabelComponent}