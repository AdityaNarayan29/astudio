"use client"

import { ColumnDef } from "@tanstack/react-table"
export type Product = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "discountPercentage",
    header: "Discount %",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "warrantyInformation",
    header: "Warranty",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
]

export const filter = {label: "Warranty",name: "warrantyInformation",options: ["1 week warranty","1 month warranty","6 months warranty","1 year warranty","2 year warranty","5 year warranty","Lifetime warranty","No warranty"]};