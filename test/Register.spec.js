// importamos la funcion que vamos a testear
import register, { registerFunctions} from "../src/view/Register.js";
jest.mock('../src/lib//index.js')

describe('testeando register', () => {
    it('deberia ser una función', () => {
        expect(typeof register).toBe('function')
    })
    it('existe el botón register', () => {
        document.body.appendChild(register())
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const registerButton = document.getElementById('register')
        const googleButton = document.getElementById('optiongoogle')
        expect(name instanceof  HTMLElement).toBe(true)
        expect(email instanceof HTMLElement).toBe(true)
        expect(password instanceof HTMLElement).toBe(true)
        expect(registerButton instanceof HTMLElement).toBe(true)
        expect(googleButton instanceof HTMLElement).toBe(true)
    })
})

describe('testeando registerFunctions', ()=>{
    it('deberia ser una función', ()=>{
        expect(typeof registerFunctions).toBe('function')
    })
    it('click de botón register campos vacios', ()=>{
        document.body.appendChild(register())
        const registerButton = document.getElementById('register')
        const errorMessage = document.getElementById('message-error')
        registerFunctions()
        registerButton.click()
        expect(errorMessage.innerHTML).toBe('ingresa email o password faltante')
    })
    it('click del botón register campos completados',(done)=>{
        document.body.appendChild(register())
        const registerButton = document.getElementById('register')
        const user = document.getElementById('email')
        user.value = "belen123456@gmail.com"
        const password = document.getElementById('password')
        password.value = "123456"
        registerFunctions()
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        //registerFunctions.mockImplementation(()=> Promise.reject())
        registerButton.click()
        setTimeout(() => {
            expect(alertSpy).toHaveBeenCalledWith('se envio correo')
            done()
        }, 0)
    })
})