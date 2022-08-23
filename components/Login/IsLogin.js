import React from "react";
import Link from 'next/link';
import Image from "next/image";

const LoginGif = React.memo(() => {
  return (
    <Image
      objectFit='cover'
      layout={"responsive"}
      height={0}
      width={0}
      alt='Image'
      src='/animation/home.gif'
      className='w-11/12 lg:w-full z-10'
    />
  );
});
LoginGif.displayName = 'LoginGif';

const IsLogin = React.memo(() => {

  const onSubmit = async(data) => {

    try {
      const skensaClient = await axios.get(
        `https://belajar.smkn1denpasar.sch.id/login/token.php?service=moodle_mobile_app&username=${data.username}&password=${data.password}`
      );
      if (skensaClient?.data?.token && skensaClient?.data?.privatetoken) {
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

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='flex items-center justify-center w-full p-2 h-screen'>
        <div className='w-full md:w-2/4 h-auto p-4 backdrop-blur rounded-md overflow-hidden'>
          <div className='flex-col  flex items-center justify-around p-2'>
            <div>
              <p className='text-white'>
                Masuk kembali ke dashboard ?
              </p>
            </div>
            {/*<Logo />*/}
          </div>
          <div className='w-full h-full relative flex justify-center flex-col items-center gap-3'>
            <Link href='/dashboard' passHref>
              <button className='w-full md:w-5/6 lg:md:w-2/4 h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg'>
                <p className='text-base font-bold text-green-500'>
                  Dashboard
                </p>
              </button>
            </Link>
            <button
              onClick={{}}
              className='w-full h-auto md:w-5/6 lg:w-2/4 bg-red-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg'
            >
              <p className='text-base font-bold text-red-500'>
                Leave
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})
IsLogin.displayName = 'IsLogin';
export default IsLogin
