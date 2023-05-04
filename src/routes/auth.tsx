import AuthCard from "../components/AuthCard";

import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';


export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      if (token)
          navigate('/tasks');
  }, []);

  return (
    <AuthCard />
  )
}