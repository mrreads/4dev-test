import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from './../hooks/useOnClickOutside';

export default function Header() {
    const navigate = useNavigate();

    const [isProfileActive, setProfileActive] = useState(false);
    const profileToggle = () => setProfileActive(!isProfileActive);
    
    const refProfile = useRef(null);
    useOnClickOutside(refProfile, () => setProfileActive(false));

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    return(
        <div className="flex flex-row justify-between w-full p-3">
            <button className="button-primary">НОВАЯ ЗАДАЧА</button>

            <div className="relative">
                <div onClick={profileToggle} data-dropdown-toggle="dropdownInformation" className="cursor-pointer relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>

                <div ref={refProfile} className={` ${isProfileActive ? '' : 'hidden'} drop-shadow-lg z-10 absolute right-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>admin admin</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                        <li>
                            <p onClick={logout} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Выйти</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}