import dayjs from 'dayjs';
import TaskItem from "./TaskItem";
import { useState } from 'react';
import ITask, { EStatus } from "../types/ITask";

interface IProps { 
    tasks: ITask[], 
    status: EStatus, 
    text: string,
    edit: (task: ITask) => void
}

export default function TasksWrapper({ tasks, status, text, edit }: IProps) {
    const [sortAsc, setSortAsc] = useState(false);
    const sortToggle = () => setSortAsc(!sortAsc);
    
    const formatedTasks =
    (sortAsc)
    ?
    tasks.sort((a: ITask, b: ITask) => dayjs(b.schedule.creation_time).unix() - dayjs(a.schedule.creation_time).unix())
    :
    tasks.sort((a: ITask, b: ITask) => dayjs(a.schedule.creation_time).unix() - dayjs(b.schedule.creation_time).unix());
    
    return (
        <div className="drop-shadow flex flex-col flex-grow w-full max-w-sm gap-2 bg-gray-100 dark:bg-gray-700 p-4 pt-3 rounded-lg lg:max-w-none sm:px-2">
            <div className='px-1 lg:px-2'>
                <p onClick={sortToggle} className="pt-1 text-gray-500 dark:text-gray-400 cursor-pointer md:text-sm">Сортировка: по { sortAsc ? 'возрастанию' : 'убыванию'} даты</p>
                <h2 className="heading text-4xl mb-3 pt-2 uppercase"> {text}</h2>
            </div>
            { formatedTasks.map((task: ITask) => task.status == status ? <TaskItem edit={edit} data={task} key={task.id} /> : null) }
        </div>
    )
}