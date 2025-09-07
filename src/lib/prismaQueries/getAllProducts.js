import { prisma } from "@/lib/prisma"

const getAllProducts = async () => {
  try {
    const data = await prisma.product.findMany()
    return data
  } catch (error) {
    console.error("Error fetching products:", error)
    throw new Error("Failed to fetch products")
  } 
}

export default getAllProducts
