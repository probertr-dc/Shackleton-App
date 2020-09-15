function CheckAnswer() {
    ans.textContent = "800 nautical miles";
}
function Login() {
    if (document.getElementById("username").value == "Rory" && document.getElementById("password").value == "1233456") {
        ons.notification.alert("Login Successful");
    }
    else {
        ons.notification.alert("Login Failed");
    }
}
document.getElementById("signIn").onclick = Login;