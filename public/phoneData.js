const phoneData = {
  phones: [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      rating: 4.9,
      reviews: 1200,
      description: "The latest flagship iPhone with A17 Pro chip, titanium design, and advanced camera system.",
      prices: [
        { store: "Apple", price: 1199, link: "https://www.apple.com" },
        { store: "Amazon", price: 1179, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 1199, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.7-inch Super Retina XDR",
        Processor: "A17 Pro",
        Camera: "48MP Triple",
        Battery: "4422 mAh"
      }
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      brand: "Samsung",
      rating: 4.8,
      reviews: 950,
      description: "A premium Android phone with a 200MP camera, Snapdragon 8 Gen 2, and S Pen support.",
      prices: [
        { store: "Samsung", price: 1199, link: "https://www.samsung.com" },
        { store: "Amazon", price: 1179, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 1199, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.8-inch Dynamic AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "200MP Quad",
        Battery: "5000 mAh"
      }
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      rating: 4.7,
      reviews: 800,
      description: "Google's flagship phone with Tensor G3 chip, AI-powered camera, and smooth Android experience.",
      prices: [
        { store: "Google Store", price: 999, link: "https://store.google.com" },
        { store: "Amazon", price: 989, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 999, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.7-inch OLED",
        Processor: "Tensor G3",
        Camera: "50MP Triple",
        Battery: "5050 mAh"
      }
    },
    {
      id: 4,
      name: "OnePlus 11",
      brand: "OnePlus",
      rating: 4.6,
      reviews: 700,
      description: "A flagship killer with Snapdragon 8 Gen 2, Hasselblad camera, and fast charging.",
      prices: [
        { store: "OnePlus", price: 699, link: "https://www.oneplus.com" },
        { store: "Amazon", price: 689, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 699, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      rating: 4.5,
      reviews: 600,
      description: "A premium Xiaomi phone with Leica camera, Snapdragon 8 Gen 2, and fast charging.",
      prices: [
        { store: "Xiaomi", price: 999, link: "https://www.mi.com" },
        { store: "Amazon", price: 989, link: "https://www.amazon.com" },
        { store: "AliExpress", price: 950, link: "https://www.aliexpress.com" }
      ],
      specifications: {
        Screen: "6.73-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "4820 mAh"
      }
    },
    {
      id: 6,
      name: "Oppo Find X6 Pro",
      brand: "Oppo",
      rating: 4.6,
      reviews: 350,
      description: "A flagship Oppo phone with Hasselblad camera and Snapdragon 8 Gen 2.",
      prices: [
        { store: "Oppo", price: 1099, link: "https://www.oppo.com" },
        { store: "Amazon", price: 1079, link: "https://www.amazon.com" },
        { store: "AliExpress", price: 1050, link: "https://www.aliexpress.com" }
      ],
      specifications: {
        Screen: "6.82-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 7,
      name: "Vivo X90 Pro",
      brand: "Vivo",
      rating: 4.5,
      reviews: 300,
      description: "A premium Vivo phone with Zeiss camera and Dimensity 9200 chip.",
      prices: [
        { store: "Vivo", price: 999, link: "https://www.vivo.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 950, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "Dimensity 9200",
        Camera: "50MP Triple",
        Battery: "4870 mAh"
      }
    },
    {
      id: 8,
      name: "Realme GT 3",
      brand: "Realme",
      rating: 4.4,
      reviews: 250,
      description: "A powerful Realme phone with Snapdragon 8+ Gen 1 and 150W fast charging.",
      prices: [
        { store: "Realme", price: 599, link: "https://www.realme.com" },
        { store: "Amazon", price: 589, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 570, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.74-inch AMOLED",
        Processor: "Snapdragon 8+ Gen 1",
        Camera: "50MP Triple",
        Battery: "4600 mAh"
      }
    },
    {
      id: 9,
      name: "Asus ROG Phone 7",
      brand: "Asus",
      rating: 4.6,
      reviews: 200,
      description: "A gaming phone with Snapdragon 8 Gen 2 and advanced cooling system.",
      prices: [
        { store: "Asus", price: 999, link: "https://www.asus.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 999, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "6000 mAh"
      }
    },
    {
      id: 10,
      name: "Nothing Phone (2)",
      brand: "Nothing",
      rating: 4.3,
      reviews: 150,
      description: "A unique phone with transparent design and Snapdragon 8+ Gen 1.",
      prices: [
        { store: "Nothing", price: 599, link: "https://www.nothing.tech" },
        { store: "Amazon", price: 589, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 570, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.55-inch OLED",
        Processor: "Snapdragon 8+ Gen 1",
        Camera: "50MP Dual",
        Battery: "4700 mAh"
      }
    },
    {
      id: 11,
      name: "iPhone 14 Pro",
      brand: "Apple",
      rating: 4.8,
      reviews: 1100,
      description: "A powerful iPhone with A16 Bionic chip and Dynamic Island display.",
      prices: [
        { store: "Apple", price: 999, link: "https://www.apple.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 999, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.1-inch Super Retina XDR",
        Processor: "A16 Bionic",
        Camera: "48MP Triple",
        Battery: "3200 mAh"
      }
    },
    {
      id: 12,
      name: "Samsung Galaxy Z Flip 5",
      brand: "Samsung",
      rating: 4.7,
      reviews: 600,
      description: "A compact foldable phone with Snapdragon 8 Gen 2 and flexible AMOLED display.",
      prices: [
        { store: "Samsung", price: 999, link: "https://www.samsung.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 999, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.7-inch Foldable AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "12MP Dual",
        Battery: "3700 mAh"
      }
    },
    {
      id: 13,
      name: "Google Pixel 7",
      brand: "Google",
      rating: 4.6,
      reviews: 700,
      description: "A budget-friendly Pixel phone with Tensor G2 chip and great camera performance.",
      prices: [
        { store: "Google Store", price: 599, link: "https://store.google.com" },
        { store: "Amazon", price: 589, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 599, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.3-inch OLED",
        Processor: "Tensor G2",
        Camera: "50MP Dual",
        Battery: "4355 mAh"
      }
    },
    {
      id: 14,
      name: "OnePlus Nord 3",
      brand: "OnePlus",
      rating: 4.4,
      reviews: 400,
      description: "A mid-range phone with Dimensity 9000 chip and 120Hz AMOLED display.",
      prices: [
        { store: "OnePlus", price: 499, link: "https://www.oneplus.com" },
        { store: "Amazon", price: 489, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 470, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.74-inch AMOLED",
        Processor: "Dimensity 9000",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 15,
      name: "Xiaomi Redmi K60",
      brand: "Xiaomi",
      rating: 4.3,
      reviews: 300,
      description: "A budget-friendly phone with Snapdragon 8+ Gen 1 and 2K AMOLED display.",
      prices: [
        { store: "Xiaomi", price: 499, link: "https://www.mi.com" },
        { store: "Amazon", price: 489, link: "https://www.amazon.com" },
        { store: "AliExpress", price: 470, link: "https://www.aliexpress.com" }
      ],
      specifications: {
        Screen: "6.67-inch AMOLED",
        Processor: "Snapdragon 8+ Gen 1",
        Camera: "64MP Triple",
        Battery: "5500 mAh"
      }
    },
    {
      id: 16,
      name: "Oppo Reno 10 Pro",
      brand: "Oppo",
      rating: 4.5,
      reviews: 350,
      description: "A stylish phone with MediaTek Dimensity 8200 and 120Hz AMOLED display.",
      prices: [
        { store: "Oppo", price: 599, link: "https://www.oppo.com" },
        { store: "Amazon", price: 589, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 570, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "Dimensity 8200",
        Camera: "50MP Triple",
        Battery: "4600 mAh"
      }
    },
    {
      id: 17,
      name: "Vivo V27 Pro",
      brand: "Vivo",
      rating: 4.4,
      reviews: 250,
      description: "A sleek phone with MediaTek Dimensity 7200 and 50MP front camera.",
      prices: [
        { store: "Vivo", price: 499, link: "https://www.vivo.com" },
        { store: "Amazon", price: 489, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 470, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "Dimensity 7200",
        Camera: "50MP Triple",
        Battery: "4600 mAh"
      }
    },
    {
      id: 18,
      name: "Realme Narzo 60 Pro",
      brand: "Realme",
      rating: 4.3,
      reviews: 200,
      description: "A budget phone with MediaTek Dimensity 7050 and 67W fast charging.",
      prices: [
        { store: "Realme", price: 299, link: "https://www.realme.com" },
        { store: "Amazon", price: 289, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 270, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "Dimensity 7050",
        Camera: "50MP Dual",
        Battery: "5000 mAh"
      }
    },
    {
      id: 19,
      name: "Asus Zenfone 10",
      brand: "Asus",
      rating: 4.5,
      reviews: 150,
      description: "A compact flagship phone with Snapdragon 8 Gen 2 and 144Hz AMOLED display.",
      prices: [
        { store: "Asus", price: 699, link: "https://www.asus.com" },
        { store: "Amazon", price: 689, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 699, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "5.9-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Dual",
        Battery: "4300 mAh"
      }
    },
    {
      id: 20,
      name: "Nothing Phone (1)",
      brand: "Nothing",
      rating: 4.2,
      reviews: 100,
      description: "A unique phone with transparent design and Snapdragon 778G+.",
      prices: [
        { store: "Nothing", price: 399, link: "https://www.nothing.tech" },
        { store: "Amazon", price: 389, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 370, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.55-inch OLED",
        Processor: "Snapdragon 778G+",
        Camera: "50MP Dual",
        Battery: "4500 mAh"
      }
    },
    {
      id: 21,
      name: "iPhone SE (2023)",
      brand: "Apple",
      rating: 4.5,
      reviews: 800,
      description: "A compact iPhone with A15 Bionic chip and Touch ID.",
      prices: [
        { store: "Apple", price: 429, link: "https://www.apple.com" },
        { store: "Amazon", price: 419, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 429, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "4.7-inch Retina HD",
        Processor: "A15 Bionic",
        Camera: "12MP Single",
        Battery: "2018 mAh"
      }
    },

    {
      id: 22,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      rating: 4.8,
      reviews: 950,
      description: "A premium Android phone with a 200MP camera, Snapdragon 8 Gen 2, and S Pen support.",
      prices: [
        { store: "Samsung", price: 1199, link: "https://www.samsung.com" },
        { store: "Amazon", price: 1179, link: "https://www.amazon.com" },
        { store: "Best Buy", price: 1199, link: "https://www.bestbuy.com" }
      ],
      specifications: {
        Screen: "6.8-inch Dynamic AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "200MP Quad",
        Battery: "5000 mAh"
      }
    },

    {
      id: 23,
      name: "Oppo Find X6 Pro",
      brand: "Oppo",
      rating: 4.7,
      reviews: 1200,
      description: "A flagship phone with a Hasselblad camera and Snapdragon 8 Gen 2 processor.",
      prices: [
        { store: "Oppo Store", price: 899, link: "https://www.oppo.com" },
        { store: "Amazon", price: 879, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 899, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 24,
      name: "Vivo X90 Pro",
      brand: "Vivo",
      rating: 4.6,
      reviews: 1100,
      description: "A premium phone with Zeiss optics and a MediaTek Dimensity 9200 chipset.",
      prices: [
        { store: "Vivo Store", price: 849, link: "https://www.vivo.com" },
        { store: "Amazon", price: 829, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 849, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "MediaTek Dimensity 9200",
        Camera: "50MP Triple",
        Battery: "4870 mAh"
      }
    },
    {
      id: 25,
      name: "Nothing Phone (2)",
      brand: "Nothing",
      rating: 4.5,
      reviews: 950,
      description: "A unique phone with a transparent design and Glyph Interface.",
      prices: [
        { store: "Nothing Store", price: 599, link: "https://www.nothing.tech" },
        { store: "Amazon", price: 589, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 599, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.55-inch OLED",
        Processor: "Snapdragon 8+ Gen 1",
        Camera: "50MP Dual",
        Battery: "4700 mAh"
      }
    },
    {
      id: 26,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      rating: 4.9,
      reviews: 2500,
      description: "Apple's latest flagship with a titanium design and A17 Pro chip.",
      prices: [
        { store: "Apple Store", price: 1199, link: "https://www.apple.com" },
        { store: "Amazon", price: 1179, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 1199, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch Super Retina XDR",
        Processor: "A17 Pro",
        Camera: "48MP Triple",
        Battery: "4422 mAh"
      }
    },
    {
      id: 27,
      name: "Redmi Note 12 Pro+",
      brand: "Redmi",
      rating: 4.4,
      reviews: 800,
      description: "A budget-friendly phone with a 200MP camera and 120Hz AMOLED display.",
      prices: [
        { store: "Mi Store", price: 399, link: "https://www.mi.com" },
        { store: "Amazon", price: 389, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 399, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.67-inch AMOLED",
        Processor: "MediaTek Dimensity 1080",
        Camera: "200MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 28,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      rating: 4.7,
      reviews: 1300,
      description: "A flagship phone with Leica optics and Snapdragon 8 Gen 2 processor.",
      prices: [
        { store: "Mi Store", price: 999, link: "https://www.mi.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 999, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.73-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "4820 mAh"
      }
    },
    {
      id: 29,
      name: "Asus ROG Phone 7",
      brand: "Asus",
      rating: 4.6,
      reviews: 900,
      description: "A gaming phone with a 165Hz display and Snapdragon 8 Gen 2 processor.",
      prices: [
        { store: "Asus Store", price: 999, link: "https://www.asus.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 999, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "6000 mAh"
      }
    },
    {
      id: 30,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      rating: 4.8,
      reviews: 950,
      description: "A premium Android phone with a 200MP camera, Snapdragon 8 Gen 2, and S Pen support.",
      prices: [
        { store: "Samsung", price: 1199, link: "https://www.samsung.com" },
        { store: "Amazon", price: 1179, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 1199, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.8-inch Dynamic AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "200MP Quad",
        Battery: "5000 mAh"
      }
    },
    {
      id: 31,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      rating: 4.7,
      reviews: 1400,
      description: "Google's flagship phone with Tensor G3 chip and advanced AI features.",
      prices: [
        { store: "Google Store", price: 999, link: "https://store.google.com" },
        { store: "Amazon", price: 979, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 999, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch OLED",
        Processor: "Tensor G3",
        Camera: "50MP Triple",
        Battery: "5050 mAh"
      }
    },
    {
      id: 32,
      name: "OnePlus 11",
      brand: "OnePlus",
      rating: 4.6,
      reviews: 1100,
      description: "A flagship phone with Hasselblad camera and Snapdragon 8 Gen 2 processor.",
      prices: [
        { store: "OnePlus Store", price: 799, link: "https://www.oneplus.com" },
        { store: "Amazon", price: 779, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 799, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },

    {
      id: 33,
      name: "Oppo Reno 10 Pro",
      brand: "Oppo",
      rating: 4.5,
      reviews: 850,
      description: "A sleek phone with a 50MP telephoto camera and MediaTek Dimensity 8200 chipset.",
      prices: [
        { store: "Oppo Store", price: 499, link: "https://www.oppo.com" },
        { store: "Amazon", price: 489, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 499, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch AMOLED",
        Processor: "MediaTek Dimensity 8200",
        Camera: "50MP Triple",
        Battery: "4600 mAh"
      }
    },
    {
      id: 34,
      name: "Vivo V29 Pro",
      brand: "Vivo",
      rating: 4.4,
      reviews: 700,
      description: "A stylish phone with a 50MP selfie camera and MediaTek Dimensity 9200 chipset.",
      prices: [
        { store: "Vivo Store", price: 549, link: "https://www.vivo.com" },
        { store: "Amazon", price: 539, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 549, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.78-inch AMOLED",
        Processor: "MediaTek Dimensity 9200",
        Camera: "50MP Triple",
        Battery: "4600 mAh"
      }
    },
    {
      id: 35,
      name: "Nothing Phone (1)",
      brand: "Nothing",
      rating: 4.3,
      reviews: 600,
      description: "A unique phone with a transparent design and Glyph Interface.",
      prices: [
        { store: "Nothing Store", price: 399, link: "https://www.nothing.tech" },
        { store: "Amazon", price: 389, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 399, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.55-inch OLED",
        Processor: "Snapdragon 778G+",
        Camera: "50MP Dual",
        Battery: "4500 mAh"
      }
    },
    {
      id: 36,
      name: "iPhone 14 Plus",
      brand: "Apple",
      rating: 4.8,
      reviews: 1800,
      description: "A larger version of the iPhone 14 with a 6.7-inch display and A15 Bionic chip.",
      prices: [
        { store: "Apple Store", price: 899, link: "https://www.apple.com" },
        { store: "Amazon", price: 879, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 899, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.7-inch Super Retina XDR",
        Processor: "A15 Bionic",
        Camera: "12MP Dual",
        Battery: "4323 mAh"
      }
    },
    {
      id: 37,
      name: "Redmi Note 11 Pro",
      brand: "Redmi",
      rating: 4.3,
      reviews: 750,
      description: "A budget-friendly phone with a 108MP camera and 120Hz AMOLED display.",
      prices: [
        { store: "Mi Store", price: 299, link: "https://www.mi.com" },
        { store: "Amazon", price: 289, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 299, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.67-inch AMOLED",
        Processor: "Snapdragon 732G",
        Camera: "108MP Quad",
        Battery: "5020 mAh"
      }
    },
    {
      id: 38,
      name: "Xiaomi 12T Pro",
      brand: "Xiaomi",
      rating: 4.6,
      reviews: 900,
      description: "A flagship phone with a 200MP camera and Snapdragon 8+ Gen 1 processor.",
      prices: [
        { store: "Mi Store", price: 799, link: "https://www.mi.com" },
        { store: "Amazon", price: 779, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 799, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.67-inch AMOLED",
        Processor: "Snapdragon 8+ Gen 1",
        Camera: "200MP Triple",
        Battery: "5000 mAh"
      }
    },
    {
      id: 39,
      name: "Asus Zenfone 10",
      brand: "Asus",
      rating: 4.5,
      reviews: 800,
      description: "A compact flagship phone with Snapdragon 8 Gen 2 and 144Hz display.",
      prices: [
        { store: "Asus Store", price: 699, link: "https://www.asus.com" },
        { store: "Amazon", price: 689, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 699, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "5.9-inch AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Dual",
        Battery: "4300 mAh"
      }
    },
    {
      id: 40,
      name: "Samsung Galaxy Z Fold 5",
      brand: "Samsung",
      rating: 4.7,
      reviews: 1300,
      description: "A foldable flagship phone with a 7.6-inch display and Snapdragon 8 Gen 2 processor.",
      prices: [
        { store: "Samsung", price: 1799, link: "https://www.samsung.com" },
        { store: "Amazon", price: 1779, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 1799, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "7.6-inch Dynamic AMOLED",
        Processor: "Snapdragon 8 Gen 2",
        Camera: "50MP Triple",
        Battery: "4400 mAh"
      }
    },
    {
      id: 41,
      name: "Google Pixel 7a",
      brand: "Google",
      rating: 4.5,
      reviews: 950,
      description: "A mid-range phone with Tensor G2 chip and 64MP camera.",
      prices: [
        { store: "Google Store", price: 499, link: "https://store.google.com" },
        { store: "Amazon", price: 489, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 499, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.1-inch OLED",
        Processor: "Tensor G2",
        Camera: "64MP Dual",
        Battery: "4385 mAh"
      }
    },
    {
      id: 42,
      name: "OnePlus Nord 3",
      brand: "OnePlus",
      rating: 4.4,
      reviews: 850,
      description: "A mid-range phone with MediaTek Dimensity 9000 and 50MP camera.",
      prices: [
        { store: "OnePlus Store", price: 449, link: "https://www.oneplus.com" },
        { store: "Amazon", price: 439, link: "https://www.amazon.com" },
        { store: "Flipkart", price: 449, link: "https://www.flipkart.com" }
      ],
      specifications: {
        Screen: "6.74-inch AMOLED",
        Processor: "MediaTek Dimensity 9000",
        Camera: "50MP Triple",
        Battery: "5000 mAh"
      }
    },

    {

    "id": 43,
    "name": "Oppo Find X6 Pro",
    "brand": "Oppo",
    "rating": 4.7,
    "reviews": 920,
    "description": "Flagship phone with a powerful camera system and fast charging.",
    "prices": [
      { "store": "Oppo Store", "price": 899, "link": "https://www.oppo.com" },
      { "store": "Amazon", "price": 879, "link": "https://www.amazon.com" }
    ],
    "specifications": {
      "Screen": "6.82-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "50MP Triple",
      "Battery": "5000 mAh"
    }
  },
  {
    "id": 44,
    "name": "Vivo X90 Pro+",
    "brand": "Vivo",
    "rating": 4.8,
    "reviews": 1050,
    "description": "A premium phone with a 1-inch camera sensor and Zeiss optics.",
    "prices": [
      { "store": "Vivo Store", "price": 999, "link": "https://www.vivo.com" },
      { "store": "Flipkart", "price": 989, "link": "https://www.flipkart.com" }
    ],
    "specifications": {
      "Screen": "6.78-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "50MP Quad",
      "Battery": "4700 mAh"
    }
  },
  {
    "id": 45,
    "name": "Nothing Phone (3)",
    "brand": "Nothing",
    "rating": 4.6,
    "reviews": 780,
    "description": "The next generation of the transparent phone with improved performance.",
    "prices": [
      { "store": "Nothing", "price": 499, "link": "https://nothing.tech" },
      { "store": "Best Buy", "price": 509, "link": "https://www.bestbuy.com" }
    ],
    "specifications": {
      "Screen": "6.7-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "64MP Dual",
      "Battery": "4800 mAh"
    }
  },
  {
    "id": 46,
    "name": "iPhone 16 Pro",
    "brand": "Apple",
    "rating": 4.9,
    "reviews": 1500,
    "description": "The latest iPhone with a faster processor and enhanced camera features.",
    "prices": [
      { "store": "Apple", "price": 1099, "link": "https://www.apple.com" },
      { "store": "Verizon", "price": 1149, "link": "https://www.verizon.com" }
    ],
    "specifications": {
      "Screen": "6.1-inch Super Retina XDR",
      "Processor": "A18 Bionic",
      "Camera": "48MP Triple",
      "Battery": "3877 mAh"
    }
  },
  {
    "id": 47,
    "name": "Redmi K70 Pro",
    "brand": "Xiaomi",
    "rating": 4.5,
    "reviews": 850,
    "description": "A powerful phone with a focus on performance and value.",
    "prices": [
      { "store": "Xiaomi", "price": 599, "link": "https://www.mi.com" },
      { "store": "Amazon", "price": 589, "link": "https://www.amazon.com" }
    ],
    "specifications": {
      "Screen": "6.67-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "108MP Triple",
      "Battery": "5500 mAh"
    }
  },
  {
    "id": 48,
    "name": "Asus Zenfone 11",
    "brand": "Asus",
    "rating": 4.6,
    "reviews": 700,
    "description": "A stylish phone with a unique camera design and a focus on photography.",
    "prices": [
      { "store": "Asus", "price": 749, "link": "https://www.asus.com" },
      { "store": "Newegg", "price": 729, "link": "https://www.newegg.com" }
    ],
    "specifications": {
      "Screen": "6.67-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Camera": "64MP Triple",
      "Battery": "5000 mAh"
    }
  },
  {
    "id": 49,
    "name": "Google Pixel 9",
    "brand": "Google",
    "rating": 4.8,
    "reviews": 1100,
    "description": "The latest Pixel phone with improved AI features and camera capabilities.",
    "prices": [
      { "store": "Google Store", "price": 699, "link": "https://store.google.com" },
      { "store": "Best Buy", "price": 729, "link": "https://www.bestbuy.com" }
    ],
    "specifications": {
      "Screen": "6.3-inch OLED",
      "Processor": "Google Tensor G4",
      "Camera": "50MP Dual",
      "Battery": "4600 mAh"
    }
  },
  {
    "id": 50,
    "name": "OnePlus 13 Pro",
    "brand": "OnePlus",
    "rating": 4.7,
    "reviews": 980,
    "description": "A flagship phone with top-of-the-line specs and a refined design.",
    "prices": [
      { "store": "OnePlus", "price": 949, "link": "https://www.oneplus.com" },
      { "store": "Amazon", "price": 929, "link": "https://www.amazon.com" }
    ],
    "specifications": {
      "Screen": "6.7-inch LTPO AMOLED",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "64MP Triple",
      "Battery": "5200 mAh"
    }
  },
  {
    id: 51,
    name: "Oppo Find X7 Pro",
    brand: "Oppo",
    rating: 4.7,
    reviews: 1400,
    description: "A flagship phone with Hasselblad camera and Snapdragon 8 Gen 2 processor.",
    prices: [
      { store: "Oppo Store", price: 999, link: "https://www.oppo.com" },
      { store: "Amazon", price: 979, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 999, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.7-inch AMOLED",
      Processor: "Snapdragon 8 Gen 2",
      Camera: "50MP Triple",
      Battery: "5000 mAh"
    }
  },
  {
    id: 52,
    name: "Vivo X100 Pro",
    brand: "Vivo",
    rating: 4.6,
    reviews: 1200,
    description: "A premium phone with Zeiss optics and MediaTek Dimensity 9300 chipset.",
    prices: [
      { store: "Vivo Store", price: 899, link: "https://www.vivo.com" },
      { store: "Amazon", price: 879, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 899, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.78-inch AMOLED",
      Processor: "MediaTek Dimensity 9300",
      Camera: "50MP Triple",
      Battery: "4870 mAh"
    }
  },
  {
    id: 53,
    name: "Nothing Phone (3)",
    brand: "Nothing",
    rating: 4.5,
    reviews: 1000,
    description: "A unique phone with a transparent design and Glyph Interface.",
    prices: [
      { store: "Nothing Store", price: 699, link: "https://www.nothing.tech" },
      { store: "Amazon", price: 689, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 699, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.55-inch OLED",
      Processor: "Snapdragon 8+ Gen 1",
      Camera: "50MP Dual",
      Battery: "4700 mAh"
    }
  },
  {
    id: 54,
    name: "iPhone 16 Pro",
    brand: "Apple",
    rating: 4.9,
    reviews: 3000,
    description: "Apple's latest flagship with a titanium design and A18 Pro chip.",
    prices: [
      { store: "Apple Store", price: 1299, link: "https://www.apple.com" },
      { store: "Amazon", price: 1279, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 1299, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.7-inch Super Retina XDR",
      Processor: "A18 Pro",
      Camera: "48MP Triple",
      Battery: "4422 mAh"
    }
  },
  {
    id: 55,
    name: "Redmi Note 13 Pro+",
    brand: "Redmi",
    rating: 4.4,
    reviews: 900,
    description: "A budget-friendly phone with a 200MP camera and 120Hz AMOLED display.",
    prices: [
      { store: "Mi Store", price: 499, link: "https://www.mi.com" },
      { store: "Amazon", price: 489, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 499, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.67-inch AMOLED",
      Processor: "MediaTek Dimensity 1200",
      Camera: "200MP Triple",
      Battery: "5000 mAh"
    }
  },
  {
    id: 56,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    rating: 4.7,
    reviews: 1500,
    description: "A flagship phone with Leica optics and Snapdragon 8 Gen 3 processor.",
    prices: [
      { store: "Mi Store", price: 1099, link: "https://www.mi.com" },
      { store: "Amazon", price: 1079, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 1099, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.73-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Camera: "50MP Triple",
      Battery: "4820 mAh"
    }
  },
  {
    id: 57,
    name: "Asus ROG Phone 8",
    brand: "Asus",
    rating: 4.6,
    reviews: 1100,
    description: "A gaming phone with a 165Hz display and Snapdragon 8 Gen 3 processor.",
    prices: [
      { store: "Asus Store", price: 1099, link: "https://www.asus.com" },
      { store: "Amazon", price: 1079, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 1099, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.78-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Camera: "50MP Triple",
      Battery: "6000 mAh"
    }
  },
  {
    id: 58,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    rating: 4.8,
    reviews: 2000,
    description: "A premium Android phone with a 200MP camera, Snapdragon 8 Gen 3, and S Pen support.",
    prices: [
      { store: "Samsung", price: 1299, link: "https://www.samsung.com" },
      { store: "Amazon", price: 1279, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 1299, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.8-inch Dynamic AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Camera: "200MP Quad",
      Battery: "5000 mAh"
    }
  },
  {
    id: 59,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    rating: 4.7,
    reviews: 1600,
    description: "Google's flagship phone with Tensor G4 chip and advanced AI features.",
    prices: [
      { store: "Google Store", price: 1099, link: "https://store.google.com" },
      { store: "Amazon", price: 1079, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 1099, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.7-inch OLED",
      Processor: "Tensor G4",
      Camera: "50MP Triple",
      Battery: "5050 mAh"
    }
  },
  {
    id: 60,
    name: "OnePlus 12",
    brand: "OnePlus",
    rating: 4.6,
    reviews: 1300,
    description: "A flagship phone with Hasselblad camera and Snapdragon 8 Gen 3 processor.",
    prices: [
      { store: "OnePlus Store", price: 899, link: "https://www.oneplus.com" },
      { store: "Amazon", price: 879, link: "https://www.amazon.com" },
      { store: "Flipkart", price: 899, link: "https://www.flipkart.com" }
    ],
    specifications: {
      Screen: "6.7-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Camera: "50MP Triple",
      Battery: "5000 mAh"
    }
  },

    
  ]
};

module.exports = phoneData;