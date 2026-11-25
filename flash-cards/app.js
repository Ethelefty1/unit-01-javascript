"use strict"
const EXAM_DATE = new Date("2026, 11, 25")
function checkScreen() {
    if (window.innerWidth < 600) {
        document.getElementById("screenMsg").textContent = "Small screen: turn your device sideways for a bigger card."
    } else {
        document.getElementById("screenMsg").textContent = "Window width: " + window.innerWidth + "px"

    }
}

function startApp() {
    checkScreen();
    // Checkpoint 3
    updateScore()
    showCountdown()
    showCard(current)
    document.getElementById("shuffleBtn").addEventListener("click", shuffleCard)
    document.getElementById("gotBtn").addEventListener("click", markGot)
    document.getElementById("missBtn").addEventListener("click", markMissed)
    document.getElementById("resetBtn").addEventListener("click", resetScore)
    document.getElementById("nextBtn").addEventListener("click", nextCard)
    document.getElementById("card").addEventListener("mouseover", highlightCard)
    document.getElementById("card").addEventListener("mouseout", unhighlightCard)
    document.addEventListener("keydown", checkKey)
}

//CheckPoint 2 
function getDomain(objective) {

    switch (objective) {
        case "1.1": return "Complete and debug code that uses assignment and arithmetic operators"

        case "1.2": return "Apply JavaScript best practices"

        case "1.3": return "Evaluate the use of internal and external scripts"
        case "1.4": return "Implement exception handling"
        case "1.5": return "Complete and debug code that interacts with the Browser Object Model (BOM)"

        case "2.1": return "Declare and use variables of primitive data types"
        case "2.2": return "Declare and use arrays"
        case "2.3": return "Complete and debug code that uses objects"
        case "2.4": return "Complete and debug code that uses built-in Math functions"
        case "2.5": return "Complete and debug functions that accept parameters and return values"

        case "3.1": return "Evaluate expressions that use logical and comparison operators"
        case "3.2": return "Complete and debug decision statements"
        case "3.3": return "Complete and debug loops"

        case "4.1": return "Identify and construct the Document Object Model (DOM) tree"
        case "4.2": return "Identify and handle document, form, keyboard, and mouse events"
        case "4.3": return "Complete and debug code that outputs to an HTML document"
        case "4.4": return "Complete and debug code that locates, modifies, and adds HTML elements and attributes to documents"
        case "4.5": return "Create events using event handlers and listeners"

        case "5.1": return "Complete and debug code that retrieves form input and sets form field values"
        case "5.2": return "Complete and debug code that performs input validation"
        case "5.3": return "Describe the form submission process"


        default: return "Unknown Domain"
    }
}

function Card(question, answer, objective) {
    this.question = question
    this.answer = answer
    this.objective = objective
    this.getLabel = function () {
        return "Obj" + this.objective + " | " + getDomain(objective)
    }
}
let deck = [
    new Card('"5"+ 3', "53 -- string and a number combine while using addition", "1.1"),

    new Card("a++", "a + 1 -- ++ is a increment so it adds 1 to a ", "1.1"),

    new Card("typeof null", "object -- null in typeof returns object", "2.1"),

    new Card("typeof NaN", "number-- NaN is actually a number itself in javascript", "2.1"),

    new Card('"5" == 5', "true-- == is not strict so string 5 is equal to number 5", "3.1"),

    new Card('"5" === 5', "false-- === is strict so strings and numbers are not equal to eachother", "3.1"),

    new Card("NaN === NaN", "true-- they are the same thing so they are equal to each other", "3.1"),

    new Card('parseInt("3.9")', '3.9 -- parseInt converts strings into a number', "2.1"),

    new Card("toFixed type", "string", "2.1"),

    new Card("Math.round(-2.5)", "-2 -- rounding -2.5 gives you 2 ", "2.4"),
]



let current = 0
function showCard(index) {
    document.getElementById("cardQuestion").textContent = deck[index].question
    document.getElementById("cardAnswer").textContent = deck[index].answer
    document.getElementById("cardLabel").textContent = deck[index].getLabel()
    document.getElementById("cardAnswer").style.display = "none"
    document.getElementById("cardNumber").textContent = "Card " + (index + 1) + " of " + deck.length

}
function flipCard() {
    if (document.getElementById("cardAnswer").style.display === "none") {
        document.getElementById("cardAnswer").style.display = "block"
    } else {
        document.getElementById("cardAnswer").style.display = "none"
    }
}
function nextCard() {
    current++
    if (current % deck.length === 0) {
        current = 0
    }
    showCard(current)
}
function highlightCard() {
    let card = document.getElementById("card")
    card.className = "card highlight"

}
function unhighlightCard() {
    let card = document.getElementById("card")
    card.className = "card"
}
function checkKey(event) {
    if (event.key === "ArrowRight") {
        nextCard()
    }
}
//Checkpoint 4
var gotIt = 0
var missed = 0
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function shuffleCard() {
    current = getRandom(0, deck.length - 1)
} 
function updateScore() {
    if (document.getElementById("scoreMsg").textContent === "") {
        document.getElementById("scoreMsg").textContent = "No cards scored yet"
    } else {
        document.getElementById("scoreMsg").textContent = gotIt + "of" + (gotIt + missed) + " correct (" + Math.round((gotIt / (gotIt + missed)) * 100) + " %) "
    }
    if (Math.round((gotIt / (gotIt + missed)) * 100).toFixed(1) >= 90) {
        document.getElementById("scoreMsg").textContent += "Exam Ready"
    } else if (Math.round((gotIt / (gotIt + missed)) * 100).toFixed(1) >= 80) {
        document.getElementById("scoreMsg").textContent += "Almost there, keep flipping"
    } else if (Math.round((gotIt / (gotIt + missed)) * 100).toFixed(1) >= 70) {
        document.getElementById("scoreMsg").textContent += "Flip your missed cards again"
    }

}
function markGot() {
    gotIt += 1
    current++
    updateScore()
}

function markMissed() {
    missed += 1
    current++
    updateScore()
}

function resetScore() {
    let reset = confirm("Reset your score to 0?")
    if (reset === true) {
        gotIt = 0
        missed = 0
        document.getElementById("scoreMsg").textContent = ""
        updateScore()
    }
}

function showCountdown() {
    let date = new Date()
    document.getElementById("countdown").textContent = Math.ceil(EXAM_DATE - date) / (1000 * 60 * 60 * 24) + " days until exam day." + EXAM_DATE.toLocaleString("en-us")
    if (date >= EXAM_DATE) {
        document.getElementById("countdown").textContent = "Exam day is here" + EXAM_DATE.toLocaleString("en-us") + ", You've got this! "
    }
}
