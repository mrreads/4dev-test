import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

export default function TasksPage() {
    const navigate = useNavigate();
   
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token)
            navigate('/error');
    }, []);

    
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-start justify-start mx-auto h-screen">
                <Header />
            </div>
        </section>
    )
}