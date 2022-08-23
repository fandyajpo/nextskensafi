import fetchJson from "lib/fetchJson";

const searchInCtx = (nameKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
};

const sendMsg = async (uid, sending, msg, phone, otp) => {
  const body = {
    type: "node",
    uri: "check_wa",
    uid: uid,
    sending: sending,
    msg: msg,
    dst: phone,
    otp: otp,
  };
  try {
    const resx = await fetchJson(`${process.env.NODE_URL}send_msg`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return resx.status;
  } catch (error) {
    return false;
  }
};

const checkWa = async (phone) => {
  try {
    const resx = await fetchJson(`${process.env.NODE_URL}check_wa`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "node", uri: "check_wa", phone: phone }),
    });
    return resx.status;
  } catch (error) {
    return false;
  }
};

const checkerToken = async (user) => {
  var data, result;

  try {
    let resx = await fetchJson(`${process.env.SERVICE_URL}def/checker`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + user.access_token,
      },
    });
    data = { status: "ok" };
  } catch (error) {
    data = { error: error.data };
  }

  if (data.error) {
    if (data.error === "blocked") {
      data = { error: "blocked" };
    } else {
      try {
        let refreshToken = await fetchJson(
          `${process.env.SERVICE_URL}refresh`,
          {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token: user.refresh_token }),
          }
        );

        data = {
          status: "refresh",
          access_token: refreshToken.access_token,
          refresh_token: refreshToken.refresh_token,
        };
      } catch (error) {
        data = { error: error.data };
      }
    }
  }

  return data;
};

const randomOtp = async (len) => {
  let result = await Math.floor(Math.random() * Math.pow(10, len));
  return result.toString().length < len ? await randomOtp(len) : result;
};

const redirect = (to) => {
  return {
    redirect: {
      permanent: false,
      destination: to,
    },
    props: {},
  };
};

const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};

const scroll = () => ({ behavior: "smooth", block: "start" });

const showKeyPadBoard = (globalAct, r) => {
  if (r === "hide") {
    globalAct.setIsShowKeyBoard(false);
    globalAct.setIsShowKeyPad(false);
    return;
  }
  if (r === "pad") {
    globalAct.setIsShowKeyBoard(false);
    globalAct.setIsShowKeyPad(true);
    return;
  }
  globalAct.setIsShowKeyPad(false);
  globalAct.setIsShowKeyBoard(true);
};

const convertToRupiahs = (num) => {
  let angka = num > 0 ? num : 0;
  let rupiah = "";
  let angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("");
};

const convertToRupiah = (num) => {
  let angka = num > 0 ? num : 0;
  let rupiah = "";
  let angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};

const convertImage = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <linearGradient id="g">
    <stop stop-color="#333" offset="20%" />
    <stop stop-color="#222" offset="50%" />
    <stop stop-color="#333" offset="70%" />
  </linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#333" />
<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const genArr = (cnt) =>
  Array.from({ length: cnt }, () => Math.floor(Math.random() * 100));

const retObject = (obj) => {
  return {
    props: obj,
  };
};

module.exports = {
  retObject,
  genArr,
  toBase64,
  convertImage,
  convertToRupiahs,
  convertToRupiah,
  showKeyPadBoard,
  scroll,
  searchInCtx,
  cipher,
  decipher,
  randomOtp,
  sendMsg,
  checkWa,
  checkerToken,
  redirect,
};
