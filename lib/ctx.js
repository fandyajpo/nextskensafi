import React from "react";
import axios from "axios";

export const nextClient = axios.create({
  baseURL: "http://192.168.254.60:9026/",
  timeout: 1500,
  headers: { "Content-Type": "application/json" },
});

export const goClient = axios.create({
  baseURL: "http://127.0.0.1:3001/",
  timeout: 1500,
  headers: { "Content-Type": "application/json" },
});

export const skensaApiClient = axios.create({
  baseURL: "https://belajar.smkn1denpasar.sch.id/",
  timeout: 1500,
  headers: { "Content-Type": "application/json" },
});

export const getterSkensa = async (r) => {
  try {
    const rr = await skensaApiClient.get(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

export const posterGo = async (r) => {
  try {
    const rr = await goClient.post(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

export const poster = async (r) => {
  try {
    const rr = await nextClient.post(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: e };
  }
};

export const getter = async (r) => {
  r[1].headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  try {
    const rr = await nextClient.get(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

export const patcher = async (r) => {
  try {
    const rr = await nextClient.patch(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

export const putter = async (r) => {
  try {
    const rr = await nextClient.put(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

export const del = async (r) => {
  r[1].headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  console.log(r);

  try {
    const rr = await nextClient.delete(...r);
    return { status: true, data: rr.data };
  } catch (e) {
    console.log("e", e);
    if (e?.response?.data?.message) {
      return { status: false, data: e.response.data.message };
    }
    return { status: false, data: "Please retry." };
  }
};

// FIX //
export const logGer = (vals) => {
  console.log("logGer", JSON.stringify(vals, undefined, 2));
};

const initialState = {
  errMsg: "",
  screen: "",
  profile: {},
  jurusan: {},
  kelas: {},
  mapel: {},
  pic: {},
  role: {},
  listKelas: {},
  listJurusan: {},
  listTahunAjaran: {},
  listRole: {},
  listUser: {},
  listPengumuman: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "listPengumuman":
      return {
        ...state,
        listPengumuman: action.payload,
      };
    case "listUser":
      return {
        ...state,
        listUser: action.payload,
      };
    case "listRole":
      return {
        ...state,
        listRole: action.payload,
      };
    case "listTahunAjaran":
      return {
        ...state,
        listTahunAjaran: action.payload,
      };
    case "listJurusan":
      return {
        ...state,
        listJurusan: action.payload,
      };
    case "listKelas":
      return {
        ...state,
        listKelas: action.payload,
      };
    case "profile":
      return {
        ...state,
        profile: action.payload,
      };
    case "errMsg":
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      throw new Error();
  }
};

export const GlobalContext = React.createContext({});
export const GlobalProvider = ({ children }) => {
  const [state, fnr] = React.useReducer(reducer, initialState);

  const contextValue = {
    fnr,
    state,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
