import React, { useMemo, useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

function UserInvoiceTable(props) {
  const id = props.id;
  const [userInvoiceData, setUserInvoiceData] = useState([]);

  useEffect(() => {
    const fetchUserInvoiceData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3500/api/user/${id}/invoices`
        );
        setUserInvoiceData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInvoiceData();
  }, []);

  const data = userInvoiceData;

  const columns = [
    {
      header: "ID",
      accessorKey: "invoice_id",
      cell: ({ row }) => (
        <Link to={{ pathname: `/invoice/${row.original.invoice_id}` }}>
          {row.original.invoice_id}
        </Link>
      ),
    },
    {
      header: "Issued To",
      accessorKey: "name",
      cell: ({ row }) => (
        <Link to={{ pathname: `/invoice/${row.original.invoice_id}` }}>
          {row.original.name}
        </Link>
      ),
    },
    {
      header: "Issue Date",
      accessorKey: "issue_date",
      //   cell: ({ row }) => {
      //     {
      //       <p>{format(new Date(row.original.issue_date), "dd MMM yyyy")};</p>;
      //     }
      //   },
    },
    {
      header: "amount",
      accessorKey: "amount",
    },
    {
      header: "Payment Method",
      accessorKey: "payment_method",
    },
    {
      header: "Transaction ID",
      accessorKey: "transaction_id",
    },
    {
      header: "Payment Status",
      accessorKey: "payment_status",
    },
  ];
  // {format(new Date(user.create_time), "dd MMM yyyy")}
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        className="my-3 border-2 p-2 rounded-sm"
        placeholder="search table"
      />
      <div className="overflow-hidden border-b border-gray-200 rounded-sm shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-slate-100"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext
                        )}
                    {
                      { asc: "🔼", desc: "🔽" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}

            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="text-gray-500 hover:text-blue-800 px-6 py-4 whitespace-nowrap bg-white"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserInvoiceTable;
