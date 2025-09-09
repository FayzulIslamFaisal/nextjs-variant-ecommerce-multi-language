import { prisma } from "@/lib/prisma"

const getAllCategories = async (limit = 10,) => {
    try {
        const category = await prisma.category.findMany({
            take: limit,
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: "desc",
            }
        })
        return category

  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export default getAllCategories