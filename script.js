var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createButtonDelete() {
    var buttonDelete = document.createElement("button");
    buttonDelete.appendChild(document.createTextNode("Delete"));
    return buttonDelete;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(createButtonDelete());
    ul.appendChild(li);
    input.value = "";
}

function toggleDone(tag) {
    if (event.target.tagName === tag) {
        event.target.classList.toggle("done");
    }   
}

function deleteParentElement(tag) {
    if (event.target.tagName === tag) {
        var itemToDelete = event.target.parentElement;
        itemToDelete.remove();
    }
} 

button.addEventListener("click", function(){
    if (inputLength() > 0) {
        createListElement();
    }   
});

input.addEventListener("keypress", function() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
});

ul.addEventListener("click", function(){ toggleDone("LI") });

ul.addEventListener("click", function(){ deleteParentElement("BUTTON") });