import { prisma } from "@/lib/prisma";

const getRelatedProductByCategory = async (categoryName, limit = 10, productId) => {
  try {
    const products = await prisma.product.findMany({
      take: limit,
      where: {
        category: {
          name: categoryName
        },
        isPublished: true,
        NOT: {
          id: productId,
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching product by category:", error);
    return null;
  }
};

export default getRelatedProductByCategory;
