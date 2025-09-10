import { prisma } from "@/lib/prisma";

const getRelatedProductByCategory = async (categoryId, limit = 10, productId) => {
  try {
    const products = await prisma.product.findMany({
      take: limit,
      where: {
        categoryId,
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
