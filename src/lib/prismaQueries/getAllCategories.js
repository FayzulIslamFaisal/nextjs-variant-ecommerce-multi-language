import { prisma } from "@/lib/prisma"

const getAllCategories = async () => {
    try {
        const category = await prisma.category.findMany({
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