import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import useStore from "../hooks/useStore";

import TasksWrapper from "../components/TasksWrapper";

import CreatePopup from "../components/CreatePopup";

export default function TasksPage() {
    const navigate = useNavigate();
    const { tasks } = useStore();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token)
            navigate('/error');
    }, []);

    
    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editPopupOpened, setEditPopupOpened] = useState(false);

    const openCreatePopup = () => {
        setCreatePopupOpened(true);
        setEditPopupOpened(false);
    }
    const openEditPopup = () => {
        setCreatePopupOpened(false);
        setEditPopupOpened(true);
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

            <div className="flex flex-row items-start justify-center mx-auto gap-6 p-3 lg:flex-col">
                <TasksWrapper tasks={tasks} text="В очереди" status={0} />
                <TasksWrapper tasks={tasks} text="В работе" status={1} />
                <TasksWrapper tasks={tasks} text="Выполнено" status={2} />
            </div>

        </section>
    )
}