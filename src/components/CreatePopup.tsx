import * as dayjs from 'dayjs';
import useStore from "../hooks/useStore";
import { EPriority, EStatus } from "../types/ITask";

export default function CreatePopup({ active, close }: { active: boolean, close: () => void }) {
    const { authors, tasks, setTasks } = useStore();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const newTask = {
            id: Date.now(), // 'генератор' id, чтоб точно было уникальным
            ...formJson,
            schedule: {
                creation_time:dayjs().format('YYYY-MM-DDTHH:mm:ss')
            }
        };
        setTasks([ ...tasks, newTask ]);
        close();
    }
    
    return (
        active
        ?
        <div className="fixed z-10 w-full min-h-full top-0 left-0 flex justify-center items-center backdrop-blur-lg">
            <div className="w-[500px] bg-white rounded-lg shadow dark:border md:mt-0 sm:w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-8 space-y-6 md:space-y-4 sm:p-6">
                    <div className='flex col justify-between'>
                        <h1 className="heading uppercase">Новая задача { active }</h1>
                        <div onClick={close} className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <form method='POST' className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Название</p>
                            <input type="text" name="title" className="input-primary" placeholder="Название задачи" required />
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Исполнитель</p>
                            <select name="author_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                { authors.map(author => <option value={author.author_name} key={author.id}>{author.author_name}</option>) }
                            </select>
                        </div>
                        <div className="pb-4">
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Описание задачи</p>
                            <textarea name="description" placeholder="Введите описание задачи" required className="max-h-24 min-h-[70px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Состояние</p>
                            <select name="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                { Object.values(EStatus).filter(e => isNaN(Number(e))).map(key => <option value={EStatus[key as EStatus]} key={key}>{key}</option>) }
                            </select>
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Приоритет</p>
                            <select name="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                { Object.values(EPriority).filter(e => isNaN(Number(e))).map(key => <option value={EPriority[key as EPriority]} key={key}>{key}</option>) }
                            </select>
                        </div>
                        <div className="flex row gap-3">
                            <div className="ml-auto button-primary cursor-pointer bg-white dark:bg-gray-800" onClick={close}>Отмена</div>
                            <button type="submit" className="button-primary">Создать</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        :
        null
    )
}