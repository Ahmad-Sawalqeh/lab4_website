/* eslint-disable quotes */
// /* eslint-disable strict */
// eslint-disable-next-line strict
var bg_color = document.getElementById("bg_color");
var confirmMe = document.getElementById("confirmMe");
var alertMe = document.getElementById("alertMe");

bg_color.addEventListener("click",function(){
  var color = prompt("write the name of the new background-color:");
  document.body.style.backgroundColor = color;
});

confirmMe.addEventListener("click",function(){
  confirm("Liverpool won the champion lats year");
});

alertMe.addEventListener("click",function(){
  alert("Do NOT close our website");
});


var player = prompt("How many football player in one team?");
// console.log("type of = "+typeof(player));

while(player!=11){
  player = prompt('Sorry try again, How many football player in one team?');
}
if(player == 11){
  alert("correct answer");
}