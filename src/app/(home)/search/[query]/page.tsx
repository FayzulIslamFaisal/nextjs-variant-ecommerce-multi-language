import SearchResults from "@/components/SearchResults";
import getProductsSearchByName from "@/lib/prismaQueries/getProductsSearchByName";

const page = async ({ params }: { params: { query: string } }) => {
    const { query } = await params;
    console.log("search query", query);
    const products = await getProductsSearchByName(query);
    console.log("products===>", products);

    if (!products || products.length === 0) {
        return <div className=" flex items-center justify-center h-screen">
            <p className="text-lg">No products found</p>
        </div>;
    }

    return (
        <div>
            <h1>Search Results for: {products?.length}</h1>
            <div className="container mx-auto px-3">
                <div className="!grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                    {products.map((product) => (
                        <SearchResults key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page

