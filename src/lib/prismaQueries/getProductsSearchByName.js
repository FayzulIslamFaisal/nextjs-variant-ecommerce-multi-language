

import { prisma } from "@/lib/prisma"

const getProductsSearchByName = async (searchQuery) => {
    if (!searchQuery) return [];

    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: searchQuery,
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                price: true,
                image: true,
            },
            take: 10,
        });

        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
export default getProductsSearchByName;



