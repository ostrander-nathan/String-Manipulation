var testString = "";
var btn = document.getElementById("btn");
btn.addEventListener('click', createString);

var input = "";

var results = document.getElementById("results");

function lettersOnly(event) {
    var key = event.keyCode;
    return ((key > 64 && key < 91) || (key > 96 && key < 123) || key == 8);
};

function reversal(value) {
    return value.split("").reverse().join("");
};

function alphabits(value) {
    return value.split("").sort().join("")
};

function palindrome(value) {
    if (value === reversal(value)) {
        return "It is a palindrome"
    } else {
        return "Palindrome"
    }
};

function createString() {
    testString = document.getElementById("inputText").value
    results.innerHTML = "<div>" + "Word" + testString + "</div>";
    results.innerHTML += "<div>This is your alphabet " + alphabits(testString) + "</div>";
    results.innerHTML += "<div>This is your reverse " + reversal(testString) + "</div>";
    results.innerHTML += "<div>Not a Sarah " + palindrome(testString) + "</div>";
};

function validate(event) {
    if (event.keycode == 13 || event.which == 13) {
        results();
    }
};

inputText.addEventListener('keydown', validate);
