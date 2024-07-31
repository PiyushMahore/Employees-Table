import React, { useState, useEffect } from 'react';
import { useData } from '../Context/EmployeesContext';

function FilterControls() {
    const data = useData();
    const [state, setState] = useState("all");
    const [gender, setGender] = useState();

    const onCountryChange = (event) => {
        //setting the country by changing in dropdown value
        setState(event.target.value);
    }

    const onGenderChange = (event) => {
        //setting the gender by changing in dropdown value
        setGender(event.target.value);
    }

    useEffect(() => {
        //Handle the filter by country. Filter the employee data by the given country
        const changeCountryFilter = () => {
            if (!state) return;

            else if (state === "all") {
                data.setCurrentEmployees(data.employees);
                //setting the default value if no country is selected or the filter is set on all
            } else {
                const filterByCountry = data.employees.filter((employee) => employee.address.state === state);
                data.setCurrentEmployees(filterByCountry);
            }
        }

        changeCountryFilter();
    }, [state])

    useEffect(() => {
        //Handle the filter by gender. Filter the employee data by the given gender and if there is a value in country so also match the data with country as well.
        const changeGenderFilter = () => {
            let filterByGender;

            if (!gender) return;

            else if (gender === "male" || gender === "female" || gender === "both") {
                if (state === "all" || state === undefined) {
                    if (gender === "both") {
                        filterByGender = data.employees.filter((data) => data.gender === "male" || "female");
                    } else {
                        filterByGender = data.employees.filter((data) => data.gender === gender);
                    }
                } else {
                    //if gender is both it returns the initial value
                    if (gender === "both") {
                        filterByGender = data.employees.filter((data) =>
                            (data.gender === "male" || data.gender === "female") && data.address.state === state);
                    } else {
                        filterByGender = data.employees.filter((data) => data.gender === gender && data.address.state === state);
                    }
                }
            }
            data.setCurrentEmployees(filterByGender);
        }

        changeGenderFilter();
    }, [gender, state])

    return (
        <>
            <select ref={data.countryRef} onChange={onCountryChange} className='border border-black text-center rounded-md p-1'>
                <option value="all">Country</option>
                {
                    data.employees && data.employees.map((opt) => (
                        <option key={opt.id} value={opt.address.state}>{opt.address.state}</option>
                    ))
                }
            </select>
            <select ref={data.genderRef} onChange={onGenderChange} className='border border-black text-center rounded-md p-1 px-5 ml-4'>
                <option value="both">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </>
    )
}

export default FilterControls;
