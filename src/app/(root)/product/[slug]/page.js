import getProductBySlug from "@/lib/prismaQueries/getProductBySlug";
import getRelatedProductByCategory from "@/lib/prismaQueries/getRelatedProductByCategory";

const ProductDetailsPage = async({params, searchParams}) => {
    const slug = await params.slug;
    const searchParama = await searchParams;
    const { color, size } = await searchParams;

    const product = await getProductBySlug(slug);
    console.log(product, "product");

    
    const relatadedProducts = await getRelatedProductByCategory(product?.categoryId, 4, product?.id);
    console.log("relatadedProducts",relatadedProducts);
    
    if(!product){
        return (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
                Sorry, the product type <span className="text-primary">{slug}</span> is not available at the moment.
              </h1>
            </div>
        )
    }

  return (
    <>
      <h1>Product Details</h1>
    </>
  )
}

export default ProductDetailsPage
