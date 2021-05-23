//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB8CYbV3XcDPNrTY6umEH6I_15mPAFannA",
    authDomain: "einstine-thkf.firebaseapp.com",
    databaseURL: "https://einstine-thkf-default-rtdb.firebaseio.com",
    projectId: "einstine-thkf",
    storageBucket: "einstine-thkf.appspot.com",
    messagingSenderId: "31759391015",
    appId: "1:31759391015:web:9f986187ac3505e081b102"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name= localStorage.getItem("room_name");
  person_user = localStorage.getItem("username");

  function sendMessage(){
    msg = document.getElementById("msg_input").value;
    firebase.database().ref(room_name).push({
    user_name: person_user,
    message: msg,
    like:0
     
    });

    document.getElementById("msg_input").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function back(){
    window.location= "kwitter_room.html";
}