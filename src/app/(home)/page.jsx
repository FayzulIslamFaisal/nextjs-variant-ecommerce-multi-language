import HomeCarousel from '@/components/shared/home/HomeCarousel';
import HomeCard from '@/components/shared/home/HomeCard';
import getAllProducts from "@/lib/prismaQueries/getAllProducts";
import getAllCategories from "@/lib/prismaQueries/getAllCategories";

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import ProductSlider from '@/components/shared/product/ProductSlider'
// import { Product } from '@/lib/types/models/product.model'
import getProductByTag from '@/lib/prismaQueries/getProductByTag'


const HomPpage = async () => {
  const categories = await getAllCategories(4);
  const rustic_cards = await getAllProducts(4, "Rustic");
  const modern_cards = await getAllProducts(4, "Modern");
  const intelligent_cards = await getAllProducts(4, "Intelligent");
  const todaysDeals = await getProductByTag(4, "Modern");

  return (
    <>
      <HomeCarousel />
      <div className="container mx-auto pt-8">
        <h2 className="text-2xl font-bold mb-2">Explore to Category</h2>
        <HomeCard cards={categories} />
        <h2 className="text-2xl font-bold mb-2">Explore to New Arrivals</h2>
        <HomeCard cards={rustic_cards} />
        <h2 className="text-2xl font-bold mb-2">Discover Best Sellers</h2>
        <HomeCard cards={modern_cards} />
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
        <HomeCard cards={intelligent_cards} />

        <Card className='w-full rounded-none mb-8'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>
      </div>

    </>
  )
}

export default HomPpage
