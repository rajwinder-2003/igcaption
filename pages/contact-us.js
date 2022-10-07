import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>IG-Caption - Contact Us</title>
        <meta name="description" content="Free Status and Caption" />
        <link rel="icon" href="/android-chrome-512x512.png" />
      </Head>

      <div className="w-full flex justify-center">
        <div className="mx-4 lg:mx-20 my-8 rounded-lg px-4 shadow-2xl bg-[#e1e1e1] space-y-8 py-5 mb-[18rem]">
          <h1 className="text-3xl mt-8 text-center">Contact Us</h1>
          <p className="text-center">Email:- singhgagga98@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default contact;
