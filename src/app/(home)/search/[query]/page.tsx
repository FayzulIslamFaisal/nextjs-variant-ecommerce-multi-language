import getProductsSearchByName from "@/lib/prismaQueries/getProductsSearchByName";

const page = async ({ params }: { params: { query: string } }) => {
    const { query } = await params;
    console.log("search query", query);
    const products = await getProductsSearchByName(query);
    console.log("products===>", products);

    if (!products || products.length === 0) {
        return <div>No products found</div>;
    }

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default page

