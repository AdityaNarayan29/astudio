import axios from 'axios';
import { User, columns, filter } from "./columns";
import { TablePage } from "../components/table-page";

async function getData(): Promise<User[]> {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    const { users } = response.data;

    return users.map((user: any) => ({
      id: user.id.toString(),
      firstName: user.firstName.toString(),
      lastName: user.lastName.toString(),
      maidenName: user.maidenName.toString(),
      age: user.age,
      gender: user.gender,
      email: user.email,
      userName: user.username,
      bloodGroup: user.bloodGroup,
      eyeColor: user.eyeColor,

    }));
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

export default async function Users() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <TablePage name="Users" columns={columns} data={data} filter={filter}/>
    </div>
  );
}
