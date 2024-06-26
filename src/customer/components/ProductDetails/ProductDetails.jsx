import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import ProductReviewCard from "./ProductReviewCard";
import { ProducReviewData } from "./ProductReviewData";
import ProductRatings from "./ProductRatings";
import { newArrivals } from "../../../Data/newArrivals";
import { NewArrivalsCard } from "../HomeSectionCard/NewArrivalsCard";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../Redux/Customers/Review/Action";

const product = {
  name: "Dress",
  price: "$192",
  href: "/",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://raw.githubusercontent.com/kunal-tajne/algostruck/main/1.png",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://raw.githubusercontent.com/kunal-tajne/algostruck/main/4.png",
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: "https://raw.githubusercontent.com/kunal-tajne/algostruck/main/3.png",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://raw.githubusercontent.com/kunal-tajne/algostruck/main/2.png",
      alt: "Model wearing plain black basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: false },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    "Content + Care : Shell 1: 44% polyester, 37% cotton, 12% rayon, 5% nylon, 2% other fibers. Shell 2: 64% polyester, 27% cotton, 5% nylon, 4% other fibers Lining: 100% polyester Hand wash cold",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [activeImage, setActiveImage] = useState(null);
  const { customersProduct } = useSelector((store) => store);
  const ratingValue = Math.random() * 2 + 3;

  const handleAddToCart = () => {
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: Number(productId), jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
  }, [productId]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <div className="flex items-center">
              <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {customersProduct.product?.category?.parentCategory?.parentCategory?.name}
              </a>
            </li>
              <li>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  ></a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {customersProduct.product?.category?.parentCategory?.name}
              </a>
            </li>
              <li>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  ></a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600 uppercase"
              >
                {customersProduct.product?.category?.name}
              </a>
            </li>
            </div>

           
          </ol>
        </nav>
        <section className="grid lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-2-[30rem] max-h-[35rem]">
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap justify-center space-x-5">
              {product.images.map((currImage) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={currImage.src}
                    alt={currImage.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-2xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg font-bold tracking-tight text-gray-900 lg:text-3xl sm:text-3xl underline mb-2">
                {customersProduct.product?.brand}
              </h1>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 lg:text-2xl sm:text-3xl opacity-85">
                {customersProduct.product?.title}
              </h2>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-2 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="text-2xl  text-gray-900">
                  ${customersProduct.product?.discountedPrice}
                </p>
                <p className="text-2xl line-through tracking-tight text-gray-900">
                  {customersProduct.product?.price}
                </p>
                <p className="text-green-600">
                  {customersProduct.product?.discountPercent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="items-center">
                <div className="mt-3 flex items-center space-x-2">
                  <Rating
                    defaultValue={ratingValue}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-50 text-sm">{customersProduct.product?.price + 258}+ Ratings</p>
                </div>
                <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {Math.floor((customersProduct.product?.price + 258) * 0.6)} Reviews
                </p>
              </div>

              <div className="mt-5">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-2">
                  <p className=" text-gray-900 text-xl font-light">
                  {customersProduct.product?.description}
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                    
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {customersProduct.product?.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.quantity}
                          className={({ active }) =>
                            classNames(
                              size.quantity
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.quantity ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="mt-6 flex w-60 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <ShoppingBagRoundedIcon className="mr-2" />
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating and Reviews */}
        <section className="p-5">
          <h1 className=" font-semibold items-center text-lg p-4 text-center underline">
            All Ratings and Reviews
          </h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <h1 className="text-xl font-semibold pb-1 text-center">
                  Product Reviews
                </h1>
                {ProducReviewData.map((currReview) => (
                  <ProductReviewCard review={currReview} />
                ))}
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1 text-center">
                  Product Ratings
                </h1>
                <div className="flex items-center space-x-5">
                  <Rating value={ratingValue} precision={0.5} read-only />
                  <p className=" opacity-80"> {customersProduct.product?.ratings}  Ratings</p>
                </div>
                <ProductRatings
                  rating={"Excellent"}
                  value={Math.random() * 21 + 60}
                  color={"success"}
                />
                <ProductRatings
                  rating={"Very Good"}
                  value={Math.random() * 21 + 75}
                  color={"success"}
                />
                <ProductRatings
                  rating={"Good"}
                  value={Math.random() * 21 + 30}
                  color={"secondary"}
                />
                <ProductRatings
                  rating={"Average"}
                  value={Math.random() * 21 + 10}
                  color={"warning"}
                />
                <ProductRatings rating={"Poor"} value={Math.random() * 21 + 5} color={"error"} />
              </Grid>
            </Grid>
          </div>
        </section>

        {/*Similar Products*/}

        <section className="p-2">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="flex flex-wrap p-5 space-y-5 cursor-pointer">
            {newArrivals.map((item) => (
              <NewArrivalsCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
