export default class Task {

    constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    add(text) {
        let id = 1;

        if (this.tasks.length > 0) {
            id = this.tasks[this.tasks.length - 1].id + 1;
        }

        const newTask = {
            id: id,
            status: 'active',
            text: text
        }

        this.tasks.push(newTask)
        this.saveToLocalStorage();

        return newTask;
    }

    remove(task) {
        const i = this.tasks.indexOf(task)
        this.tasks.splice(i, 1);
        this.saveToLocalStorage();
    }

    getTaskById(id) {
        let task = this.tasks.find(function (task) {
            if (task.id === +id) return true;
        })
        return task;
    }

    changeStatus(task) {

        if (task.status === 'active') {
            task.status = 'done'
        } else {
            task.status = 'active'
        }

        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks');

        if (data) {
            this.tasks = JSON.parse(data);
        }
    }

}