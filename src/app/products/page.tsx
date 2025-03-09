import { Product, columns } from "./columns";
import { TablePage } from "../components/table-page";

async function getData(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    console.log("products data:", products);  

    return products.map((product: any) => ({
      id: product.id.toString(),
      title: product.title,
      brand: product.brand,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      warrantyInformation: product.warrantyInformation,
      weight: product.weight,
    }));
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
}

export default async function Products() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <TablePage name="Products" columns={columns} data={data} />
    </div>
  );
}
