
var firebaseConfig = {
  apiKey: "AIzaSyBkhsx1dJFZakVM_EWxxR3tN-y2QGEVHtA",
  authDomain: "project-45910.firebaseapp.com",
  databaseURL: "https://project-45910-default-rtdb.firebaseio.com",
  projectId: "project-45910",
  storageBucket: "project-45910.appspot.com",
  messagingSenderId: "1054594349695",
  appId: "1:1054594349695:web:0ee0ef7184688afaebdd4a",
  measurementId: "G-WB8E0XL46F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "Main.html";
}