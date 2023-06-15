
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
        database.ref("/LivingRoom").update({
            "Lighting": true,
        });
    } else {
        database.ref("/LivingRoom").update({
            "Lighting": false,
        });
    }
});
//autoupdate imglight
database.ref("/LivingRoom/Lighting").on("value", function (snapshot) {
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
        database.ref("/LivingRoom").update({
            "Fan": true,
        });
    } else {
        database.ref("/LivingRoom").update({
            "Fan": false,
        });
    }
});
//autoupdate imglight
database.ref("/LivingRoom/Fan").on("value", function (snapshot) {
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
database.ref("/LivingRoom/Temp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = temp;
});
//------------------- humi_livingroom --------------------------//
database.ref("/LivingRoom/Humi").on("value", function (snapshot) {
    var humi = snapshot.val();
    document.getElementById("doam1").innerHTML = humi;
});



// var box3 = document.getElementById("on_off3");
// box3.addEventListener("change", function () {
//     var currentImg = document.getElementById("imgFanCtl3");
//     if (currentImg.src.indexOf("img/tv_off.png") != -1) {
//         database.ref("/Phòng Khách").update({
//             TV: "on",
//         });
//     } else {
//         database.ref("/Phòng Khách").update({
//             TV: "off",
//         });
//     }
// });
// //autoupdate imglight
// database.ref("/Phòng Khách/TV").on("value", function (snapshot) {
//     var ss = snapshot.val();
//     if (ss == "on") {
//         document.getElementById("imgFanCtl3").src = "img/tv_on.png";
//         document.getElementById("on_off3").checked = true;
//     } else {
//         document.getElementById("imgFanCtl3").src = "img/tv_off.png";
//         document.getElementById("on_off3").checked = false;
//     }
// });

// var box4 = document.getElementById("on_off4");
// box4.addEventListener("change", function () {
//     var currentImg = document.getElementById("imgFanCtl4");
//     if (currentImg.src.indexOf("img/LightOff.png") != -1) {
//         document.getElementById("imgFanCtl4").src = "img/LightOff.png";
//         database.ref("Phòng Khách").update({
//             "Đèn 2": "on",
//         });
//     } else {
//         document.getElementById("imgFanCtl4").src = "img/LightOn.png";
//         database.ref("/Phòng Khách").update({
//             "Đèn 2": "off",
//         });
//     }
// });
// //autoupdate imglight
// database.ref("/Phòng Khách/Đèn 2").on("value", function (snapshot) {
//     var ss = snapshot.val();
//     if (ss == "on") {
//         document.getElementById("imgFanCtl4").src = "img/LightOn.png";
//         document.getElementById("on_off4").checked = true;
//     } else {
//         document.getElementById("imgFanCtl4").src = "img/LightOff.png";
//         document.getElementById("on_off4").checked = false;
//     }
// });

// //get temp form database
// database.ref("/Phòng Khách/Mưa").on("value", function (snapshot) {
//     var temp = snapshot.val();
//     if (temp == 1) {
//         document.getElementById("Rain").innerHTML = "Không";
//     }
//     if (temp == 0) {
//         document.getElementById("Rain").innerHTML = "Có";
//     }
// });

