
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCCRdbAj9_-TlWM4RkKVYU8VNk1bLuDb_I",
    authDomain: "kkkkkkkk-69002.firebaseapp.com",
    databaseURL: "https://kkkkkkkk-69002-default-rtdb.firebaseio.com",
    projectId: "kkkkkkkk-69002",
    storageBucket: "kkkkkkkk-69002.appspot.com",
    messagingSenderId: "595769037037",
    appId: "1:595769037037:web:9e135e9863511ed099bce4"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database(  ).ref("/").child(user_name).update({
    purpose : "adding user"});
}