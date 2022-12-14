import React from "react";

import FormLogin from "components/Login/FormLogin";
import IsLogin from "components/Login/IsLogin";
import { BotBack, LeftBack, RightBack, TopBack } from "lib/listSvg";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  var user = await req.session;

  if (user && user.access_token) {
    // console.log("user", user);
    // const uid = await JSON.parse(atob(user.access_token.split('.')[1]));
    // const checkUids = await checkUid(uid.user_id);
    //
    // if (checkUids.length < 1 || checkUids[0].blocked) {
    //   await req.session.destroy();
    //   return redirect("/")
    // }
    //
    // const validationToken = await checkerToken( user )
    // if ( validationToken.hasOwnProperty('error') ) {
    //   await req.session.destroy();
    //   return redirect("/")
    // }
    //
    // if ( validationToken.hasOwnProperty('status') && validationToken.status === "refresh" ) {
    //   user = { isLoggedIn: true, access_token: validationToken.access_token, refresh_token: validationToken.refresh_token };
    //   req.session.user = user;
    //   await req.session.save();
    // }
    //
    // return redirect("/profile")
  }

  return {
    props: {},
  };
},
sessionOptions);

export default function Login(props) {
  return (
    <>
      <div className="absolute top-0 z-10">
        <TopBack />
      </div>
      <div className="absolute left-0 top-0 z-10">
        <LeftBack />
      </div>
      <div className="absolute right-0 top-0 z-10">
        <RightBack />
      </div>
      <div className="absolute bottom-0 z-10">
        <BotBack />
      </div>
      <div className="w-screen h-screen flex flex-row justify-center items-center gap-4 bg-darkBlue relative">
        {props?.isLogin ? <IsLogin /> : <FormLogin />}
      </div>
    </>
  );
}
