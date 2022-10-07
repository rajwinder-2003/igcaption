import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import SlugHeader from "../../Components/SlugHeader";
import {
  db,
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
} from "../../firebase";

const Slug = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [hindiSubcaption, setHindiSubcaption] = useState(props.HindiSubCaption);

  return (
    <>
      <Head>
        <title>IG-Best {slug} Caption in Hindi</title>
        <meta
          name="description"
          content="Free Instagram Caption in English Caption, Punjabi Caption, Hindi Caption"
        />
        <meta
          name="keywords"
          content="Love Status in Hindi, Love Caption in Hindi , Attitude Status in Hindi, Attitude Caption in Hindi, Sad Status in Hindi, Sad Caption in Hindi, Motivational Status in Hindi, Motivational Caption in Hindi, Breakup Status in Hindi, Breakup Caption in Hindi, Alone Status in Hindi, Alone Caption in Hindi, Friends Status in Hindi, Friends Caption in Hindi, Funny Status in Hindi, Funny Caption in Hindi, Instagram Caption, Caption, Status, Whatsapp status, Whatsapp caption"
        />
        <meta name="author" content="Rajwinder Singh" />
        <link rel="icon" href="/android-chrome-512x512.png" />
      </Head>

      <div className="bg-[#e6e6e6] pb-10">
        <SlugHeader
          title={`${slug} caption`}
          subtitle={`Best ${slug} caption in Hindi`}
          slug="/hindi-caption"
        />
        <div className="px-6 lg:px-5 pt-10 pb-6 lg:mx-10 shadow-2xl rounded-xl lg:-mt-10 bg-[#e6e6e6] lg:space-x-4">
          <div className="space-y-4">
            {hindiSubcaption &&
              hindiSubcaption.map((caption) => {
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
  const { slug } = context.query;
  const data = collection(db, "caption");
  const qec = query(
    data,
    where("category", "==", "Hindi"),
    where("subCategory", "==", `${slug}`),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const snapShot = await getDocs(qec);
  const HindiSubCaption = snapShot.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
    };
  });

  return {
    props: { HindiSubCaption }, // will be passed to the page component as props
  };
}

export default Slug;
