// var a  = 0;
// var i = setInterval(function(){
//   console.log("hello " + a);
//   a++;
//   if (a == 5)
//     clearInterval(i);
// }, 3000); //function is added within other function call; called every 3 secs


setTimeout(function(){
  console.log("hello");
}, 3000);

console.log("world");
//note: functions are performed asynchronously,
// meaning that a function can run while others continue to wait



var a = document.getElementById("demo"); //applies to html element named "demo"
a.onclick = runCommand;
function runCommand(ev){
  this.innerHTML = "<b>type: " + ev.type +" button: " + ev.button+"</b>";
}

a.onclick = runCommand2;
function runCommand(ev){
  console.log("hello");
}
//these top two are event handlers, the second one overwrites the first one, use event listeners instead



window.addEventListener('click', function(){
  console.log("Hello");
})
window.addEventListener('click', function(){
  console.log("World");
})

//window.removeEventListener('click', /*add function here to remove?*/)

window.addEventListener('keypress', function(ev){
  console.log(ev.keycode);
})

