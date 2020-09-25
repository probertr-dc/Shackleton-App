function Login() {
    if (document.getElementById("username").value == "Rory" && document.getElementById("password").value == "123456") {
        var navigator = document.getElementById("navigator");
        navigator.resetToPage("shackleton.html");
    }
    else {
        ons.notification.alert("Login Failed");
    }
}