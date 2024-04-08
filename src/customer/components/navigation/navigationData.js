const navigation = {
    categories: [
      {
        id: "women",
        name: "For Her",
        featured: [
          {
            name: "New Arrivals",
            href: "/new-arrivals",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "/basic-tees",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Dresses",id:"dresses", href: "/dresses" },
              { name: "Denim",id:"denim", href: "/denim" },
              { name: "T-Shirts",id:"t-shirts", href: "/t-shirts" },
              { name: "Activewear",id:"activewear", href: "/activewear" },
              { name: "Browse All",id:"browse-all", href: "/browse-all" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", id:"watches", href: "/watches"},
              { name: "Wallets",id:"wallets", href: "/wallets"},
              { name: "Bags", id:"bags", href: "/bags"},
              { name: "Sunglasses", id:"sunglasses", href: "/sunglasses"},
              { name: "Hats", id:"hats", href: "/hats"},
              { name: "Belts", id:"belts", href: "/belts"},
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Gucci", id:"gucci", href: "/gucci"},
              { name: "Lacausa", id:"lacausa", href: "/lacausa"},
              { name: "Forever 21",id:"forever-21", href: "/forever-21"},
              { name: "Mercer & Sons", id:"mercer-and-sons", href: "/mercer-and-sons"},
              { name: "Harvest and Mill", id:"harvest-and-mill", href: "/harvest-and-mill"},
            ],
          },
        ],
      },
      {
        id: "men",
        name: "For Him",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "women/clothing/tops" },
              { name: "Pants", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  };

  export default navigation;