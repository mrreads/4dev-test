import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:justify-start">
                <div className="w-[500px] bg-white rounded-lg shadow dark:border md:mt-0 sm:w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8  space-y-6 md:space-y-4 sm:p-6">
                        <h1 className="heading uppercase sm:text-xl">Ошибка доступа</h1>
                            <p className="text-gray-500 dark:text-gray-400 md:text-sm pb-8">
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book.
                            </p>
                            <Link className="button-primary" to={'/'}>НАЗАД</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}