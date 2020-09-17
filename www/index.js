function CheckAnswer() {
    ans.textContent = "800 nautical miles";
}
function Login() {
    if (document.getElementById("username").value == "Rory" && document.getElementById("password").value == "1233456") {
        var navigator = document.getElementById("navigator");
        navigator.push_page("shackleton.html");
    }
    else {
        ons.notification.alert("Login Failed");
    }
}
document.getElementById("signIn").onclick = Login;