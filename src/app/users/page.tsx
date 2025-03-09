import { User, columns } from "./columns"
import { TablePage } from "../components/table-page"

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function Users() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <TablePage name="Users" columns={columns} data={data} />
    </div>
  )
}
