import { prisma } from "@/lib/prisma"
const getProductBySlug = async (slug) => {
    try {
        const product = await prisma.product.findFirst({
            where: {
                slug: slug,
                isPublished: true
            },
            include: {
                category: true,
                brand: true,
            }
        })
        return product
    } catch (error) {
        console.error("Error fetching product by slug:", error)
        return null
    }
}

export default getProductBySlug