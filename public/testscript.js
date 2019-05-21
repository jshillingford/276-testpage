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
// meaning that function can run while others continue to wait