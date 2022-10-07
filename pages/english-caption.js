import Head from "next/head";
import React, { useState } from "react";
import CommonHeader from "../Components/CommonHeader";
import {
  db,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
} from "../firebase";

const EnglishCaption = (props) => {
  const [englishCaption, setEnglishCaption] = useState(props.EnglishCaption);
  return (
    <>
      <Head>
        <title>IG-Instagram-Caption in English</title>
        <meta
          name="description"
          content="Free Instagram Caption in English Caption, Punjabi Caption, Hindi Caption"
        />
        <meta
          name="keywords"
          content="Status in english, Caption in english, Instagram Caption, Caption, Status, Whatsapp status, Whatsapp caption"
        />
        <meta name="author" content="Rajwinder Singh" />
        <link rel="icon" href="/android-chrome-512x512.png" />
      </Head>

      <div className="bg-[#e6e6e6] pb-10">
        <CommonHeader
          title="English Caption"
          subtitle="Best collection of English Caption in Difrent category"
          slug="english-caption"
        />
        <div className="px-6 lg:px-5 pt-10 pb-6 lg:mx-10 shadow-2xl rounded-xl lg:-mt-10 bg-[#e6e6e6] lg:space-x-4">
          <div className="space-y-4">
            {englishCaption &&
              englishCaption.map((caption) => {
                return (
                  <>
                    <div
                      key={caption.id}
                      className="bg-white shadow-2xl rounded-xl w-full py-4"
                    >
                      <p className="text-gray-600 px-8 pt-3">
                        {caption.caption}
                      </p>
                      <div className="mt-8  mx-8">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(caption.caption);
                            alert("Copied the text: " + caption.caption);
                          }}
                          className="text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-3xl hover:scale-90"
                        >
                          COPY
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = collection(db, "caption");
  const qe = query(
    data,
    where("category", "==", "English"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const snapShot = await getDocs(qe);
  const EnglishCaption = snapShot.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
    };
  });

  return {
    props: { EnglishCaption }, // will be passed to the page component as props
  };
}

export default EnglishCaption;
