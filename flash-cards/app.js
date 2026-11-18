"use strict"
const EXAM_DATE = new Date("2026, 11, 25")
function checkScreen(){
    if (window.innerWidth < 600){
        document.getElementById("screenMsg").textContent ="Small screen: turn your device sideways for a bigger card."
    } else {
        document.getElementById("screenMsg").textContent = "Window width: " + window.innerWidth + "px"

    }
}
function startApp(){
    checkScreen();
}

//CheckPoint 2 
function getDomain(objective){

 switch (objective){
case "1.1" : return "Complete and debug code that uses assignment and arithmetic operators"

case "1.2" : return "Apply JavaScript best practices"

case "1.3" : return "Evaluate the use of internal and external scripts"
case "1.4" : return "Implement exception handling"
case "1.5" : return "Complete and debug code that interacts with the Browser Object 
Model (BOM)"

case "2.1" : return "Declare and use variables of primitive data types"
case "2.2": return "Declare and use arrays"
case "2.3": return "Complete and debug code that uses objects"
case "2.4": return "Complete and debug code that uses built-in Math functions"
case "2.5": return "Complete and debug functions that accept parameters and return 
values"

case "3.1" : return "Evaluate expressions that use logical and comparison operators"
case "3.2": return "Complete and debug decision statements"
case "3.3": return "Complete and debug loops"

case "4.1" : return "Identify and construct the Document Object Model (DOM) tree"
case "4.2": return  "Identify and handle document, form, keyboard, and mouse events"
case "4.3": return "Complete and debug code that outputs to an HTML document"
case "4.4": return "Complete and debug code that locates, modifies, and adds HTML 
elements and attributes to documents"
case "4.5": return "Create events using event handlers and listeners"

case "5.1": return "Complete and debug code that retrieves form input and sets form 
field values"
case "5.2": return "Complete and debug code that performs input validation
"
case "5.3": return "Describe the form submission process"


default : return "Unknown Domain"
}
}

function Card(question, answer, objective){
    this.question = question
    this.answer = answer
    this.objective = objective
    this.getLabel = function() {
        return "Obj" + this.objective + " | " + getDomain(objective)
    }
}
let deck = [
    new Card ('"5"+ 3',"53 -- string and a number combine while using addition","1.1"),

    new Card  ( "a++","a + 1 -- ++ is a increment so it adds 1 to a ","1.1"),

    new Card ("typeof null","object -- null in typeof returns object", "2.1"),

    new Card ("typeof NaN","number-- NaN is actually a number itself in javascript","2.1"),

 new Card ('"5" == 5', "true-- == is not strict so string 5 is equal to number 5", "3.1"),

 new Card ('"5" === 5', "false-- === is strict so strings and numbers are not equal to eachother", "3.1"),

 new Card ("NaN === NaN" , "true-- they are the same thing so they are equal to each other", "3.1"),

 new Card ('parseInt("3.9")', '3.9 -- parseInt converts strings into a number', "2.1"),

 new Card ("toFixed type", "string","2.1"),

 new Card ("Math.round(-2.5)", "-2 -- rounding -2.5 gives you 2 ","2.4"),
]

 console.log(deck[0].getLabel())