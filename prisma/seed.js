import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seeding...");

  // --- Clear old data ---
  await prisma.productTags.deleteMany();
  await prisma.review.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.user.deleteMany();

  // --- Create Categories (unique) ---
  const categoryNames = faker.helpers.uniqueArray(faker.commerce.department, 5);
  const categories = await Promise.all(
    categoryNames.map((name) =>
      prisma.category.create({
        data: { name },
      })
    )
  );

  // --- Create Brands (unique) ---
  const brandNames = faker.helpers.uniqueArray(faker.company.name, 5);
  const brands = await Promise.all(
    brandNames.map((name) =>
      prisma.brand.create({
        data: { name },
      })
    )
  );

  // --- Create Tags (unique) ---
  const tagNames = faker.helpers.uniqueArray(faker.commerce.productAdjective, 10);
  const tags = await Promise.all(
    tagNames.map((name) =>
      prisma.tag.create({
        data: { name },
      })
    )
  );

  // --- Create Users ---
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        name: faker.person.fullName(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
      },
    });
    users.push(user);
  }

  // --- Create Products ---
  for (let i = 0; i < 10; i++) {
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        slug: faker.lorem.slug(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 200 })),
        isPublished: faker.datatype.boolean(),
        listPrice: parseFloat(faker.commerce.price({ min: 50, max: 250 })),
        countInStock: faker.number.int({ min: 0, max: 100 }),
        image: [faker.image.urlLoremFlickr({ category: "fashion" })],
        sizes: ["S", "M", "L"],
        colors: ["Red", "Black", "White"],
        categoryId: faker.helpers.arrayElement(categories).id,
        brandId: faker.helpers.arrayElement(brands).id,
      },
    });

    // Attach random Tags
    const randomTags = faker.helpers.arrayElements(tags, { min: 2, max: 4 });
    for (const tag of randomTags) {
      await prisma.productTags.create({
        data: {
          productId: product.id,
          tagId: tag.id,
        },
      });
    }

    // Create Reviews
    const randomReviews = faker.number.int({ min: 1, max: 5 });
    let totalRating = 0;

    for (let j = 0; j < randomReviews; j++) {
      const rating = faker.number.int({ min: 1, max: 5 });
      totalRating += rating;

      await prisma.review.create({
        data: {
          rating,
          comment: faker.lorem.sentence(),
          productId: product.id,
          userId: faker.helpers.arrayElement(users).id,
        },
      });
    }

    // Update product rating
    await prisma.product.update({
      where: { id: product.id },
      data: {
        numReviews: randomReviews,
        avgRating: totalRating / randomReviews,
      },
    });
  }

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
