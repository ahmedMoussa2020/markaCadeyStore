import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: "Ahmed",
      email: "ahmed.moussaisman92@gmail.com",
      password: bcrypt.hashSync("ahmed4839"),
      isAdmin: true,
    },
    {
      name: "Abdalla",
      email: "abdalla.malmo@gmail.com",
      password: bcrypt.hashSync("shamsa671220"),
      isAdmin: true,
    },
  ],

  products: [
    {
      name: "Spicy Green Sauce",
      slug: "Best Green Sauce",
      category: "Food",
      image: "/images/sause2.png", // 679px × 829px
      price: 55,
      countInStock: 10,
      brand: "Marka Cadey",
      rating: 4.5,
      numReviews: 10,
      description: "This sauce is highly recommended from the Restaurant",
    },

    {
      name: "Spicy Dadlar Sauce",
      slug: "Best Dadlar Sauce",
      category: "Food",
      image: "/images/sause2.png",
      price: 55,
      countInStock: 20,
      brand: "Marka Cadey",
      rating: 4.0,
      numReviews: 10,
      description: "This sauce is highly recommended from the Restaurant",
    },

    {
      name: "Spicy Coconut Sauce",
      slug: "Best Coconut Sauce",
      category: "Food",
      image: "/images/sause2.png",
      price: 55,
      countInStock: 15,
      brand: "Marka Cadey",
      rating: 4.5,
      numReviews: 14,
      description: "This sauce is highly recommended from the Restaurant",
    },

    {
      name: "Spicy Chutney Sauce",
      slug: "Best Chutney Sauce",
      category: "Food",
      image: "/images/sause2.png",
      price: 55,
      countInStock: 5,
      brand: "Marka Cadey",
      rating: 4.5,
      numReviews: 10,
      description: "This sauce is highly recommended from the Restaurant",
    },
  ],
};
export default data;
