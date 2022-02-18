

// Your web app's Firebase configuration
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
  // Initialize Firebase


  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("Main.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
              childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button id='but' class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatedLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on the like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(but).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
//End code
    