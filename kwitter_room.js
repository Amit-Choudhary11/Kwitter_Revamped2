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


      person = localStorage.getItem("username");
      document.getElementById("person").innerHTML=person;


function addRoom(){
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({
        purpose: "add room name"
   
  });

  localStorage.setItem("room_name", room_name);

window.location= "kwitter_page.html";

document.getElementById("room_name").value="";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log(Room_names);

display_room= "<div onclick='goToRoom(this.id)' id=" + Room_names + ">" + Room_names + "</div> <hr>";

document.getElementById("output").innerHTML += display_room;


     //End code
     });});}
getData();

function goToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location= "kwitter_page.html";   
 }