import { prisma } from "@/lib/prisma"

const getProductsForCard = async (limit = 10, tag = "") => {
  try {
    const products = await prisma.product.findMany({
      take: limit,
      where: {
        isPublished: true,
        ...(tag && {
          tags: {
            some: {
              tag: {
                name: tag, // filter through ProductTags → Tag
              },
            },
          },
        }),
      },
      include: {
        tags: {
          include: {
            tag: true, // include tag details if needed
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return products
  } catch (error) {
    console.error("Error fetching products for card:", error)
    throw new Error("Failed to fetch products for card")
  }
}

export default getProductsForCard
