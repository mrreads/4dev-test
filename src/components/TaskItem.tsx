import ITask from "../types/ITask";

export default function TaskItem({ data }: { data: ITask }) {
    const { title, author_name } = data;
    return (
        <div className="divide-y divide-gray-600 flex flex-col py-4 px-3 mx-full max-w-full text-gray-900 bg-white rounded-lg shadow xl:p-3 lg:px-8 md:px-4 sm:px-2 dark:bg-gray-800 dark:text-white">
            <p className="pb-2 px-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white 2xl:text-lg">{title}</p>
            <p className="pt-1 px-3 text-gray-500 dark:text-gray-400"> { author_name } </p>
        </div>
    )
}