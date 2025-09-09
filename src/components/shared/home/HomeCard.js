import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const HomeCard = async ({cards}) => {
  
  return (
    <div className="py-8 mb:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {cards.map((card) => (
          <Card key={card.id} className=" h-full flex flex-col rounded-2xl">
            <CardContent className="p-4 flex-1">
              <h3 className="text-xl font-bold mb-4">{card.name}</h3>
              <Link href={`/products/${card.id}`} className="flex flex-col">
                {card.image && card.image.length > 0 ? (
                  <Image
                    src={card.image[0]} // pick the first image
                    alt={card.name}
                    className="aspect-square object-scale-down max-w-full h-auto mx-auto shadow-md rounded-md mb-3"
                    width={120}
                    height={120}
                  />
                ) : (
                  <Image
                    src="/images/images.png" // fallback placeholder
                    alt="placeholder"
                    className="aspect-square object-scale-down max-w-full h-auto mx-auto shadow-md rounded-md mb-3"
                    width={120}
                    height={120}
                  />
                )}
                <p className="text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {card?.name}
                </p>
                {
                  card.price && (<p className="text-center text-sm text-gray-700 mt-1">${card.price.toFixed(2)}</p>)
                }
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomeCard
