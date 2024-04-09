
const importAll = (r) => r.keys().map(r);

const imagesContext = require.context("./newArrivalsData", false, /\.(jpg|jpeg|png|svg|webp)$/);

const images = importAll(imagesContext);

export const newArrivals=[
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival1.jpeg",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Forever 21",
        "title": "Sequin Denim Cami Mini Dress Knee length",
        "color": "Starlight Blue",
        "discountedPrice": 23.99,
        "price": 39.99,
        "discountPercent": 40,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Women",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "women_casual",
          "description":"Crafted from non-stretch denim, this cami dress features allover sequin embellishments, a straight-cut neckline and back, adjustable straps, exposed zippered back closure, mini length, and A-line silhouette."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival2.webp",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Mercer and Sons",
        "title": "Mineral Wash Lounge Outfit Round Neck",
        "color": "Yellow",
        "discountedPrice": 799,
        "price": 2499,
        "discountPercent": 68,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Men",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "t-shirt",
          "description":"A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival3.webp",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Lacausa",
        "title": "Plus Size Metallic Jacquard Maxi Dress",
        "color": "TURQUOISE/MULTI",
        "discountedPrice": 24.99,
        "price": 38,
        "discountPercent": 73,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Women",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "women_casual",
          "description":"A jacquard maxi dress featuring an allover metallic burnout pattern, round neckline, open back, adjustable cami straps that form a crisscross back design, and column silhouette."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival4.png",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "GUCCI",
        "title": "GG Flocked Print Cotton Polo Top",
        "color": "White",
        "discountedPrice": 1500,
        "price": 2500,
        "discountPercent": 60,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Men",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "mens_casual",
          "description":"The men's Cruise 2024 collection presents a contemporary silhouette. Made from a cotton jersey with an allover GG flocked print, this relaxed polo top brings a contemporary touch to the everyday."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival5.jpeg",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Harvest and Mill",
        "title": "Double-Breasted Peak Lapel Blazer",
        "color": "Grey",
        "discountedPrice": 44.99,
        "price": 50,
        "discountPercent": 10,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Women",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "women_casual",
          "description":"A crepe blazer featuring peak lapels, a double-breasted construction, front welt pockets, long sleeves, and back split hem."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival6.webp",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Esby",
        "title": "Denim Raglan-Sleeve Bomber Jacket",
        "color": "Pink",
        "discountedPrice": 499,
        "price": 1499,
        "discountPercent": 66,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Women",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "women_casual",
          "description":"Crafted from non-stretch denim, this bomber jacket features a flat collar, zip-up front closure, raglan long sleeves, slanted front pockets, ribbed trim, and semi-cropped hem."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival7.jpeg",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Mission Workshop",
        "title": "Distressed Denim Trucker Jacket",
        "color": "Medium Denim",
        "discountedPrice": 277,
        "price": 999,
        "discountPercent": 72,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "women",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "women_casual",
          "description":"Crafted from non-stretch denim, this trucker jacket features distressing, seam detailing, a basic collar, button-front closures, buttoned chest flap pockets, and long sleeves with buttoned cuffs."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival8.webp",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Rogue Territory",
        "title": "Long-Sleeve Cargo Shacket Exclusive",
        "color": "Blue",
        "discountedPrice": 765,
        "price": 1049,
        "discountPercent": 27,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Men",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "mens_casual",
          "description":"A woven shacket featuring a basic collar, button-front closures, buttoned front cargo flap pockets, and long sleeves with buttoned cuffs."
    },
    {
        "imageUrl": "https://raw.githubusercontent.com/kunal-tajne/ShopStream/main/src/Data/newArrivalsData/NewArrival9.jpeg",
        "productLink":"https://shopstream-by-kunaltajne.vercel.app/product/1",
        "brand": "Schott NYC",
        "title": "Geo Print Zip-Up Polo Shirt Loose Fit",
        "color": "Black/Deep Taupe",
        "discountedPrice": 499,
        "price": 1599,
        "discountPercent": 68,
        "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Men",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "mens_kurta",
          "description":"A knit polo shirt featuring an allover geometric print, basic collar, zip-up front closure, and short sleeves."
    }
]