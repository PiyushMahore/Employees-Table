import React, { useState } from 'react';
import { HiFilter } from "react-icons/hi";
import { useData } from '../Context/EmployeesContext';

//Component to manage sorting for employees data seting skip and limit values and clearing all sorting and filtering
function SortControls() {
    const data = useData();
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const clearFilter = () => {
        //resetting all values to their initial state
        data.setCurrentEmployees(data.employees);
        data.setSkip(0);
        data.setLimit(10);
        setMenu(false);
        data.countryRef.current.value = "all";
        data.genderRef.current.value = "both";
    }

    return (
        <div>
            <HiFilter onClick={toggleMenu} size={25} className='relative text-red-600 mr-4 cursor-pointer' />
            <div className={`absolute right-[250px] cursor-pointer mt-1.5 bg-[#ffff] shadow-lg px-4 py-2 rounded-md flex flex-col transform transition-all duration-300 ease-in-out ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className='flex items-center flex-col'>
                    <div>
                        <label className='text-red-500' htmlFor="skip">Skip = </label>
                        <input ref={data.skipRef} className='w-8 text-center text-red-500' min={0} onChange={(e) => data.setSkip(e.target.value < 0 || e.target.value > 208 ? 0 : e.target.value)} type="number" value={data.skip} name='skip' />
                    </div>
                    <div>
                        <label className='text-green-600' htmlFor="limit">Limit = </label>
                        <input className='w-10 text-center text-green-500' min={10} type="number" value={data.limit} onChange={(e) => data.setLimit(e.target.value)} name='limit' />
                    </div>
                </div>
                <button className='mt-0.5 bg-red-400 border border-gray-300 hover:bg-red-500 duration-300 text-[#ffff] p-0.5 rounded-md' onClick={clearFilter}>Clear Filter</button>
            </div>
        </div>
    )
}

export default SortControls;
