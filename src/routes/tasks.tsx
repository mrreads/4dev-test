import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import useStore from "../hooks/useStore";
import ITask from "../types/ITask";
import TaskItem from "../components/TaskItem";

export default function TasksPage() {
    const navigate = useNavigate();
    const { tasks } = useStore();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token)
            navigate('/error');
    }, []);

    
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-start justify-start mx-auto">
                <Header />
            </div>

            <div className="flex flex-row items-start justify-center mx-auto gap-6 p-3 lg:flex-col">
                <div className="flex flex-col flex-grow w-full max-w-sm gap-2 bg-gray-50 dark:bg-gray-700 p-4 pt-6 rounded-lg lg:max-w-none sm:px-2">
                    <h2 className="heading text-4xl mb-3 text-center">В очереди</h2>
                    { tasks.map((task: ITask) => task.status == 0 ? <TaskItem data={task} /> : null) }
                </div>
                <div className="flex flex-col flex-grow w-full max-w-sm gap-2 bg-gray-50 dark:bg-gray-700 p-4 pt-6 rounded-lg lg:max-w-none sm:px-2">
                    <h2 className="heading text-4xl mb-3 text-center">В работе</h2>
                    { tasks.map((task: ITask) => task.status == 1 ? <TaskItem data={task} /> : null) }
                </div>
                <div className="flex flex-col flex-grow w-full max-w-sm gap-2 bg-gray-50 dark:bg-gray-700 p-4 pt-6 rounded-lg lg:max-w-none sm:px-2">
                    <h2 className="heading text-4xl mb-3 text-center">Выполнено</h2>
                    { tasks.map((task: ITask) => task.status == 2 ? <TaskItem data={task} /> : null) }
                </div>
            </div>

        </section>
    )
}