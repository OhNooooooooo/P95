var firebaseConfig = {
    apiKey: "AIzaSyARrcIkXDKKTPnqaU1iXEvBrxITYodaYs0",
    authDomain: "letsachatdatabase.firebaseapp.com",
    databaseURL: "https://letsachatdatabase-default-rtdb.firebaseio.com",
    projectId: "letsachatdatabase",
    storageBucket: "letsachatdatabase.appspot.com",
    messagingSenderId: "946071523965",
    appId: "1:946071523965:web:c6bf84e61d563be7d01714"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "addinguser",
        
    });
    window.location="letschat.html"
}

username= localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name = "+Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}