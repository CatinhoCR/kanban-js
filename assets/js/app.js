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
        console.log(this.tasks);

        //$Show Add Task Modal
        const addTaskBtn = thisList.querySelector('.add-task-btn');
        addTaskBtn.addEventListener('click', this.addTaskBtnHandler.bind(this));
    }

    addTaskBtnHandler() {
        const newTask = new Task(
            Math.random().toString(),
            this.id,
            'Nueva Tarea'
        );
        console.log(newTask);
        this.addTask(newTask);

        // const backdrop = document.getElementById('backdrop');
        // backdrop.classList.add('visible');
        // const modal = document.getElementById('modal');
        // modal.classList.add('visible');

        // document.body.append(modal);
        // //alert('New Task Button was clicked');
    }

    addTask(task) {
        this.tasks.push(task);
        const target = document.getElementById(task.parentListID);
        const newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.textContent = task.taskName;
        target.append(newTask);
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

//$ Launches the application
class App {
    static init() {
        //$ Start the App and Get information from HTML
        console.info('App Started');
        const activeBoard = new Board('active');
        const list1 = new TaskList('list1');
        const list2 = new TaskList('list2');
        const list3 = new TaskList('list3');

        const newTask = new Task('newTask1', 'list1', 'Tarea10');
        list1.addTask(newTask);
        console.log(list1);
    }
}

App.init();
