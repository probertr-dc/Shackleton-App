function OpenMenu() {
    console.log("function called");
    document.getElementById("menu").open();
}
function hello() {
    document.getElementById("no").textContent = "hello";
}
document.getElementById("but").onclick = hello;