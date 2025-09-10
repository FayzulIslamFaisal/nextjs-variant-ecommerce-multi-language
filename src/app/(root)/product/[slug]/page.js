import getProductBySlug from "@/lib/prismaQueries/getProductBySlug";

const ProductDetailsPage = async({params}) => {
    const slug = await params.slug;
    console.log("slug===>> ",slug);
    
    const product = await getProductBySlug(slug);
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
