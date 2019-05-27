//  ------ Objects ------ //
var user = { "fname":"testname", "age":30, "array":[1,2,3,4], "userObj":{"a":3} }

//user.fname -> "testname"
//user.array[0] -> 1
//user.userObj.a -> 3


//Constructor
function User(fname,age){
  this.firstname = fname;
  this.age = age;
  this.description = function(){
    return this.firstname + " is " + this.age + " years old.";
  }
}

var u1 = new User('steve', 34);
u1.description();
u1.email = "test@email.com"


// ---- JSON ----///
var myObj = { "name":"test", "paswrd":"1234" }
var str = JSON.stringify(myObj); //converts to string so server recognizes
//send to server
var obj = JSON.parse(str);