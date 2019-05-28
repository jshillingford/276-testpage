var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 
  49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var a1 = document.getElementsByName("max");
var a2 = document.getElementsByName("a+");
var a3 = document.getElementsByName("a");
var a4 = document.getElementsByName("a-");
var a5 = document.getElementsByName("b+");
var a6 = document.getElementsByName("b");
var a7 = document.getElementsByName("b-");
var a8 = document.getElementsByName("c+");
var a9 = document.getElementsByName("c");
var a10 = document.getElementsByName("c-");
var a11 = document.getElementsByName("d");
var a12 = document.getElementsByName("f");

if (isNaN(a1[0].value)) {
  alert("Must input numbers.");
}

for (let i = 0; i < grades.length; i++) {
  var curr = grades[i];
  if (grades[i] <= a1[0].value && grades[i] >= a2[0].value) {
    document.getElementsByName("grade1").value = "O";
  } else if (grades[i] < a2[0].value && grades[i] >= a3[0].value) {
    document.getElementsByName("grade2").value = "O";
  } else if (grades[i] < a3[0].value && grades[i] >= a4[0].value) {
    document.getElementsByName("grade3").value = "O";
  } else if (grades[i] < a4[0].value && grades[i] >= a5[0].value) {
    document.getElementsByName("grade4").value = "O";
  } else if (grades[i] < a5[0].value && grades[i] >= a6[0].value) {
    document.getElementsByName("grade5").value = "O";
  } else if (grades[i] < a6[0].value && grades[i] >= a7[0].value) {
    document.getElementsByName("grade6").value = "O";
  } else if (grades[i] < a7[0].value && grades[i] >= a8[0].value) {
    document.getElementsByName("grade7").value = "O";
  } else if (grades[i] < a8[0].value && grades[i] >= a9[0].value) {
    document.getElementsByName("grade8").value = "O";
  } else if (grades[i] < a9[0].value && grades[i] >= a10[0].value) {
    document.getElementsByName("grade9").value = "O";
  } else if (grades[i] < a10[0].value && grades[i] >= a11[0].value) {
    document.getElementsByName("grade10").value = "O";
  } else {
    document.getElementsByName("grade11").value = "O";
  }
}
