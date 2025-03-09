"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
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
