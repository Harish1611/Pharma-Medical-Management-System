import React, { useState } from 'react';

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    createColumnHelper,
    getFilteredRowModel,
} from "@tanstack/react-table";
import DebouncedInput from '../../UiComponents/DebouncedInput';

import { USERS } from '../data.js'
import HeadingOne from '../../UiComponents/HeadingOne.jsx';


const AvailableResources = () => {

    const [globalFilter, setGlobalFilter] = useState("");

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("ResourceName", {
            id: "ResourceName",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Resource Name",
        }),
        columnHelper.accessor("ResourceType", {
            id: "ResourceType",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Resource Type",
        }),
        columnHelper.accessor("RequestedFor", {
            id: "RequestedFor",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Requested For",
        }),
        columnHelper.accessor("Quantity", {
            id: "Quantity",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Quantity (Kg)",
        }),
        columnHelper.accessor("StoredAt", {
            id: "StoredAt",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Stored At",
        }),
        columnHelper.accessor("AddedBy", {
            id: "AddedBy",
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Added By",
        }),
        columnHelper.accessor("CreatedAt", {
            id: "CreatedAt",
            cell: (info) => <span>{new Date(info.getValue()).toLocaleDateString()}</span>,
            header: "Created At",
        }),


        
       
    ];


    const table = useReactTable({
        data: USERS,
        columns,
        state: {
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div  >
            <HeadingOne headText="Available Resources" />
            <div className="mx-4 my-10 sm:mx-40 sm:my-20 ">



                <div className="mx-2">
                    <DebouncedInput
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="bg-transparent outline-none "
                        placeholder="Search by columns..."
                    /> </div>

                <div className="overflow-x-scroll mx-2 my-4">

                    <table className="border border-gray-500 rounded-md shadow-sm w-full text-left">
                        <thead className="bg-gray-800">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className="capitalize font-medium font-poppins px-3.5 py-3 text-white"
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row, i) => (
                                    <tr
                                        key={row.id}
                                        className={`${i % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-gray-200"
                                            }`}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="px-3.5 py-2 font-normal font-poppins">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-4">
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AvailableResources;
