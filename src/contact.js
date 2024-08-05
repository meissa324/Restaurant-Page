//create a form

//form element
function formComponent(){
    //create element
    element = document.createElement("form");

    return element;
}

//creates input element
function inputComponent(){
    //create input
    element = document.createElement("input")

}

//creates label element
function labelComponent(){
    //create label
    element = document.createElement("label");
    //its attribute changed when appended


}

//creates text-area element
function textAreaComponent(){
    element = document.createElement("text-area");
}

//append to form element(inside form element)

export{formComponent,inputComponent,labelComponent,textAreaComponent}