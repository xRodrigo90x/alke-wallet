
const usuarioRegistrado = "admin";
const contraseñaRegistrada = "admin123456";

const form = document.getElementById("form");
const ojoClick = document.getElementById("ojo");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        window.location.replace("menu.html")
    } else {
        alert("Usuario o contraseña invalidos")
    }

});

ojoClick.addEventListener("click", () => {
    contraseña.type = contraseña.type === 'password' ? 'text' : 'password';

})

