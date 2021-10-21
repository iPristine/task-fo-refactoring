import {makeAutoObservable} from "mobx";

class TasksStore {
    tasks = []
    // filterArray = []
    lastId = 0

    constructor() {
        makeAutoObservable(this)
    }

    addNewTask = (task) => {
        if (task) {
            const newTask = {
                id: this.lastId,
                description: task,
                completed: false,
            }
            this.tasks.push(newTask)
            this.lastId = this.lastId + 1;  // this.lastId += 1; this.lastId++;
        }
    }

    changeCheck = (id) => {
        const foundTask = this.tasks.find((task)=>task.id === id);

        foundTask.completed = !foundTask.completed;
        // this.tasks = this.tasks.map(el => el.id === id ? {...el, completed: !el.completed} : el);
    }

    removeCard = (id) => {
        this.tasks = this.tasks.filter(task => task.id !== id);

        // this.filterArray = this.filterArray.filter(el => el.id !== id)
    }

    // filtering = (filterLet) => {
    //     if (filterLet === 0) {
    //         this.filterArray = this.card.filter(el => el.completed === true);
    //     } else if (filterLet === 1) {
    //         this.filterArray = this.card.filter(el => el.completed === false);
    //     } else {
    //         this.filterArray = this.card;
    //     }
    // }
}

export const tasksStore = new TasksStore();