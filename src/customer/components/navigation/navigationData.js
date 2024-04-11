const navigation = {
    categories: [
      {
        id: "women",
        name: "For Her",
        featured: [
          {
            name: "New Arrivals",
            href: "/",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "/",
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
              { name: "Browse All",id:"browseall", href: "/browseall" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", id:"watches", href: "/watches"},
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
              { name: "H&M", id:"hm", href: "/hm"},
              { name: "Zara", id:"zara", href: "/zara"},
              { name: "Gucci", id:"gucci", href: "/gucci"},
              { name: "Lacausa", id:"lacausa", href: "/lacausa"},
              { name: "Forever 21",id:"forever-21", href: "/forever-21"},
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
            href: "/",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Take a look at these Tees",
            href: "/",
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
              { name: "Pants", id:"pants", href: "/pants"},
              { name: "Sweaters", id:"sweaters", href: "/sweaters"},
              { name: "T-Shirts", id:"tshirts", href: "/tShirts"},
              { name: "Jackets", id:"jackets", href: "/jackets"},
              { name: "Browse All", id:"browse-all", href: "/browse-all"},
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", id:"watches", href: "/watches"},
              { name: "Sunglasses", id:"sunglasses", href: "/sunglasses"},
              { name: "Belts", id:"belts", href: "/belts"},
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Banana Republic", id:"banana-republic", href: "/banana-republic"},
              { name: "Mercer & Sons", id:"mercer-sons", href: "/mercer-sons"},
              { name: "Ralph Lauren",id:"ralph-lauren", href: "/ralph-lauren"},
              { name: "Gucci", id:"gucci", href: "/gucci" },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact", href: "/contact" },
    ],
  };

  export default navigation;