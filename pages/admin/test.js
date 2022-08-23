import { getLayout } from "components/layout/admin";
import React, { useState } from "react";
import Image from "next/image";
import { listPengumuman } from "lib/arangoDb";
import Resizer from "react-image-file-resizer";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { uploadFile } from "../../lib/imageK";

// export const getServerSideProps = withIronSessionSsr(async function ({
//   req,
//   res,
//   query,
// }) {
//   const [lPengumuman] = await Promise.all([listPengumuman(0, 5)]);
//   return {
//     props: {
//       pengumuman: lPengumuman?.[0] ? lPengumuman[0] : [],
//     },
//   };
// },
// sessionOptions);

const Test = (props) => {
  const imageRef = React.useRef(null);
  const Upload = React.useCallback(() => {
    imageRef?.current?.click();
  }, []);
  const noImage =
    "https://cdn.discordapp.com/attachments/957998627928817684/999209333575393320/unknown.png";

  const [image, setImage] = React.useState(noImage);
  const [isFetch, setIsFetch] = useState(false);

  const handlePost = async () => {
    setIsFetch(true);
    const load = await uploadFile(
      imageRef?.current?.files[0],
      ".webp",
      "photos"
    );
    if (load?.url) {
      console.log(load);
      Promise.all([setIsFetch(false), setImage(noImage)]);
    }
  };

  const handleImage = (event) => {
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        event?.target?.files[0],
        480,
        720,
        "WEBP",
        70,
        0,
        (uri) => {
          resolve(setImage(uri || noImage));
        }
      );
    });
  };

  return (
    <div className="w-full h-screen overflow-y-scroll p-4">
      <input
        className="hidden"
        name="image"
        accept="image/png, image/gif, image/jpeg, image/webp"
        type={"file"}
        ref={imageRef}
        onChange={handleImage}
      />

      <Image layout="intrinsic" height={100} width={100} src={image} />

      <div className="flex flex-row items-center gap-x-2">
        <button
          className="bg-blue-500 w-24 h-8 rounded-md text-white"
          onClick={Upload}
        >
          Choose File
        </button>
        <button
          className="bg-blue-500 w-24 h-8 rounded-md text-white flex items-center justify-center"
          onClick={handlePost}
          disabled={isFetch || image === noImage}
        >
          {isFetch ? (
            <div className="border-l-2 border-white rounded-full w-4 animate-spin h-4"></div>
          ) : (
            "Post"
          )}
        </button>
      </div>
    </div>
  );
};

Test.getLayout = getLayout;
export default Test;

// pengumuman={props.pengumuman}
