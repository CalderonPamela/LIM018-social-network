import { createUser, sendEmail} from '../lib/index.js'

export default () => {
  const viewRegister = `
  <section class ="contenido_container2" id="container2">
  <div class = "register-page">
  <div class = "img-izquierda"></div>
  <div class = "img-derecha">
  <div class = button1>
  <h2 class =" titulo-register">Crear cuenta</h2>
  <div class = "input-box">
  <input type="text" id="name" class ="form-input" placeholder ="Nombre de Usuario">
  <i class="ph-user"></i>
  </div>
  <div class = "input-box">
  <input type="text" id="email" class ="form-input" placeholder ="Correo Electrónico">
  <i class="ph-envelope"></i>
  </div>
  <div class = "input-box">
  <input type="text" id="password" class ="form-input" placeholder ="Contraseña">
  <i class="ph-eye-closed"></i>
  </div>
  <button class="button-register" id="register">
      Registrate
  </button>
  <button class="button-google" id="optiongoogle" ><img id="imgGoogle" src="imagenes/Google-img.png">
      Iniciar con Google
  </button>
  <p id="message-error"></p>
  </div>
  </div>
  </div>
  </section>
  `

  const divElement = document.createElement('div')

  divElement.innerHTML = viewRegister;

  return divElement;
}

export const registerFunctions = () => {
  const btnRegister = document.getElementById('register')
  btnRegister.addEventListener('click', (e) => {
    console.log('hola registrandose')
    const user = document.getElementById('email').value
    const password = document.getElementById('password').value
    const msgError = document.getElementById('message-error')
    if (user !== '' && password !== '') {
      createUser(user, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential)
        sendEmail().then(() => {
          alert("se envio correo")
        }).catch((error) => {
          console.log(error)
        })
        // window.location.hash ="#/Post"
        // ...
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code, error.message)
          // ..
        });
    const btnRegister = document.getElementById('register')
    btnRegister.addEventListener('click', (e) => {
        console.log('hola registrandose')
        const user = document.getElementById('email').value
        const password = document.getElementById('password').value
        console.log(user, password)
        createUser(user, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(userCredential)
            sendEmail().then(()=>{
              alert("se envio correo")
            }).catch((error) => {
              console.log(error)
            })
            // window.location.hash ="#/Post"
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code, error.message)
            // ..
          });
        
    })

    } else {
      msgError.innerHTML = "ingresa email o password faltante"
    }
  })
}


