// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRY0vWQvy5BdJ8XYn1wh-EzBJxljXWrzU",
    authDomain: "smarthome-d2831.firebaseapp.com",
    databaseURL: "https://smarthome-d2831-default-rtdb.firebaseio.com",
    projectId: "smarthome-d2831",
    storageBucket: "smarthome-d2831.appspot.com",
    messagingSenderId: "123826159601",
    appId: "1:123826159601:web:633df3eb2cee447e0b4e50",
    measurementId: "G-7PN1X3JR15",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//button--------------------------------
var checkbox_toggle = document.getElementById("darkmode");
checkbox_toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

var checkbox_toggle = document.getElementById("darkmode");
checkbox_toggle.addEventListener("change", function () {
    document.body.classList.toggle("bao_p_w");
});
//----------------------------------------- Kitchen -------------------------------------------------//
//------------------- lighting_kitchen --------------------------//
var box3 = document.getElementById("on_off3");
box3.addEventListener("change", function () {
    var currentImg = document.getElementById("lighting_kitchen");
    if (currentImg.src.indexOf("img/LightOff.png") != -1) {
        database.ref("/Kitchen").update({
            Lighting: true,
        });
    } else {
        database.ref("/Kitchen").update({
            Lighting: false,
        });
    }
});
//autoupdate imglight
database.ref("/Kitchen/Lighting").on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == true) {
        document.getElementById("lighting_kitchen").src = "img/LightOn.png";
        document.getElementById("on_off3").checked = true;
    } else {
        document.getElementById("lighting_kitchen").src = "img/LightOff.png";
        document.getElementById("on_off3").checked = false;
    }
});
//------------------- fan_kitchenroom --------------------------//
// var box4 = document.getElementById("on_off4");
// box4.addEventListener("change", function () {
//     var currentImg = document.getElementById("fan_kitchen");
//     if (currentImg.src.indexOf("img/fanoff.png") != -1) {
//         database.ref("/Kitchen").update({
//             "Fan": true,
//         });
//     } else {
//         database.ref("/Kitchen").update({
//             "Fan": false,
//         });
//     }
// });
//autoupdate imglight
database.ref("/Kitchen/Fan").on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == true) {
        document.getElementById("fan_kitchen").src = "img/fanon.jpg";
        //document.getElementById("on_off4").checked = true;
    } else {
        document.getElementById("fan_kitchen").src = "img/fanoff.png";
        //document.getElementById("on_off4").checked = false;
    }
});
//------------------- smoke --------------------------//
database.ref("/Kitchen/Smoke").on("value", function (snapshot) {
    var smoke = snapshot.val();
    document.getElementById("smoke").innerHTML = smoke;
});
