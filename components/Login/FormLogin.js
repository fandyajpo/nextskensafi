import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { GlobalContext, poster, logGer } from "lib/ctx";
import { Loading } from "lib/listSvg";
import Router from "next/router";
import { Bg } from "lib/listSvg";
const env = process.env.NODE_ENV;

import imHome from "public/animation/home.gif";

const LoginGif = React.memo(() => {
  return (
    <Image
      objectFit="cover"
      layout={"responsive"}
      height={0}
      width={0}
      alt={"home"}
      unoptimized={true}
      src={"/animation/home.webp"}
      className="w-11/12 lg:w-full z-10"
    />
  );
});
LoginGif.displayName = "LoginGif";

const FormLogin = React.memo(() => {
  const { state, fnr } = React.useContext(GlobalContext);

  const [errMsg, setErrMsg] = React.useState("");
  const sErrMsg = React.useCallback((r) => {
    setErrMsg((e) => r);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      uri: "back_login",
      username: "",
      password: "",
    },
  });

  const onSubmit = React.useCallback(
    async (data) => {
      const rr = await poster(["api/post", data, { timeout: 10000 }]);

      if (rr.status) {
        fnr({ type: "profile", payload: rr.data });
        switch (rr.data.role) {
          case "murid":
            Router.replace("murid");
            break;
          case "guru":
            Router.replace("guru");
            break;
          case "pegawai":
            Router.replace("pegawai");
            break;
          case "admin":
            Router.replace("admin");
            break;
          default:
            Router.replace("/");
        }
      } else {
        sErrMsg(rr.data);
      }
    },
    [sErrMsg]
  );

  return (
    <>
      <div
        className={`${
          !isSubmitting && "hidden"
        } w-full h-full flex items-center justify-center absolute z-20`}
      >
        <Loading />
      </div>

      <div className="w-full h-screen flex md:flex-col-reverse lg:flex-row items-center flex-col-reverse">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/4 flex items-center justify-center"
        >
          <div className="h-full select-none flex items-center jusify-center">
            <div className="w-full h-full p-3">
              <div className="pb-3">
                <p className="text-white font-bold text-md lg:text-4xl md:text-xl">
                  Login
                </p>
                <p className="text-md  text-transparent bg-clip-text bg-white font-bold">
                  Masukan akunmu untuk memulai aktivitas hari ini.{" "}
                  <span>Semangat!</span>
                </p>
              </div>
              <div className="w-full h-auto relative mb-4">
                <p className="text-sm text-white font-bold">Username</p>
                {errors.username && (
                  <span className="text-xs text-red-500">Input username</span>
                )}
                <input
                  {...register("username", { required: true })}
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Username"
                  disabled={isSubmitting ? "disabled" : ""}
                />
              </div>

              <div className="w-full h-auto relative mb-4">
                <p className="text-sm text-white font-bold">Password</p>
                {errors.password && (
                  <span className="text-xs text-red-500">Input password</span>
                )}
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Password"
                  disabled={isSubmitting ? "disabled" : ""}
                />
                {errMsg.length > 0 && (
                  <span className="text-xs text-red-500">{errMsg}</span>
                )}
              </div>

              <div className="w-full h-12 flex justify-between gap-2">
                <div className="w-full h-full">
                  <button
                    type="submit"
                    // disabled={isSubmitting ? "disabled" : ""}
                    className="w-full h-10 bg-blue-500 rounded-md border-2 border-blue-400 overflow-hidden"
                  >
                    <p className="text-white font-bold"> Login</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="w-3/4 md:w-2/4 ">
          <LoginGif />
        </div>
      </div>
    </>
  );
});

export default FormLogin;
FormLogin.displayName = "FormLogin";
