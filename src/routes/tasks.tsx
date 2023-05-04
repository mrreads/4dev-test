import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import useStore from "../hooks/useStore";
import ITask from "../types/ITask";
import TaskItem from "../components/TaskItem";
import TasksWrapper from "../components/TasksWrapper";

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
                <TasksWrapper tasks={tasks} text="В очереди" status={0} />
                <TasksWrapper tasks={tasks} text="В работе" status={1} />
                <TasksWrapper tasks={tasks} text="Выполнено" status={2} />
            </div>

        </section>
    )
}