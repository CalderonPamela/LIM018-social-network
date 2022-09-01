import { saveTask, getTask, onGetTasks, deleteTask, updateTask } from '../lib/index.js'


export default () => {
    const viewDifferent = `
    <section class="contenido_container3" id="container3">
    <div class="post-page">
    <div class = "post-perfil"></div>
    <div class = "img-derecha-post">
    <div class = "post-container">
    <form class="post-write" id = "task-form"> 
        <label class="post-write-title"> CREA TU POST </label>
        <input class="book-title" type = "text" placeholder = "Título de libro" id = "task-title">
        <textarea class="book-description" id = "task-description" placeholder = "¿Cómo va tu lectura hoy? Comenta, califica ó reseña... "></textarea>
        
        <button class="post-write-button" id = "btn-task-save">Publicar</button>
    </form>
    <div class="post-list" id ="tasks-container"></div>
    </div>
    </div>
    </div>
    </section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewDifferent;
    return divElement;
}


let editStatus = false;
let id = '';
export const x =  (querySnapshot) => {
    const tasksContainer = document.getElementById('tasks-container')
    let html = '';

    querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
        <div class="post">
            <h3>${task.title}</h3> 
            <p>${task.description}</p>
            <button class ='btn-delete' data-id="${doc.id}">Delete</button>
            <button class ='btn-edit' data-id="${doc.id}">Edit</button>
        </div>
        `;
    });

    tasksContainer.innerHTML = html;

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
            var result = confirm('¿Deseas eliminar este mensaje?')
            if(result==true){
                deleteTask(dataset.id);
            }
        });
    });


    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const doc = await getTask(e.target.dataset.id)
            const task = doc.data()
            const taskForm = document.getElementById('task-form')
            taskForm['task-title'].value = task.title
            taskForm['task-description'].value = task.description

            editStatus = true;
            id = doc.id;
            taskForm['btn-task-save'].innerText = 'Update'
        })
    })
}
export const postMaker = () => {
    
    onGetTasks(x);
};


export const postFunctions = () => {
    const taskForm = document.getElementById('task-form')
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log('submited')
        const title = taskForm['task-title']
        const description = taskForm['task-description']
        if(title.value !='' && description.value !=''){
            if (!editStatus) {
                saveTask(title.value, description.value);
            } else {
                updateTask(id, {
                    title: title.value,
                    description: description.value,
                });
    
                editStatus = false;
            };
    
            taskForm.reset();
        }else{
            alert('ingresa title o description faltante')
        }
        
    });
};

