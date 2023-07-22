import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './task.module.css'; 


function TasksList(){
    var tasks = [
        {
            descrtption:'book a ticket',
            status:'pending',
            due_date:'2023-08-10',
            
        },
        {
            descrtption:'booking a laptop',
            status:'completed',
            due_date:'2023-01-01',
            
        },
        {
            descrtption:'booking a tv',
            status:'pending',
            due_date:'2022-01-22'
        }
    ];
     
    let date= new Date();
    function getClassName(task) {
        if(task.status === 'completed') {
            return styles.completed;
        }
        else if(task.status === 'pending' && new Date(task.due_date) < date){
            return styles.red;
        }
        else if(task.status === 'pending' && new Date(task.due_date) > date){
            return styles.yellow;
        } 
        else {
            return ''
        }
    }

    
    return(
        <>
        <ol>
            {tasks.map(task =>(
                <li className={getClassName(task)}
                >{task.descrtption}</li>
            ))}
        </ol>
        </>
    );
}
export default TasksList;

