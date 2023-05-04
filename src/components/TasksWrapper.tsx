import TaskItem from "./TaskItem";
import { useState } from 'react';
import ITask, { EStatus } from "../types/ITask";

export default function TasksWrapper({ tasks, status, text }: { tasks: ITask[], status: EStatus, text: string }) {
    const [sortAsc, setSortAsc] = useState(false);
    const sortToggle = () => setSortAsc(!sortAsc);

    return (
        <div className="flex flex-col flex-grow w-full max-w-sm gap-2 bg-gray-50 dark:bg-gray-700 p-4 pt-3 rounded-lg lg:max-w-none sm:px-2">
            <p onClick={sortToggle} className="pt-1 pt text-gray-500 dark:text-gray-400 cursor-pointer">Сортировка: по { sortAsc ? 'возрастанию' : 'убыванию'} даты</p>
            <h2 className="heading text-4xl mb-3 pt-1">{text}</h2>
            { tasks.map((task: ITask) => task.status == status ? <TaskItem data={task} /> : null) }
        </div>
    )
}