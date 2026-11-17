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

case "1.2" : return

case "1.3" : return
case "1.4" : return
case "1.5" : return

case "2.1" : return "Variables, Data Types, and Functions"
case "2.2": return
case "2.3": return
case "2.4": return
case "2.5": return

case "3.1" : return "Decisions and loops"
case "3.2": return
case "3.3": return
case "3.4": return
case "3.5": return

case "4.1" : return "Document Object Model"
case "4.2": return
case "4.3": return
case "4.4":
case "4.5":

case "5.1": return "HTML forms"
case "5.2":
case "5.3":
case "5.4":
case "5.5":

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