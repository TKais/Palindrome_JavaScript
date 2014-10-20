function palindromeChecker() {
  var string = prompt("Give me a string, and I'll check to see if it's a palindrome.");
  var stringArray = [];
  if (typeof string == "string") {
    var backwards = string.split("").reverse().join("");
    if (string === backwards) {
      alert("This is a palindrome, yay.");
    } else {
      alert("This isn't a palindrome, sorry.")
    }
  }
}