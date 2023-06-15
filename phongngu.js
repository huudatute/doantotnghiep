// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRY0vWQvy5BdJ8XYn1wh-EzBJxljXWrzU",
  authDomain: "smarthome-d2831.firebaseapp.com",
  databaseURL: "https://smarthome-d2831-default-rtdb.firebaseio.com",
  projectId: "smarthome-d2831",
  storageBucket: "smarthome-d2831.appspot.com",
  messagingSenderId: "123826159601",
  appId: "1:123826159601:web:633df3eb2cee447e0b4e50",
  measurementId: "G-7PN1X3JR15"
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
//----------------------------------------- livingroom -------------------------------------------------//
//------------------- lightinglivingroom --------------------------//
var box1 = document.getElementById("on_off1");
box1.addEventListener("change", function () {
    var currentImg = document.getElementById("imgFanCtl1");
    if (currentImg.src.indexOf("img/LightOff.png") != -1) {
        database.ref("/BedRoom").update({
            "Lighting": true,
        });
    } else {
        database.ref("/BedRoom").update({
            "Lighting": false,
        });
    }
});
//autoupdate imglight
database.ref("/BedRoom/Lighting").on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == true) {
        document.getElementById("imgFanCtl1").src = "img/LightOn.png";
        document.getElementById("on_off1").checked = true;
    } else {
        document.getElementById("imgFanCtl1").src = "img/LightOff.png";
        document.getElementById("on_off1").checked = false;
    }
});
//------------------- fan_livingroom --------------------------//
var box2 = document.getElementById("on_off2");
box2.addEventListener("change", function () {
    var currentImg = document.getElementById("imgFanCtl2");
    if (currentImg.src.indexOf("img/fanoff.png") != -1) {
        database.ref("/BedRoom").update({
            "Fan": true,
        });
    } else {
        database.ref("/BedRoom").update({
            "Fan": false,
        });
    }
});
//autoupdate imglight
database.ref("/BedRoom/Fan").on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == true) {
        document.getElementById("imgFanCtl2").src = "img/fanon.jpg";
        document.getElementById("on_off2").checked = true;
    } else {
        document.getElementById("imgFanCtl2").src = "img/fanoff.png";
        document.getElementById("on_off2").checked = false;
    }
});
//------------------- temp_livingroom --------------------------//
database.ref("/BedRoom/Temp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = temp;
});
//------------------- humi_livingroom --------------------------//
database.ref("/BedRoom/Humi").on("value", function (snapshot) {
    var humi = snapshot.val();
    document.getElementById("doam1").innerHTML = humi;
});
