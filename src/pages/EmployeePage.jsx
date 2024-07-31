import React from 'react';
import { useData } from '../Context/EmployeesContext';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import EmployeesTableData from '../components/EmployeesTableData';
import EmployeesTableHead from '../components/EmployeesTableHead';
import Pagination from '../components/Pagination';

//Rendering all components on the employees table page 
function EmployeePage() {
    const data = useData();

    if (!data.employees) return <Loading />

    return (
        <div className='max-w-screen-2xl min-h-screen flex flex-col p-5'>
            <Navbar />
            <div className="container mx-auto my-8">
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full">
                        <EmployeesTableHead />
                        {
                            data.currentEmployees && data.currentEmployees.map((res) => (
                                <EmployeesTableData key={res.id} {...res} />
                            ))
                        }
                    </table>
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default EmployeePage;
