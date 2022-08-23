import Image from "next/image";
import Background from "../public/image/img.png";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({req, res}) {

  var user = await req.session;

  if (user && user.access_token) {
    return {
      props:{
        usr: user.username,
        pass: user.password
      },
    };
  }

  return {
    props: {}
  }

},sessionOptions);

const FormLogin = React.memo((props) => {

  const [errMsg, setErrMsg] = React.useState("");
  const sso = React.useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
      const skensaClient = await axios.get(
        `https://belajar.smkn1denpasar.sch.id/login/token.php?service=moodle_mobile_app&username=${data.username}&password=${data.password}`
      );

      if (skensaClient?.data?.token) {
        await Promise.all([
          document.forms['sso']['username'].value = data.username,
          document.forms['sso']['password'].value = data.password
        ])
        sso.current.click()
      } else {
        setErrMsg("aajsd")
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  if (props?.r?.r?.usr) {
    onSubmit({ username: props?.r?.r?.usr, password: props?.r?.r?.pass })
  }

  return (
    <>
    <form
      className='space-y-8'
      onSubmit={handleSubmit(onSubmit)}
    >

      <div>
        <input
          {...register("username", { required: true })}
          placeholder='Nama Pengguna'
          className='w-full border-2 border-gray-300 p-2 lg:p-4 rounded-xl placeholder:text-sm lg:placeholder:text-xl placeholder:text-gray-400'
        />
      </div>
      <div>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder='Kata Sandi'
          className='w-full border-2 border-gray-300 p-2 lg:p-4 rounded-xl placeholder:text-sm lg:placeholder:text-xl placeholder:text-gray-400'
        />
      </div>
      <div>
        <button type="submit" className='px-6 py-2 bg-blue-500 rounded-xl'>
          <p className='text-white font-bold text-md md:text-xl'>Masuk</p>
        </button>
      </div>
    </form>

    <form
      className='hidden'
      id="sso" method="post"
      action="https://belajar.smkn1denpasar.sch.id/login/index.php"
    >
      <input className="" name="username" />
      <input className="" name="password" />
      <input ref={sso} type="submit" />
    </form>
    </>
  );
});
FormLogin.displayName = 'FormLogin';

const Cover = React.memo((props) => {

  return (
    <div className='bg-white w-full md:w-5/6 lg:w-2/4 h-auto md:h-auto lg:h-full rounded-none md:rounded-xl lg:rounded-2xl  p-4 md:p-16 space-y-8 shadow-md'>
      <div className='w-full md:w-2/4'>
        <p className='text-2xl font-extrabold text-center md:text-left'>
          Masuk ke LMS SMK NEGERI 1 DENPASAR
        </p>
      </div>
      <FormLogin r={props}/>
      <div>
        <p className='hover:underline text-blue-500'>Lupas Kata sandi ?</p>
      </div>
      <hr />
      <div className='flex flex-row items-center gap-x-4'>
        <div>
          <select className='text-blue-500 hover:text-black'>
            <option>Bahasa Indonesia (id)</option>
            <option>English</option>
          </select>
        </div>
        <div className='w-0.5 h-8 bg-gray-300' />
        <button className='bg-gray-300 px-4 py-2 rounded-xl'>
          <p className='text-gray-600 font-bold'>Cookie info</p>
        </button>
      </div>
    </div>
  );
});
Cover.displayName = 'Cover';

const Support = React.memo(() => {
  return (
    <div className='bg-white p-4 space-y-2 w-full'>
      <div>
        <p className='text-sm text-blue-500'>Hubungi dukungan situs</p>
      </div>
      <hr />
      <div>
        <p>Anda belum masuk</p>
        <p className='text-sm text-blue-500'>Dapatkan aplikasi seluler</p>
      </div>
      <hr />
      <div>
        <p className='text-sm text-orange-500'>Ditenagai oleh moodle</p>
      </div>
    </div>
  );
});
Support.displayName = 'Support';

const Sso = (props) => {
  return (
    <div className='bg-gray-200 w-full h-full'>
      <div className='absolute w-full h-full'>
        <Image src={Background} />
      </div>
      <div className='w-full h-full md:h-screen space-y-4 lg:pt-16 flex items-center justify-center flex-col'>
        <div className='z-40 w-full h-full flex items-center justify-center '>
          <Cover r={props} />
        </div>
        <div className='md:hidden w-full'>
          <Support />
        </div>
      </div>
    </div>
  );
};
Sso.displayName = 'Sso';

export default Sso;
