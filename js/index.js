const btnFacebook = document.getElementById('facebook-log');
const btnGoogle = document.getElementById('google-log');
const denunciar = document.getElementById('denunciar');
// esto es un comentario para subir cambios
denunciar.addEventListener('click', event => {
  window.location.assign('../views/denuncias1.html');
});

btnGoogle.addEventListener('click', event => {
  let provider = new firebase.auth.GoogleAuthProvider();
  const promise = firebase.auth().signInWithRedirect(provider);
  promise.catch(event => alert(event.message));
});
btnFacebook.addEventListener('click', event => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(result => {
      let token = result.credencia.accessToken;
      let user = result.user;
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      console.log(errorCode);
    });
});
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    window.location.assign('../views/store.html');
  }
});
