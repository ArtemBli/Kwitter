

var firebaseConfig = {
      apiKey: "AIzaSyCoeIVEuo2KXAccbwVkDrDR1J4WyR9CjOc",
      authDomain: "kwitter-57606.firebaseapp.com",
      databaseURL: "https://kwitter-57606-default-rtdb.firebaseio.com",
      projectId: "kwitter-57606",
      storageBucket: "kwitter-57606.appspot.com",
      messagingSenderId: "1014195090656",
      appId: "1:1014195090656:web:b84c7d59c9a00e824f4c85",
      measurementId: "G-KX24S4JRZF"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    function addRoom() {
      room_name = document.getElementById("room_name").value;
 
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}