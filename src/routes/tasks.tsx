import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import useStore from "../hooks/useStore";

import TasksWrapper from "../components/TasksWrapper";

import CreatePopup from "../components/CreatePopup";
import ITask from "../types/ITask";
import EditPopup from "../components/EditPopup";

export default function TasksPage() {
    const navigate = useNavigate();
    const { tasks } = useStore();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token)
            navigate('/error');
    }, []);

    
    const [createPopupOpened, setCreatePopupOpened] = useState<boolean>(false);
    const [editPopupOpened, setEditPopupOpened] = useState<boolean>(false);
    const [editCurrentTask, setEditCurrentTask] = useState<ITask | undefined>()

    const openCreatePopup = () => {
        setCreatePopupOpened(true);
        setEditPopupOpened(false);
    }
    const openEditPopup = (task: ITask) => {
        setCreatePopupOpened(false);
        setEditPopupOpened(true);
        setEditCurrentTask(task);
    }
    const closeAllPopup = () => {
        setCreatePopupOpened(false);
        setEditPopupOpened(false);
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-start justify-start mx-auto">
                <Header create={openCreatePopup} />
            </div>

            <CreatePopup active={createPopupOpened} close={closeAllPopup} />
            <EditPopup active={editPopupOpened} close={closeAllPopup} task={editCurrentTask} />

            <div className="flex flex-row items-start justify-center mx-auto gap-6 p-3 lg:flex-col">
                <TasksWrapper edit={openEditPopup} tasks={tasks} text="В очереди" status={0} />
                <TasksWrapper edit={openEditPopup} tasks={tasks} text="В работе" status={1} />
                <TasksWrapper edit={openEditPopup} tasks={tasks} text="Выполнено" status={2} />
            </div>

        </section>
    )
}