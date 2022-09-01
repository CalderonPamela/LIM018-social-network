import home, { homeFunctions } from "../src/view/Home.js";
jest.mock('../src/lib//index.js')

describe('testeando homeFunctions', () => {
    it('debería ser una función', () => {
        expect(typeof homeFunctions).toBe('function');
    });
    it('existe los botones acces, register, google', () => {
        const container = document.createElement('section')
        document.body.appendChild(container)
        container.appendChild(home())
        const registerButton = document.getElementById('optionregister')
        const accessButton = document.getElementById('optionacces')
        const googleButton = document.getElementById('optiongoogle')
        expect(registerButton instanceof HTMLElement).toBe(true);
        expect(accessButton instanceof HTMLElement).toBeTruthy();
        expect(googleButton instanceof HTMLElement).toBe(true);
    });
    it('click del boton access', (done) => {
        const container = document.createElement('section')
        document.body.appendChild(container)
        container.appendChild(home())
        homeFunctions()
        const accessButton = document.getElementById('optionacces')
        accessButton.click()
        setTimeout(() => {
            console.log(window.location.hash)
            expect(window.location.hash).toBe("#/Acces");
            done()
        }, 100)
    });

    it('click del boton register', (done) => {
        const container = document.createElement('section')
        document.body.appendChild(container)
        container.appendChild(home())
        homeFunctions()
        const registerButton = document.getElementById('optionregister')
        registerButton.click()
        setTimeout(() => {
            console.log(window.location.hash)
            expect(window.location.hash).toBe("#/Register");
            done()
        }, 100)
    })
// test click boton google falta pasar
    it('click del boton google', (done) => {
        const container = document.createElement('section')
        document.body.appendChild(container)
        container.appendChild(home())
        homeFunctions()
        const googleButton = document.getElementById('optiongoogle')
        googleButton.click()
    
        setTimeout(() => {
            console.log(window.location.hash)
            expect(window.location.hash).toBe("#/Post");
            done()
        }, 100)
    }) 


});