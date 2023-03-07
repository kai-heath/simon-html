function Login() {
    const username = document.querySelector("#name");
    localStorage.setItem("username", username.value);
    window.location.href = "play.html";
}