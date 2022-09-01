// importamos la funcion que vamos a testear
import access, { accesFunctions } from "../src/view/Acces.js";
import { signIn } from "../src/lib/index.js";

jest.mock('../src/lib//index.js')

describe('testeando access', () => {
  it('debería ser una función', () => {
    expect(typeof access).toBe('function');
  });
  it('existe el boton acces', () => {
    const container = document.createElement('section')
    document.body.appendChild(container)
    container.appendChild(access())
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const accessButton = document.getElementById('acces')
    const googleButton = document.getElementById('optiongoogle')
    expect(email instanceof HTMLElement).toBeTruthy();
    expect(password instanceof HTMLElement).toBe(true);
    expect(accessButton instanceof HTMLElement).toBeTruthy();
    expect(googleButton instanceof HTMLElement).toBe(true)
  });
});

describe('testeando accesFunctions', () => {
  it('debería ser una función', () => {
    expect(typeof accesFunctions).toBe('function');
  });
  it('click del boton access campos vacios', () => {
    const container = document.createElement('section')
    document.body.appendChild(container)
    container.appendChild(access())
    accesFunctions()
    const accessButton = document.getElementById('acces')
    accessButton.click()
    const merror = document.getElementById('message-error');
    expect(merror.innerHTML).toBe('ingresa email o password faltante');
  })
  it('click del boton access campos completados', (done) => {
    const container = document.createElement('section')
    document.body.appendChild(container)
    container.appendChild(access())
    accesFunctions()
    const accessButton = document.getElementById('acces')
    const user = document.getElementById('email');
    user.value = "belen123456@gmail.com"
    const pass = document.getElementById('password');
    pass.value = "123456"
    accessButton.click()
    setTimeout(() => {
      console.log(window.location.hash)
      expect(window.location.hash).toBe("#/Post");
      done()
    }, 100)
  })

  it('click del boton access campos completados sin verificar', (done) => {
    const container = document.createElement('section')
    document.body.appendChild(container)
    container.appendChild(access())
    accesFunctions()
    const accessButton = document.getElementById('acces')
    const user = document.getElementById('email');
    user.value = "belen123456@gmail.com"
    const pass = document.getElementById('password');
    pass.value = "123456"
    signIn.mockImplementation(() => Promise.resolve({user : {
      email: user.value,
      emailVerified: false,
  }, }))
    window.alert = jest.fn()
    accessButton.click()
    setTimeout(() => {
      console.log(window.location.hash)
      expect(window.alert).toHaveBeenCalledWith("El correo eléctronico no ha sido verificado. Revisar bandeja de entrada de " 
      + user.value);
      done()
    }, 100)
  }) 
});
