import { signIn } from '../lib/index.js'

export default () => {
  const viewAcces = `
   <section class="contenido_container2" id="container2">
   <div class = "acess">
   <h2 class =" titulo-acsess">Bienvenido</h2>
   <input type="text" id="email" class ="form-input" placeholder ="Correo Electrónico" value="pvaphwyuskvurpcseb@bvhrs.com">
   <input type="password" id="password" class ="form-input"placeholder ="Contraseña">
   <button class="button-acces" id="acces">
       Iniciar sesión
   </button>
   <button class="button-google" id="optiongoogle">
       Iniciar Sesión con Google
   </button>
   <button class="button-register" id="register">
       Registrate
   </button>
   <p id="message-error"></p>
   </div>
   </section>`

  const divElement = document.createElement('div')
  divElement.innerHTML = viewAcces;

  return divElement;
}

export const accesFunctions = () => {
  const btnAcces = document.getElementById('acces')
  btnAcces.addEventListener('click', (e) => {
    const user = document.getElementById('email').value
    const password = document.getElementById('password').value
    const msgError = document.getElementById('message-error')
    if (user !== '' && password !== ''){
      signIn(user, password).then((userCredential) => {
        // Signed in
        console.log(userCredential)
        const user = userCredential.user;
        if(user.emailVerified){
          console.log('verificado')
          window.location.hash = "#/Post"
        }else{
          console.log(user.email)
          alert("El correo eléctronico no ha sido verificado. Revisar bandeja de entrada de " 
          + user.email)
        }
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
    }else{
      msgError.innerHTML ="ingresa email o password faltante"
    }
  })
}

