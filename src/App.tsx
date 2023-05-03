import { Route, Routes } from "react-router-dom";

import AuthPage from './routes/auth.tsx';
import TasksPage from './routes/tasks.tsx';
import ErrorPage from './routes/error.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
