// JavaScript DOM Assignment-1
// Name: Rizwan Ulah
// Roll No : 493961
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// Task-1         Change Text
document.getElementById("heading").innerText = "Welcome to DOM JavaScript DOM";

// ............................................................................................................

// Task-2 Change Paragraph Text on Button Click
let para_1= document.getElementById("para-1");
function changeText(){
    para_1.innerText= "Paragraph text changed!"
}

// ............................................................................................................

// Task-3 Change Background color on Button Click
function changeBackground(){
    document.body.style.backgroundColor= "lightblue"
}

// ............................................................................................................ 

// Task-4 Show Alert message on Button Click
function Alert(){
    alert("DOM is working")
}

// ............................................................................................................ 

// Task-5 Update Text Using Input Field
function inputFild(){
    let inputText= document.getElementById("input").value;
    let para_2= document.getElementById("updated-paragraph");
    para_2.innerText= inputText;
}

// ............................................................................................................
// Assignment - 1 is Completed