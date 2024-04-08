import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center m-5 border-black">
      <div>
        <h1 className="font-bold text-xl">
          Welcome to ShopStream - Your One Stop Shopping Destination
        </h1>
        <p className="mt-5 ">
          ShopStream is an ecommerce website developed by{" "}
          <a
            className="underline font-bold text-blue-700"
            href="https://www.linkedin.com/feed/"
          >
            Kunal Tajne
          </a>{" "}
          as a personal portfolio project to showcase his full-stack web
          development skills. Leveraging the power of React and Spring Boot,
          ShopStream provides users a smooth, seamless shopping experience.{" "}
        </p>

        <h1 className="font-bold text-xl mt-5">
        Our Vision 
        </h1>

        <p className="mt-5">
          At ShopStream, our vision is to make online shopping fun,
          fast and hassle-free. We have curated a wide range of products from
          different categories to suit all needs and tastes. Browsing through
          our catalog and checking out will be a breeze on any device with our
          responsive design.
        </p>

        <h1 className="font-bold text-xl mt-5">
        Technology Behind ShopStream  
        </h1>

        <p className="mt-5">
        ShopStream was built using modern web
        technologies like <b>React</b> and <b>Spring Boot</b> to ensure high performance and
        reliability. React powers the frontend for lightning quick rendering of
        product catalog and individual item pages. Spring Boot powers the robust
        backend <u>API</u> serving dynamic product data and checkout functionality. A
        <b> MySQL</b> database manages millions of products and user data with ease.
        Programmatic logic for features like <u>filtering</u>, <u>cart management</u>, <u>payments</u> and <u>order processing</u> is handled by the full-stack framework. 
        </p>

        <h1 className="font-bold text-xl mt-5">
        Approach  
        </h1>
        <p className="mt-5">Our focused approach has streamlined development and optimized the user experience.
        Getting Started With ShopStream <a className=" text-blue-700" href="/">Signing up</a> on ShopStream is free and
        simple. Browse through our products to find what you need hassle-free.
        You can search, filter, and sort items in multiple ways. Add items to
        your cart and checkout in just a few clicks. We accept all major payment
        methods. Your order status and all order details are tracked in your
        profile.</p>

        <h1 className="font-bold text-xl mt-5">
        Stay Connected  
        </h1>

        <p className="mt-5">Join our Social pages for the latest
        deals and product launches. Reach out to our support team if you need
        any assistance. We hope you enjoy shopping at ShopStream! Let us know
        what you think and how we can make improvements. Happy shopping!</p>
       
      </div>
    </div>
  );
};

export default AboutUs;
