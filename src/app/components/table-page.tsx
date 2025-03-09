"use client";

import React from 'react'
import BreadCrumb from './bread-crumb'
import { DataTable } from './data-table'

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface DataTableProps<TData, TValue> {
  name: string
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function TablePage<TData, TValue>({
  name,
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
  <div className="p-6 space-y-4">
    <div className="flex mb-2"><BreadCrumb name={name}/></div>
    <div className="font-bold text-lg">{name}</div>
    <div className="pt-4 ">
      <DataTable columns={columns} data={data} />
    </div>
  </div>

  );

}