import Head from "next/head";
import { useState } from "react";
import HeaderComponet from "../Components/HeaderComponet";
import {
  db,
  collection,
  getDocs,
  orderBy,
  where,
  query,
  limit,
} from "../firebase";

const Home = (props) => {
  const [englishCaption, setEnglishCaption] = useState(props.EnglishCaption);
  const [hindiCaption, setHindiCaption] = useState(props.HindiCaption);
  const [punjabiCaption, setPunjabiCaption] = useState(props.PunjabiCaption);

  return (
    <div>
      <Head>
        <title>IG-Caption</title>
        <meta
          name="description"
          content="Free Instagram Caption in English Caption, Punjabi Caption, Hindi Caption"
        />
        <meta
          name="keywords"
          content="Instagram Caption, Caption, Status, Whatsapp status, Whatsapp caption, Status in english, Status in hindi, Status in Punjabi"
        />
        <meta name="author" content="Rajwinder Singh" />
        <link rel="icon" href="/android-chrome-512x512.png" />
      </Head>

      <main className="bg-[#e6e6e6] pb-10">
        <HeaderComponet />
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

        <div className="px-6 lg:px-5 pt-10 pb-6 lg:mx-10 shadow-2xl rounded-xl mt-8 bg-[#e6e6e6] lg:space-x-4">
          <div className="space-y-4">
            {hindiCaption &&
              hindiCaption.map((caption) => {
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

        <div className="px-6 lg:px-5 pt-10 pb-6 lg:mx-10 shadow-2xl rounded-xl mt-8 bg-[#e6e6e6] lg:space-x-4">
          <div className="space-y-4">
            {punjabiCaption &&
              punjabiCaption.map((caption) => {
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
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const data = collection(db, "caption");
  const qe = query(
    data,
    where("category", "==", "English"),
    orderBy("createdAt", "desc"),
    limit(4)
  );
  const snapShotE = await getDocs(qe);
  const EnglishCaption = snapShotE.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
    };
  });

  const qh = query(
    data,
    where("category", "==", "Hindi"),
    orderBy("createdAt", "desc"),
    limit(4)
  );
  const snapShotH = await getDocs(qh);
  const HindiCaption = snapShotH.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
    };
  });

  const qp = query(
    data,
    where("category", "==", "Punjabi"),
    orderBy("createdAt", "desc"),
    limit(4)
  );
  const snapShotP = await getDocs(qp);
  const PunjabiCaption = snapShotP.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
    };
  });

  return {
    props: { EnglishCaption, HindiCaption, PunjabiCaption }, // will be passed to the page component as props
  };
}
