import { saveTask, getTask, onGetTasks, deleteTask, updateTask } from '../lib/index.js'


export default () => {
    const viewDifferent = `
   
    <form id = "task-form"> 
        <label for="title">Title:</label>
        <input type = "text" placeholder = "Task Title" id = "task-title">

        <label for="description">Description:</label>
        <textarea id = "task-description" rows="3" placehorlder = "Task Description"></textarea>
        <button id = "btn-task-save">Save</button>
    </form>

    <div id ="tasks-container"></div>
    `
    const divElement = document.createElement('div')
    divElement.setAttribute('id', 'message');
    divElement.innerHTML = viewDifferent;
    return divElement;
}

let editStatus = false;
let id = '';
export const postMaker = () => {
    const tasksContainer = document.getElementById('tasks-container')

    onGetTasks((querySnapshot) => {
        let html = '';

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            html += `
            <div>
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
                deleteTask(dataset.id);
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
    });
};


export const postFunctions = () => {
    const taskForm = document.getElementById('task-form')
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log('submited')
        const title = taskForm['task-title']
        const description = taskForm['task-description']

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
    });
};

