import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center m-5 border-black">
      <div>
        <h1 className="font-bold text-xl">Contact Us</h1>
        <p className="mt-5">
          Reach out to us at{" "}
          <a className="underline font-bold text-blue-700" href="mailto:kunaltajne.contact@gmail.com">
            kunaltajne.contact@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
