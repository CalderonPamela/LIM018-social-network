import { signIn } from '../lib/index.js'

export default () => {
  const viewAcces = `
  <section class="contenido_container2" id="container2">
  <div class = "access-page">
  <div class = "img-izquierda"></div>
  <div class = "img-derecha">
  <div class = "access">
  <h2 class =" titulo-access">Bienvenido</h2>
  <div class = "input-box">
  <input type="text" id="email" class ="form-input" placeholder ="Correo Electrónico" value="pvaphwyuskvurpcseb@bvhrs.com">
  <i class="ph-envelope"></i>
   </div>
   <div class = "input-box">
  <input type="password" id="password" class ="form-input"placeholder ="Contraseña">
  <i class="ph-eye-closed"></i>
   </div>
  <button class="button-access" id="acces">
      Iniciar sesión
  </button>
  <button class="button-google" id="optiongoogle"><img id="imgGoogle" src="imagenes/Google-img.png">
      Iniciar con Google
  </button>
  <button class="button-register" id="register">
      Registrate
  </button>
  <p id="message-error"></p>
  </div>
  </div>
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

