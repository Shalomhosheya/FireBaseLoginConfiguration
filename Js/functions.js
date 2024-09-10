
const firebaseConfig = {
    apiKey: "AIzaSyDBc-LRFAR-6Ds5ieFNd8f5MyuDM-Afqr0",
    authDomain: "login-2db3a.firebaseapp.com",
    projectId: "login-2db3a",
    storageBucket: "login-2db3a.appspot.com",
    messagingSenderId: "919783142450",
    appId: "1:919783142450:web:601185abf417956649b82b",
    measurementId: "G-B9FNWFQN50"
};
/*

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
$('#btnCreate').on('click',()=>{

    $('#main').css('display','none')
    $('#reg').css('display','flex')
})
$('#btnSignIn2').on('click', () => {
    const email = $('#email2').val();
    const password = $('#passwordSelect2').val();

    // Corrected Firebase function
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            alert("Success");
            $('#main').css('display', 'flex');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            alert("Fail");
            $('#reg').css('display', 'flex');
        });

    // Update UI elements
});
$('#btnSignIn').on('click',()=>{

    const email = $('#email').val();
    const password = $('#passwordSelect').val();

    auth.signInWithEmailAndPassword(email,password)
        .then(UserCrenditials=>{

            const user=UserCrenditials.user;

            window.location.href="Pages/DashBoard.html"//code to direct for another html index
            alert("Login Success")
        })
        .catch((error)=>{

            const errorCode =error.code;
            const errorMessage = error.message;

            alert("Login Failure")
        })
})
$('#btnBack').on('click',()=>{
    $('#main').css('display','flex')
    $('#reg').css('display','none')
})