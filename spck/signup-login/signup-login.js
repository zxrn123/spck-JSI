import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
    const firebaseConfig = {
        apiKey: "AIzaSyB0pVZpLBLhiWzPPXSxEeaHd9sc3tFOOiM",
        authDomain: "spck-2ff32.firebaseapp.com",
        databaseURL: "https://spck-2ff32-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "spck-2ff32",
        storageBucket: "spck-2ff32.appspot.com",
        messagingSenderId: "432935042788",
        appId: "1:432935042788:web:ac07482bb335878c3776f1",
        measurementId: "G-DTF40PLS2N"
      };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    document.getElementById("signup-btn").addEventListener('click',(e)=>{
        e.preventDefault()
      var email=document.getElementById('signup-email').value;
      var password=document.getElementById('signup-password').value;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      alert('Sign Up Successful')
      window.location.href='signup-login.html'
      const user = userCredential.user;
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      });
    })


    document.getElementById("login-btn").addEventListener('click',(e)=>{
        e.preventDefault()
      var email=document.getElementById('login-email').value;
      var password=document.getElementById('login-password').value;
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      alert('Log In Successful')
      window.location.href='../Home page/Home.html'
      const user = userCredential.user;
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      });
    })