function login() {
    // Get username and password entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Connect to firebase and look at the “users” collection
    var ref = firebase.database().ref("users");
    // see if there is a user with same id as entered
    ref.child(username).once('value', function (snapshot) {
        var exists = (snapshot.val() !== null);
        if (exists) {
            // if user exists then check password
            if (snapshot.val().pass == password) {
                // if password is correct then load shackleton.html page
                var navigator = document.getElementById('navigator');
                navigator.resetToPage('shackleton.html');
            }
            else {
                ons.notification.alert('Incorrect passowrd');
            }
        }
        else {
            ons.notification.alert('Username unknown');
        }
    })
}