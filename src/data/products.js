const products = [
  {
    id: 1,
    name: "Minimalist Smart Watch",
    price: 2499,
    discount: 30,
    isSale: true,
    isBestSeller: true,
    isTrending: true,
    category: "Electronics",
    image: "/images/products/img2.jpg",
    description:
      "A sleek and minimalist smartwatch designed for modern lifestyles. Lightweight, durable, and perfect for everyday wear.",

    rating: 4.6,
    reviewsCount: 128,
    reviews: [
      {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        comment: "Amazing quality! Looks premium and works perfectly."
      },
      {
        id: 2,
        name: "Aman Verma",
        rating: 4,
        comment: "Battery life is good. Totally worth the price."
      }
    ]
  },

  {
    id: 2,
    name: "Wireless Earbuds Pro",
    price: 1299,
    discount: 20,
    isSale: true,
    isBestSeller: false,
    isTrending: true,
    category: "Electronics",
    image: "/images/products/img1.jpg",
    description:
      "Crystal-clear sound with deep bass and long battery life. Ideal for music, calls, and workouts.",

    rating: 4.4,
    reviewsCount: 94,
    reviews: [
      {
        id: 1,
        name: "Neha Singh",
        rating: 5,
        comment: "Sound quality is awesome. Totally worth buying."
      }
    ]
  },

  {
    id: 3,
    name: "Premium Laptop Backpack",
    price: 1899,
    discount: 0,
    isSale: false,
    isBestSeller: true,
    isTrending: true,
    category: "Accessories",
    image: "/images/products/img3.webp",
    description:
      "Stylish and durable backpack with padded compartments for laptop and accessories.",

    rating: 4.7,
    reviewsCount: 76,
    reviews: [
      {
        id: 1,
        name: "Vikas Mehta",
        rating: 5,
        comment: "Very spacious and premium look. Highly recommended!"
      }
    ]
  },

  {
    id: 4,
    name: "Luxury Sunglasses",
    price: 999,
    discount: 40,
    isSale: true,
    isBestSeller: false,
    isTrending: true,
    category: "Fashion",
    image: "/images/products/img4.webp",
    description:
      "UV-protected premium sunglasses with a modern frame and comfortable fit.",

    rating: 4.3,
    reviewsCount: 52,
    reviews: []
  },

  {
    id: 5,
    name: "Magnetic Phone Holder",
    price: 599,
    discount: 0,
    isSale: false,
    isBestSeller: true,
    isTrending: true,
    category: "Accessories",
    image: "/images/products/img5.webp",
    description:
      "Strong magnetic grip with 360° rotation. Perfect for car dashboards and desks.",

    rating: 4.5,
    reviewsCount: 88,
    reviews: []
  },

  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 1499,
    discount: 25,
    isSale: true,
    isBestSeller: false,
    isTrending: false,
    category: "Electronics",
    image: "/images/products/img6.webp",
    description:
      "Fast wireless charging with sleek design. Compatible with all Qi-enabled devices.",

    rating: 4.2,
    reviewsCount: 41,
    reviews: []
  },

  {
    id: 7,
    name: "Premium Leather Wallet",
    price: 899,
    discount: 15,
    isSale: true,
    isBestSeller: true,
    isTrending: true,
    category: "Fashion",
    image: "/images/products/img7.jpg",
    description:
      "Handcrafted leather wallet with a slim profile and multiple card slots.",

    rating: 4.8,
    reviewsCount: 143,
    reviews: [
      {
        id: 1,
        name: "Rohit Mehta",
        rating: 5,
        comment: "Excellent quality leather. Looks very premium."
      }
    ]
  },

  {
    id: 8,
    name: "Smart LED Desk Lamp",
    price: 1699,
    discount: 0,
    isSale: false,
    isBestSeller: false,
    isTrending: false,
    category: "Home & Living",
    image: "/images/products/img8.webp",
    description:
      "Adjustable brightness levels with touch control. Perfect for work and study setups.",

    rating: 4.1,
    reviewsCount: 29,
    reviews: []
  },
]

export default products
