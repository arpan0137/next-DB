import Link from "next/link";
import "./style.css"
import DeleteProduct from "@/lib/components/DeleteProduct";

const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/product1",{cache:"no-store"});
    data = await data.json();
    // console.log(data)
    if (data.success) {
        return data.result;
    }
    else {
        return { success: false };
    }
}

export default async function Page() {
    const products = await getProducts();
    // console.log(products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={7}><h1>Product List</h1></th>
                    </tr>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Brand</th>
                        <th>Product Price</th>
                        <th>Product Colour</th>
                        <th>Product Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.colour}</td>
                                <td>{product.category}</td>
                                <td>{<Link href={"productlist/"+product._id}>Update</Link>}</td>
                                <td>{<DeleteProduct id={product._id}/>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}