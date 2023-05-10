import Task from './model.js';
import View from './view.js';

const task = new Task()
const view = new View(task.tasks);

// 1. Добавление задачи
view.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();
    let textInput = view.elements.input.value;

    const newTask = task.add(textInput)

    view.renderTask(newTask)
    view.clearInput();
})

//2. Нажали на чекбокс
view.elements.tasksList.addEventListener('click', function (e) {

    if (e.target.getAttribute('type') === 'checkbox') {
        const id = e.target.closest('.todo-item').dataset.id;
        const currentTask = task.getTaskById(id);
        task.changeStatus(currentTask)

        view.changeStatus(currentTask);
    }


    if (e.target.hasAttribute('data-delete')) {
        const id = e.target.closest('.todo-item').dataset.id;
        const currentTask = task.getTaskById(id);

        task.remove(currentTask);
        view.removeTask(currentTask);
    }
})





