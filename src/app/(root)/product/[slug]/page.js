import getProductBySlug from "@/lib/prismaQueries/getProductBySlug";
import getRelatedProductByCategory from "@/lib/prismaQueries/getRelatedProductByCategory";
import ProductGallery from "@/components/shared/product/ProductGallery";
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ProductPrice from '@/components/shared/product/ProductPrice';
import AddToCart from "@/components/shared/product/AddToCart";
import { generateId, round2 } from "@/utils/functions";
import ProductSlider from "@/components/shared/product/ProductSlider";



const ProductDetailsPage = async ({ params, searchParams }) => {
  const slug = await params.slug;
  const searchParama = await searchParams;
  const { color, size } = await searchParams;

  const product = await getProductBySlug(slug);
  const category = product?.category?.name;



  console.log("product==>", product);


  const relatadedProducts = await getRelatedProductByCategory(category, 4, product?.id);
  console.log("relatadedProducts", relatadedProducts);

  if (!product) {
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
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5  '>
          <div className='col-span-2'>
            <ProductGallery images={product.image} />
          </div>

          <div className='flex w-full flex-col gap-2 md:p-5 col-span-2'>
            <div className='flex flex-col gap-3'>
              <p className='p-medium-16 rounded-full bg-grey-500/10   text-grey-500'>
                {t('Product.Brand')} {product.brand} {product.category}
              </p>
              <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>

              <RatingSummary
                avgRating={product.avgRating}
                numReviews={product.numReviews}
                asPopover
                ratingDistribution={product.ratingDistribution}
              />
              <Separator />
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <div className='flex gap-3'>
                  <ProductPrice
                    price={product.price}
                    listPrice={product.listPrice}
                    isDeal={product.tags.includes('todays-deal')}
                    forListing={false}
                  />
                </div>
              </div>
            </div>
            <div>
              <SelectVariant
                product={product}
                size={size || product.sizes[0]}
                color={color || product.colors[0]}
              />
            </div>
            <Separator className='my-2' />
            <div className='flex flex-col gap-2'>
              <p className='p-bold-20 text-grey-600'>
                {t('Product.Description')}:
              </p>
              <p className='p-medium-16 lg:p-regular-18'>
                {product.description}
              </p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className='p-4 flex flex-col  gap-4'>
                <ProductPrice price={product.price} />

                {product.countInStock > 0 && product.countInStock <= 3 && (
                  <div className='text-destructive font-bold'>
                    {t('Product.Only X left in stock - order soon', {
                      count: product.countInStock,
                    })}
                  </div>
                )}
                {product.countInStock !== 0 ? (
                  <div className='text-green-700 text-xl'>
                    {t('Product.In Stock')}
                  </div>
                ) : (
                  <div className='text-destructive text-xl'>
                    {t('Product.Out of Stock')}
                  </div>
                )}

                {product.countInStock !== 0 && (
                  <div className='flex justify-center items-center'>
                    
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className='mt-10'>
        <ProductSlider
          products={relatedProducts.data}
          title={t('Product.Best Sellers in', { name: product.category })}
        />
      </section>
      
    </>
  )
}

export default ProductDetailsPage
