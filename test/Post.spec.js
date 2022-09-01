import post, { postMaker, postFunctions, x } from "../src/view/Post.js";
jest.mock('../src/lib//index.js')


describe('testeando postMaker', () => {
    it('deberia ser una función', () => {
        expect(typeof postMaker).toBe('function')
    })

    it('existe el botón delete', () => {
        document.body.innerHTML = '<div id="tasks-container"></div>';
        x([{ id: 'hola', data: () => ({ title: "title", description: "description" }) }])
        const deleteButton = document.querySelector('.btn-delete');
        expect(deleteButton instanceof HTMLElement).toBe(true)
    })

    it('existe el botón edit', () => {
        document.body.innerHTML = '<div id="tasks-container"></div>';
        x([{ id: 'hola', data: () => ({ title: "title", description: "description" }) }])
        const editButton = document.querySelector('.btn-edit');
        expect(editButton instanceof HTMLElement).toBe(true)
    })
})


describe('testeando postFunctions', () => {
    it('deberia ser una función', () => {
        expect(typeof postFunctions).toBe('function')
    })

// test mostrarel boton Save falta pasar
    it('deberia mostrar el boton Save', () => {
        document.body.innerHTML = '<form id="task-form"></form>';
        document.body.appendChild(postFunctions());
        const taskForm= document.querySelector('task-form');
        expect(taskForm instanceof HTMLElement).tobe(true);
    })
 
})
 