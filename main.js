var crypto = require('crypto');
crypto.createHash("sha256");

let database = firebase.database().ref();
var newPostKey = firebase.database().ref().child('posts').push().key;

let uid = 56789;
let postData = "Hello world!";
var updates = {};
updates['/posts/' + newPostKey] = postData;
updates['/user-posts/' + uid + '/' + newPostKey] = postData;

let db = firebase.database().ref();
db.update(updates).catch((err)=>console.log(err));

function updateDatabase() {
  let username = ""
  let email = ""
  db.push({username:username, email:email});
}

let number = Math.floor(Math.random()*21);
let sign = Math.random > 0.5 ? -1 : 1;
let result = number*sign;