import HomeCarousel from '@/components/shared/home/HomeCarousel';
import HomeCard from '@/components/shared/home/HomeCard';
import getAllProducts from "@/lib/prismaQueries/getAllProducts"
import getAllCategories from "@/lib/prismaQueries/getAllCategories"


const HomPpage = async () => {
  const categories = await getAllCategories();
  console.log("categories===>", categories);

  const rustic_cards = await getAllProducts(4, "Rustic");
  console.log("rustic_cards===>", rustic_cards);

  const modern_cards = await getAllProducts(4, "Modern");
  console.log("modern_cards===>", modern_cards);

  const intelligent_cards = await getAllProducts(4, "Intelligent");
  console.log("intelligent_cards===>", intelligent_cards);





  return (
    <>
      <HomeCarousel />
      <HomeCard cards={rustic_cards} />
      <HomeCard cards={modern_cards} />
      <HomeCard cards={intelligent_cards} />
    </>
  )
}

export default HomPpage
