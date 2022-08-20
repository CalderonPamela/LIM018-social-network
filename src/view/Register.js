import { createUser,sendEmail } from '../lib/index.js'
export default () => {
    const viewRegister = `
    <section class="contenido_container2" id="container2">
    <div class = "form">
    <h2 class =" titulo-register">Crear cuenta</h2>
    <input type="text" id="name" class ="form-input" placeholder ="Nombre de Usuario">
    <input type="text" id="email" class ="form-input" placeholder ="Correo Electrónico">
    <input type="password" id="password" class ="form-input" placeholder ="Contraseña">
    <button class="button-register" id="register">
        Registrate
    </button>
    <button class="button-google" id="optiongoogle">
        Iniciar Sesión con Google
    </button>
    <p id="message-error"></p>
    </div>
    </section>`

    const divElement = document.createElement('div')
    divElement.innerHTML = viewRegister;
   
    return divElement;
}

export const registerFunctions = () => {
    const btnRegister = document.getElementById('register')
    btnRegister.addEventListener('click', (e) => {
        const user = document.getElementById('email').value
        const password = document.getElementById('password').value
        const errorMessage = document.getElementById('message-error')
        if(user != '' && password != ''){
          createUser(user, password).then((userCredential) => {
            // Signed in
            sendEmail().then(()=>{
              alert("se envio correo")
            }).catch((error) => {
              console.log(error)
              alert(error)
            })
          })
          .catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
        }else{
          errorMessage.innerHTML = 'ingresa email o password faltante'
        }  
    })
}

