import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

//using react context api for state management of employees data
export const EmployeeContext = createContext();

export const ContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState();
    const [currentEmployees, setCurrentEmployees] = useState();
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const countryRef = useRef();
    const genderRef = useRef();
    const skipRef = useRef();

    useEffect(() => {
        //fetching the api using axios to handle it properly
        const setEmployeesData = async () => {
            try {
                const data = await axios.get(`https://dummyjson.com/users?skip=${skip}&limit=${limit < 10 ? 10 : limit}`);
                setEmployees(data.data.users);
                setCurrentEmployees(data.data.users);
                setTotal(data.data.total);
            } catch (error) {
                console.error("Failed to fetch data from Api", error);
            }
        }

        setEmployeesData();
    }, [skip, limit])

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees, skip, setSkip, limit, setLimit, currentEmployees, setCurrentEmployees, countryRef, genderRef, total, setTotal, skipRef }}>
            {children}
        </EmployeeContext.Provider>
    )
}

export const useData = () => useContext(EmployeeContext);
