import { useNavigate } from 'react-router-dom';

export default function AuthCard() {
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson.login == 'admin' && formJson.password == 'admin') {
            const randomHash = Math.random().toString(36).substr(2);
            localStorage.setItem("token", randomHash);

            // redirect to Tasks page
            navigate('/tasks');
        }
      }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:justify-start">
                <div className="w-[500px] bg-white rounded-lg shadow dark:border md:mt-0 sm:w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8 space-y-6 md:space-y-4 sm:p-6">
                        <h1 className="heading uppercase">Авторизация</h1>
                        <form method='POST' className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Логин</p>
                                <input type="text" name="login"className="input-primary" placeholder="admin" required />
                            </div>
                            <div className='pb-4'>
                                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</p>
                                <input type="password" name="password" placeholder="admin" className="input-primary" required />
                            </div>
                            <button type="submit" className="button-primary">ВОЙТИ</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}