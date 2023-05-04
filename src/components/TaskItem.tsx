import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'

import ITask from "../types/ITask";

export default function TaskItem({ data }: { data: ITask }) {
    const { title, author_name, schedule } = data;
    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700 flex flex-col py-4 px-3 mx-full max-w-full text-gray-900 bg-white rounded-lg shadow xl:p-3 lg:px-8 md:px-4 sm:px-2 dark:bg-gray-800 dark:text-white">
            <div>
                <p className="pb-2 px-3 text-xs text-gray-500 dark:text-gray-400"> { dayjs(schedule.creation_time).locale('ru').format('D MMMM YYYY, hh:mm:ss') } </p>
                <p className="pb-2 px-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white 2xl:text-lg">{title}</p>
            </div>
            <p className="pt-2 px-3 text-gray-500 dark:text-gray-400"> { author_name } </p>
        </div>
    )
}