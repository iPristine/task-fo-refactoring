import React from 'react';
import './../styles/App.css';
import {AddTaskForm} from './AddTaskForm';
import {observer} from 'mobx-react';
import {tasksStore} from '../store';
import Card from './Card';

const App = () => {
    const {tasks, changeCheck, removeCard} = tasksStore;

    // let filterLet = 2
    // const filterChange = (fillet) => {
    //     filterLet = fillet
    //     filtering(fillet)
    // }
    //
    // let getCardArray = undefined
    //
    // if (card) {
    //     getCardArray = filterArray.map((c, i) => <Card key={i} id={i + 1} {...c} changeCheck={changeCheck}
    //                                                    removeCard={removeCard}/>)
    // }
    //

    return (
        <div className="wrapper">
            <div className="wpapperPadding">
                <AddTaskForm
                    className="wrapperForm"
                />
                <div>
                    <h1 className="titleProblem wrapper">Список задач:</h1>
                    {/*<div onClick={() => filterChange(0)}>Выполненные</div>*/}
                    {/*<div onClick={() => filterChange(1)}>Невыполненные</div>*/}
                    {/*<div onClick={() => filterChange(2)}>Все задачи</div>*/}
                </div>
                {tasks.map(task => <Card key={task.id} id={task.id} {...task} changeCheck={changeCheck}
                                         removeCard={removeCard}/>)}
            </div>
        </div>
    );
}

export default observer(App);