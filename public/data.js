 const phoneWish = [
  { name: 'iPhone 15 Pro Max', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy S23 Ultra', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 8 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus 11', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Xiaomi 13 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Find X6 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo X90 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Realme GT 3', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus ROG Phone 7', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (2)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone 14 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy Z Flip 5', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 7', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus Nord 3', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Xiaomi Redmi K60', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Reno 10 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo V27 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Realme Narzo 60 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus Zenfone 10', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (1)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone SE (2023)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy S24 Ultra', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Find X6 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo X90 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (2)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone 15 Pro Max', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Redmi Note 12 Pro+', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Xiaomi 13 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus ROG Phone 7', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy S24 Ultra', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 8 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus 11', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Reno 10 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo V29 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (1)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone 14 Plus', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Redmi Note 11 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Xiaomi 12T Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus Zenfone 10', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy Z Fold 5', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 7a', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus Nord 3', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Find X6 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo X90 Pro+', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (3)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone 16 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Redmi K70 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus Zenfone 11', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 9', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus 13 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Oppo Find X7 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Vivo X100 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Nothing Phone (3)', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'iPhone 16 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Redmi Note 13 Pro+', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Xiaomi 14 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Asus ROG Phone 8', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Samsung Galaxy S25 Ultra', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'Google Pixel 9 Pro', wishlistCount: Math.floor(Math.random() * 5) + 8 },
  { name: 'OnePlus 12', wishlistCount: Math.floor(Math.random() * 5) + 8 },
];

module.exports = phoneWish;