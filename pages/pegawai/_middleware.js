import { NextRequest, NextResponse } from "next/server";

const middlewares = async (req, res) => {

  let response = await NextResponse.next();

  let cookieFromRequest = await req.cookies['skensa/sess'];
  let url = req.nextUrl.clone();

  url.pathname = '/login';

  if (!cookieFromRequest){
    return NextResponse.redirect(url);
  }

  try {
    const checks = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/prot/checkrole`,{
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: cookieFromRequest })
    });
    const resCheck = await checks.json();

    if (resCheck.role !== "pegawai"){
      return NextResponse.redirect(url);
    }
    return response;
  } catch (e) {
    console.log(e);
    // return null
    return NextResponse.redirect(url);
  }

}

export default middlewares;
