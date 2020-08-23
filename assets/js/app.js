const DEFAULT_LISTS = ['Pendientes', 'En Proceso', 'Finalizadas'];

class DOMHelper {}

class Component {}

class Task {
    constructor(taskID, parentID, taskName) {
        this.taskID = taskID;
        this.taskName = taskName;
        this.parentListID = parentID;
        this.parentListName = document
            .getElementById(parentID)
            .querySelector('.tasklist-name').innerHTML;
    }
}

class TaskList {
    tasks = [];

    constructor(id) {
        this.id = id;
        const thisList = document.getElementById(id);
        //console.log(thisList);
        const taskItems = document.querySelectorAll(`#${id} li`);

        for (const task of taskItems) {
            const newTask = new Task(task.id, id);
            this.tasks.push(newTask);
        }

        //$Show Add Task Modal
        const addTaskBtn = thisList.querySelector('.add-task-btn');
        addTaskBtn.addEventListener('click', this.addTaskBtnHandler.bind(this));
    }

    addTaskBtnHandler() {
        const modalTaskView = document.querySelector('div.modal');
        modalTaskView.classList.add('visible');
        const backdrop = document.getElementById('backdrop');
        backdrop.classList.add('visible');

        const submitBtn = modalTaskView.querySelector('button:last-of-type');
        console.log(this);
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            //console.log(this);
            //console.log(modalTaskView);

            const newTaskName = modalTaskView.querySelector('input').value;
            //console.log(newTaskName);
            if (newTaskName !== '') {
                const newTask = new Task(
                    Math.random().toString(),
                    this.id,
                    newTaskName
                );

                this.addTask(newTask);

                console.log('form Submitted Sucessfully');

                backdrop.classList.remove('visible');
                modalTaskView.classList.remove('visible');
            } else {
                alert('Error: Nombre de la tarea no puede estar en blanco');
            }
        });
    }

    addTask(task) {
        this.tasks.push(task);
        const target = document.getElementById(task.parentListID);
        const newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.textContent = task.taskName;
        target.append(newTask);
    }

    removeTask(task) {
        //Select the task to be removed
        const selectedTask = this.tasks.find((t) => t.taskID === task.taskID);
        const selectedDOMTask = document.getElementById(selectedTask.taskID);
        const target = document.getElementById(task.parentListID);
        target.removeChild(selectedDOMTask);
        this.tasks = this.tasks.filter((t) => t.taskID !== task.taskID);
    }
}

class Board {
    tasklists = [];
    constructor(status) {
        this.status = status;
    }

    addTaskList(newList) {
        this.tasklist.push(newList);
    }
}

const navBarClickHandlers = () => {};

//$ Launches the application
class App {
    static init() {
        //$ Start the App and Get information from HTML
        console.info('App Started');
        const activeBoard = new Board('active');
        const list1 = new TaskList('list1');
        const list2 = new TaskList('list2');
        const list3 = new TaskList('list3');

        const rtask = list1.tasks[1];
        list1.removeTask(rtask);
    }
}

App.init();
