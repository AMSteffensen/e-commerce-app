import { faker } from "@faker-js/faker";

const fakeProduct = [];

Array.from({ length: 20 }).forEach(() => {
  fakeProduct.push({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.sports(0, 0, true),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
  });
});

console.log(fakeProduct);

const handler = (req, res) => {
  res.status(200).json(fakeProduct);
};

export default handler;
