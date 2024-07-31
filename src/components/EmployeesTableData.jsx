import React from 'react';

function EmployeesTableData({ id, image, firstName, maidenName, lastName, gender, age, company, address }) {

    const { state, country } = address;
    const { title } = company;

    return (
        // Handling the employees data
        <>
            <tbody className="text-gray-700 border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                <tr className="border-t">
                    <td className="py-3 px-6">{id}</td>
                    <td className="py-3 px-6">
                        <img
                            src={image}
                            alt="employee image"
                            className="w-10 h-10 rounded-full"
                        />
                    </td>
                    <td className="py-3 px-6">{firstName} {maidenName} {lastName}</td>
                    <td className="py-3 px-6">{gender.charAt(0).toUpperCase()}/{age}</td>
                    <td className="py-3 px-6">{title}</td>
                    <td className="py-3 px-6">{state}, {country === "United States" ? "USA" : country}</td>
                </tr>
            </tbody>
        </>
    )
}

export default EmployeesTableData;
