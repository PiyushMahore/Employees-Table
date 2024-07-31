import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useData } from '../Context/EmployeesContext';

//Pagination for employee data to organize it in a more structured manner
function Pagination() {
    const data = useData();

    //Pagination will not work when using filter or sorting method
    if (data.countryRef.current?.value !== "all" || data.genderRef.current?.value !== "both") return <></>

    //to specify that from and to parameters of Pagination
    //store the value as a number to avoid issues with clculating the from and to parameters
    const fromToTo = Number(data.skipRef.current?.value)

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        {/* adding one because in first page the skip value is 0 */} {/* calculate the total length of current employees table and add fromToTo value to show the current range of records */}
                        Showing <span className="font-medium">{fromToTo + 1}</span> to <span className="font-medium">{data.currentEmployees?.length + fromToTo}</span> of {` `}
                        <span className="font-medium">{data.total}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <button
                            // On every click it subtracts 10 in skip if the current skip is grater than 0
                            // if skip is 0 so it set skip to its maximum value and redirects to last page
                            onClick={() => data.setSkip((prev) => prev > 0 ? prev - 10 : data.total - 8)}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="h-7 w-7" />
                        </button>
                        <button
                            // On every click it adds 10 in skip if the current skip is smaller than max value
                            // if skip is in its max value so it set skip to 0
                            onClick={() => data.setSkip((prev) => prev < data.total - 10 ? prev + 10 : 0)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            <ChevronRightIcon aria-hidden="true" className="h-7 w-7" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination;
