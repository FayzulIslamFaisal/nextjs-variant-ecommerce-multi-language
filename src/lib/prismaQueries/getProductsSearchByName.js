import { prisma } from "@/lib/prisma";

const getProductsSearchByName = async (searchQuery) => {
    if (!searchQuery) return [];

    try {
        // URL encoded text যেমন "Generic%20Granite%20Hat" ডিকোড করবো
        const decodedQuery = decodeURIComponent(searchQuery);

        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: decodedQuery,
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                price: true,
                image: true,
                isPublished: true,
                listPrice: true,
                countInStock: true,
                sizes: true,
                colors: true,
                avgRating: true,
                numReviews: true,
                numSales: true,
                ratingDistribution: true,

                // 🏷️ Category সম্পর্ক
                category: {
                    select: {
                        id: true,
                        name: true,
                    },
                },

                // 🏭 Brand সম্পর্ক
                brand: {
                    select: {
                        id: true,
                        name: true,
                    },
                },

                // 🔖 Tags সম্পর্ক (ProductTags → Tag)
                tags: {
                    select: {
                        id: true,
                        tag: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },

                // ⭐ Review সম্পর্ক
                reviews: {
                    select: {
                        id: true,
                        rating: true,
                        comment: true,
                    },
                },
            },
            take: 10,
        });

        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export default getProductsSearchByName;
