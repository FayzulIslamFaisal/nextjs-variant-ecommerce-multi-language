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
        if (!product) return null

    // 🧹 Remove createdAt and updatedAt from product and nested relations
    const { createdAt, updatedAt, ...cleanProduct } = product
    const { createdAt: catCreatedAt, updatedAt: catUpdatedAt, ...cleanCategory } = product.category || {}
    const { createdAt: brandCreatedAt, updatedAt: brandUpdatedAt, ...cleanBrand } = product.brand || {}

    return {
      ...cleanProduct,
      category: cleanCategory,
      brand: cleanBrand,
    }
    } catch (error) {
        console.error("Error fetching product by slug:", error)
        return null
    }
}

export default getProductBySlug