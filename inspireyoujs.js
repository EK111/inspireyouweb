const txtemail = document.getElementById('txtemail');
const txtpassword = document.getElementById('txtpassword');
const btnSignin = document.getElementById('btnSignin');

//Sign-In Event
btnSignin.addEventListener('click',e => {
	
	//Get email-password

	const email = txtemail.value;
	const password = txtpassword.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email,password);

	promise.catch(e => console.log(e.message));

});

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  console.log(user.uid);
} else {
  // No user is signed in.
 console.log('user not signed-in'); 
}
	
firebase.auth().onAuthStateChanged(firebaseuser => {

 		if (user) {
 			//User is signed in.
 			console.log(firebaseuser);
	    	window.location = 'upload.html';
	  	} else {
	    	// No user is signed in.
	    	console.log('firebaseuser not signed-in');
		}
});



	
	
	
	// firebase.auth().signInWithPopup(provider).then(function(result) {
	//   // This gives you a Google Access Token. You can use it to access the Google API.
	//   var token = result.user.uid;
	//   // The signed-in user info.
	//   user = result.user;
	//   console.log(user.displayName);
	//   sessionStorage.token=token;
	//   // ...
	// }).catch(function(error) {
	//   // Handle Errors here.
	//   var errorCode = error.code;
	//   var errorMessage = error.message;
	//   cosole.log(errorMessage);
	//   loginError();
	  
	// });



function loginError(){

 alert("You are not Authenticated... ","This google account is not authenticated with this site");

 };