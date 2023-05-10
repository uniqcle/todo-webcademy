export default class View {

    elements = {
        input: document.querySelector('#newTask'),
        form: document.querySelector('#inputForm'),
        tasksList: document.querySelector('#todoList')
    }


    constructor(tasks) {
        let that = this;
        tasks.forEach(function (task) {
            that.renderTask(task)
        })
    }

    renderTask(task) {

        const completed = (task.status === 'done') ? 'completed' : '';
        const checked = (task.status === 'done') ? 'checked' : ''

        const taskHTML = `<li class="todo-item" data-id="${task.id}">
                            <label class="todo-item-label">
                                <input class="checkbox" type="checkbox" ${checked}/>
                                <span class="${completed}">${task.text}</span>
                                <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
                            </label>
                          </li>`;

        this.elements.tasksList.insertAdjacentHTML('afterbegin', taskHTML);
    }

    changeStatus(task) {
        const currentElement = this.elements.tasksList.querySelector(`[data-id="${task.id}"]`);
        const taskTextElement = currentElement.querySelector('span');

        if (task.status === 'done') {
            taskTextElement.classList.add('completed')
        } else {
            taskTextElement.classList.remove('completed')
        }
    }

    removeTask(task) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${task.id}"]`);
        taskElement.remove();
    }


    clearInput() {
        this.elements.input.value = '';
    }
}