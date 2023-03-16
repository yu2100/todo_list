//creating a function to remove item from the list

function addItem() {
    let a = document.createTextNode("list");
    let inputValue = document.getElementById("inputDisplay");
    let li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(a);
    if(inputValue === ''){
        alert("write inside here");
    }else{
        document.getElementById("myList").appendChild(li);
    } 
    document>getElementById("myList").appedChild(li);
}
 


function removeItem() {
    let a = document.getElementById("list");
    let candidate = document.getElementById("candidate");
    let item = document.getElementById(candidate.value);
    a.removeChild(item);
}