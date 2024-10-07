phrase = prompt("Enter a phrase");
document.write("You entered - ", phrase);

// Your pig-latin translation code here
let phrase = prompt("Enter a phrase");
document.write("You entered: " + phrase + "<br>");

// Your Pig Latin translation code here

if (phrase.charAt(0) === "a" || phrase.charAt(0) === "e" || phrase.charAt(0) === "i" || phrase.charAt(0) === "o" || phrase.charAt(0) === "u") {
  document.write(phrase + "way");
} 
} 