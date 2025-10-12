import getProductBySlug from "@/lib/prismaQueries/getProductBySlug";
import ProductSingle from "@/components/product/ProductSingle";

const page = async ({ params }) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    return (
        <>
            <ProductSingle product={product} />
        </>
    )
}

export default page
