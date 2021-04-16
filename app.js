//rock paper scissors



var choices = ["Rock", "Paper", "Scissors"];
var map = {};

choices.forEach(function(choice, i) {
    map[choice] = {};
    map[choice][choice] = "Was a tie"
    map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    map[choice][choices[(i+2)%3]] = choice + " wins"
});
console.log("kinda working");



document.querySelectorAll("div.choicebox")
	.forEach(item => {
  		item.addEventListener('click', event => {
    		x = item.id
    		console.log(x)
	  })
	})



function computerSelection() {
	var item = choices[Math.floor(Math.random() * choices.length)]
	return item;
};

function compare() {
    alert ((map[x] || {})[computerSelection()] || "Invalid choice");
};


// function changeBackground() {
//    document.style.background = "red";
// }
// var thing = document.getElementsByClassName("choicebox")
// thing.onclick = () => { changeBackground(); }


var btn = document.getElementById("playBtn");
btn.onclick = () => { compare(); }