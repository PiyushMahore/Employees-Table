import React, { useState } from 'react';
import { useData } from '../Context/EmployeesContext';

function EmployeesTableHead() {
    const data = useData()
    const [asc, setAsc] = useState(true)

    //Arrange Ascending and Decending order by Name

    const setOrderByName = () => {
        const orderNameOrder = [...data.currentEmployees].sort((a, b) => {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
                const order = asc ? -1 : 1
                return order;
            }
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                const order = asc ? 1 : -1
                return order;
            }
            return 0;
        })
        data.setCurrentEmployees(orderNameOrder);
        setAsc(!asc)
    }

    //Arrange Ascending and Decending order by Id

    const setOrderById = () => {
        const orderById = [...data.currentEmployees].sort((a, b) => {
            return asc ? b.id - a.id : a.id - b.id
        });
        data.setCurrentEmployees(orderById);
        setAsc(!asc)
    }

    //Arrange Ascending and Decending order by Age

    const setOrderByAge = () => {
        const orderByAge = [...data.currentEmployees].sort((a, b) => {
            return asc ? b.age - a.age : a.age - b.age
        });
        data.setCurrentEmployees(orderByAge);
        setAsc(!asc)
    }

    return (
        //  Table headings
        <>
            <thead className="bg-gray-100 text-gray-800">
                <tr>
                    <th className="py-3 px-6 text-left">ID <span onClick={setOrderById} className='cursor-pointer'><span className={`${asc ? "" : "text-red-500"}`}>↑</span><span className={`${asc ? "text-red-500" : ""}`}>↓</span></span></th>
                    <th className="py-3 px-6 text-left">Image</th>
                    <th className="py-3 px-6 text-left">Full Name <span onClick={setOrderByName} className='cursor-pointer'><span className={`${asc ? "" : "text-red-500"}`}>↑</span><span className={`${asc ? "text-red-500" : ""}`}>↓</span></span></th>
                    <th className="py-3 px-6 text-left">Demography <span onClick={setOrderByAge} className='cursor-pointer'><span className={`${asc ? "" : "text-red-500"}`}>↑</span><span className={`${asc ? "text-red-500" : ""}`}>↓</span></span></th>
                    <th className="py-3 px-6 text-left">Designation</th>
                    <th className="py-3 px-6 text-left">Location</th>
                </tr>
            </thead>
        </>
    )
}

export default EmployeesTableHead;