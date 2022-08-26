import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext, poster } from "lib/ctx";

export const ChildMenu = React.memo(({ q, a, r, l }) => (
  <Link href={q}>
    <button
      className={`w-full h-10 flex items-center border-b border-gray-300 pl-8 text-xs ${
        r === q ? "text-blue-700" : "text-gray-700"
      } font-bold`}
    >
      {a}
    </button>
  </Link>
));

export const Item = React.memo(({ q, a, r }) => {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden border-b-2 border-white">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        defaultChecked={r === router.asPath ? true : false}
      />
      <div className="h-12 w-full pl-5 flex items-center text-gray-600">
        {q}
      </div>
      <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-72">
        {a.map((item, key) => (
          <ChildMenu q={item.link} a={item.name} r={r} key={key} />
        ))}
      </div>
    </div>
  );
});

export const AdminNav = ({ menus, children }) => {
  const { state } = useContext(GlobalContext);

  const router = useRouter();
  const { query } = router;

  const logouts = async () => {
    await poster(["api/prot/post", { uri: "def/logout" }, { timeout: 1500 }]);
    router.replace("/login");
  };

  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      <div className="w-64 h-full bg-gray-50 flex flex-col select-none ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-52 h-52 p-4">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzfqihfnf/image/upload/v1649379859/nextjs-boilerplate-logo_xdf6ed.png"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {menus.map((item, key) => (
            <Item q={item.name} a={item.menu} key={key} r={router.asPath} />
          ))}
        </div>
      </div>
      <div className="w-screen h-full relative flex-row overflow-hidden border">
        <div className="w-full h-20 p-6 absolute top-0 bg-darkBlue border-b shadow flex justify-between">
          <div className="w-full h-auto flex items-center text-sm capitalize">
            <Link href="/admin/dashboard">
              <svg
                className="w-6 h-6 stroke-white fill-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </Link>
            &nbsp;•
          </div>
          <div className="w-full h-full flex items-center justify-end gap-2 text-xs font-semibold">
            {/* {state.nama} */}
            <div
              onClick={logouts}
              className="w-6 h-6 rounded-full bg-transparent  flex justify-center items-center border-2 border-white shadow"
            >
              <svg
                className="w-4 h-4 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="w-full h-full pt-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const GuruNav = ({ menus, children }) => {
  const { state } = useContext(GlobalContext);

  const router = useRouter();
  const { query } = router;

  const logouts = React.useCallback(async () => {
    await poster(["api/prot/post", { uri: "def/logout" }, { timeout: 1500 }]);
    router.replace("/login");
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-64 h-full bg-gray-50 flex flex-col select-none ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-52 h-52 p-4">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzfqihfnf/image/upload/v1649379859/nextjs-boilerplate-logo_xdf6ed.png"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {menus.map((item, key) => (
            <Item q={item.name} a={item.menu} key={key} r={router.asPath} />
          ))}
        </div>
      </div>
      <div className="w-screen h-full relative flex-row overflow-hidden">
        <div className="w-full h-20 p-6 absolute top-0 bg-darkBlue shadow flex justify-between">
          <div className="w-full h-auto flex items-center text-sm capitalize">
            <Link href="/admin/dashboard">
              <svg
                className="w-6 h-6 stroke-white fill-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </Link>
            <p className="text-white text-md">
              &nbsp;{router.route.split("/").join(" • ")}
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-end gap-2 text-xs font-semibold">
            {/* {state.nama} */}
            <div
              // onClick={logouts}
              className="w-6 h-6 rounded-full bg-transparent  flex justify-center items-center border-2 border-white shadow"
            >
              <svg
                className="w-4 h-4 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="w-full h-full pt-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const MuridNav = ({ menus, children }) => {
  const { state } = useContext(GlobalContext);

  const router = useRouter();
  const { query } = router;

  const logouts = async () => {
    await poster(["api/prot/post", { uri: "def/logout" }, { timeout: 1500 }]);
    router.replace("/login");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-64 h-full bg-gray-50 flex flex-col select-none">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-52 h-52 p-4">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzfqihfnf/image/upload/v1649379859/nextjs-boilerplate-logo_xdf6ed.png"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-scroll">
          {menus.map((item, key) => (
            <Item q={item.name} a={item.menu} key={key} r={router.asPath} />
          ))}
        </div>
      </div>
      <div className="w-screen h-full relative">
        <div className="w-full h-20 p-6 absolute top-0 bg-gray-50 border-b shadow flex justify-between">
          <div className="w-full h-auto flex items-center text-sm capitalize">
            <Link href="/murid/dashboard">
              <svg
                className="w-6 h-6 stroke-amber-200 fill-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </Link>
            &nbsp;•
          </div>
          <div className="w-full h-full flex items-center justify-end gap-2 text-xs font-semibold">
            {/* {state.nama} */}
            <div
              // onClick={logouts}
              className="w-6 h-6 rounded-full bg-amber-500  flex justify-center items-center border-2 border-white shadow"
            >
              <svg
                className="w-4 h-4 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full pt-20">{children}</div>
      </div>
    </div>
  );
};

export const PegawaiNav = ({ menus, children }) => {
  const { state } = useContext(GlobalContext);

  const router = useRouter();
  const { query } = router;

  const logouts = async () => {
    await poster(["api/prot/post", { uri: "def/logout" }, { timeout: 1500 }]);
    router.replace("/login");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-64 h-full bg-gray-50 flex flex-col select-none">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-52 h-52 p-4">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzfqihfnf/image/upload/v1649379859/nextjs-boilerplate-logo_xdf6ed.png"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-scroll">
          {menus.map((item, key) => (
            <Item q={item.name} a={item.menu} key={key} r={router.asPath} />
          ))}
        </div>
      </div>
      <div className="w-screen h-full relative">
        <div className="w-full h-20 p-6 absolute top-0 bg-gray-50 border-b shadow flex justify-between">
          <div className="w-full h-auto flex items-center text-sm capitalize">
            <Link href="/pegawai/dashboard">
              <svg
                className="w-6 h-6 stroke-amber-200 fill-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </Link>
            &nbsp;•
          </div>
          <div className="w-full h-full flex items-center justify-end gap-2 text-xs font-semibold">
            {/* {state.nama} */}
            <div
              // onClick={logouts}
              className="w-6 h-6 rounded-full bg-amber-500  flex justify-center items-center border-2 border-white shadow"
            >
              <svg
                className="w-4 h-4 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full pt-20">{children}</div>
      </div>
    </div>
  );
};
