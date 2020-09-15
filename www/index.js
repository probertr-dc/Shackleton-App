function CheckAnswer() {
    ans.textContent = "800 nautical miles";
}
function Login() {
    var uName = document.getElementById("username");
    var pWord = document.getElementById("password");
    if (uName.value == "Rory" && pWord.value == "123456") {
        ons.notification.alert("Login Successful");
    }
    else {
        ons.notification.alert("Login Failed");
    }
}
document.getElementById("signIn").onclick = Login;