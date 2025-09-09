import prisma from "@/lib/prisma";

const getProductByTag = async (limit = 10, tag="") => {
    try {
        const products = await prisma.product.findMany({
            take: limit,
            where: {
                isPublished: true,
                tags: {
                    some: {
                        tag: {
                            name: tag, // filter through ProductTags → Tag
                        },
                    },
                },
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
        console.error("Error fetching products:", error)
        return []
    }
}

export default getProductByTag