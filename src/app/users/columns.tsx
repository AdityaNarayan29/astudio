"use client"

import { ColumnDef } from "@tanstack/react-table"
export type User = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey:"firstName",
    header:"First Name",
  },
  {
    accessorKey:"lastName",
    header:"Last Name",
  },
  {
    accessorKey:"maidenName",
    header:"Maiden Name",
  },
  {
    accessorKey:"age",
    header:"Age",
  },
  {
    accessorKey:"gender",
    header:"Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "bloodGroup",
    header: "Blood Group",
  },
  {
    accessorKey: "eyeColor",
    header: "Eye Color",
  },
]
