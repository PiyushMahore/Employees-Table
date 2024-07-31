import React from 'react';
import SortControls from './SortControls';
import FilterControls from './FilterControls';

function Navbar() {
    //Nav component that include an heading, sorting and filtering
    return (
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-4xl font-bold'>Employees</h1>
            <div className='flex items-center'>
                <SortControls />
                <FilterControls />
            </div>
        </div>
    )
}

export default Navbar;
