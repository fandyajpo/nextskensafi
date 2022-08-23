import React from "react";
import DataTable from "react-data-table-component";
import { dataKelas } from "./tableList";
import { useForm } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter } from "lib/ctx";
import { Loading, Dropdown } from "lib/listSvg";
import { Modal } from "components/default";

const env = process.env.NODE_ENV;

const exampleData = [
  {
    kompetensi_dasar: "Memahami logika dan algoritma komputer",
    tujuan: [
      "Menggunakan fungsi-fungsi Perintah (Command)",
      "Menggunakan fungsi-fungsi Perintah (Command)",
      "Menggunakan fungsi-fungsi Perintah (Command)",
    ],
    penutup: "Konsep logika dan algoritma",
    kegiatan_pembelajaran:
      "Guru mengunggah materi KD 3.1 Menerapkan logika dan algoritma komputer berupa file dokumen dan bahan ajar dari channel youtube.",
    isi_kegiatan_pembelajaran: "",
    penilaian: "Siswa membuat flowchart",
    isi_penilaian: "",
  },
];

const TableKI = React.memo(({ act, jurusan }) => {
  const { state, fnr } = React.useContext(GlobalContext);

  const handlePageChange = React.useCallback(async (r, s) => {
    const rr = await getter([
      "api/prot/get",
      { params: { uri: "bo/jurusan", offset: (r - 1) * 5, limit: 5 } },
    ]);

    if (rr.status && rr.data?.all) {
      fnr({ type: "listJurusan", payload: rr.data.all });
    }
  }, []);

  React.useEffect(() => {
    fnr({ type: "listJurusan", payload: jurusan });
  }, []);

  React.useEffect(() => {
    if (env == "development") {
      console.log("TableKI rerender");
    }
  });

  return (
    <div className="w-full h-auto">
      <DataTable
        columns={dataKelas(act)}
        // data={state?.listTableKIJurusan?.jurusan}
        data={exampleData}
        responsive={true}
        highlightOnHover={true}
        pagination
        paginationServer
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        paginationTotalRows={
          state?.listJurusan?.total?.[0] ? state.listJurusan.total[0] : 0
        }
        // progressPending={loading}
        // onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
});
TableKI.displayName = "TableKI";

const FormJurusan = (props, ref) => {
  const { state, fnr } = React.useContext(GlobalContext);
  const sbmt = React.useRef();

  const [showCancel, setShowCancel] = React.useState(false);
  const sShowCancel = React.useCallback((r) => {
    setShowCancel((e) => r);
  }, []);

  const [errMsg, setErrMsg] = React.useState("");
  const sErrMsg = React.useCallback((r) => {
    setErrMsg((e) => r);
  }, []);

  const [cfrm, setCfrm] = React.useState(false);
  const sCfrm = React.useCallback((r) => {
    setCfrm((p) => r);
  }, []);

  const {
    getValues,
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      kompetensi_dasar: " ",
      tujuan: "",
      penutup: "",
      kegiatan_pembelajaran: " ",
      isi_kegiatan_pembelajaran: "",
      penilaian: " ",
      isi_penilaian: "",
    },
  });

  const remover = React.useCallback(() => {
    sbmt?.current?.click();
  }, []);

  const onSubmit = React.useCallback(async (data) => {
    let r;
    sErrMsg("");
    data.uri = "bo/config/jurusan";
    data.nama = data.nama.toLowerCase();

    if (data?.nama && !data?.kex && !data?.mode) {
      r = await poster(["api/prot/post", data]);
    }

    if (data?.nama && data?.kex && !data?.mode) {
      r = await patcher(["api/prot/patch", data]);
    }

    if (data?.nama && data?.kex && data?.mode) {
      r = await del([
        "api/prot/delete",
        {
          params: data,
        },
      ]);
    }

    sCfrm(false);

    if (r.status) {
      fnr({
        type: "listJurusan",
        payload: r.data.all,
      });
    } else {
      sErrMsg(r.data);
    }
  }, []);

  React.useImperativeHandle(ref, () => ({
    updateData(s) {
      reset({ nama: `${s[0].nama}`, kex: `${s[0]._key}` });
    },
    removeData(s) {
      Promise.all([
        sCfrm(true),
        reset({ nama: `${s[0].nama}`, kex: `${s[0]._key}`, mode: "remove" }),
      ]);
    },
  }));

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ nama: "" });
    }
  }, [formState, reset]);

  React.useEffect(() => {
    if (env == "development") {
      console.log("FormJurusan rerender");
    }
  });

  return (
    <>
      <Modal
        isShow={cfrm}
        isSubmitting={isSubmitting}
        reset={reset}
        sCfrm={sCfrm}
        title={"Anda yakin akan menghapus data :"}
        desc={`Jurusan ${getValues().nama}`}
        remover={remover}
      />

      <div
        className={`${!isSubmitting && "hidden"} w-full h-full absolute z-10`}
      >
        <Loading />
      </div>

      <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
        <div className="text-sm font-semibold flex flex-col">
          <p className="h-full flex items-end">List KI</p>
          <p className="h-full font-light text-xs">Update / Remove KI.</p>
        </div>
        <div className="text-3xl font-bold text-black flex items-center"></div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center px-4"
      >
        <div className="w-full h-full flex flex-col gap-3">
          <div className="flex flex-row w-full gap-x-3">
            <div className="w-full flex flex-col gap-y-2">
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Pilih Kompetensi Dasar</p>
                  {errors.nama && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <div className="relative">
                  <div className="b absolute right-4 top-5 rotate-180">
                    <Dropdown />
                  </div>
                  <select
                    {...register("kompetensi_dasar", { required: true })}
                    type="text"
                    className="placeholder-gray-400 form-input mt-1 rounded-md border w-full text-gray-700"

                    // disabled={isSubmitting ? "disabled" : ""}
                  >
                    <option value={" "} selected hidden>
                      Pilih Kompetensi Dasar
                    </option>
                    <option>ndqwdwhf</option>
                    <option>dwqdwd</option>
                  </select>
                </div>
              </div>
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Tujuan</p>
                  {errors.tujuan && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <input
                  {...register("tujuan", { required: true })}
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Input tujuan disini"
                  disabled={isSubmitting ? "disabled" : ""}
                />
              </div>
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Penutup</p>
                  {errors.tujuan && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <input
                  {...register("penutup", { required: true })}
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Input penutup disini"
                  disabled={isSubmitting ? "disabled" : ""}
                />
              </div>
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Kegiatan Pembelajaran</p>
                  {errors.nama && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <div className="relative">
                  <div className="b absolute right-4 top-5 rotate-180">
                    <Dropdown />
                  </div>
                  <select
                    {...register("kegiatan_pembelajaran", { required: true })}
                    type="text"
                    className="a placeholder-gray-400 form-input mt-1 rounded-md border w-full"
                    disabled={isSubmitting ? "disabled" : ""}
                  >
                    <option value={" "} selected hidden>
                      Pilih Kegiatan Pembelajaran
                    </option>
                    <option>nhf</option>
                    <option>nhf</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">
                    Input Isi Kegiatan Belajar
                  </p>
                  {errors.nama && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <input
                  {...register("isi_kegiatan_pembelajaran", { required: true })}
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Input Kegiatan belajar disini"
                  disabled={isSubmitting ? "disabled" : ""}
                />
              </div>
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Penilaian</p>
                  {errors.nama && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <div className="relative">
                  <div className="b absolute right-4 top-5 rotate-180">
                    <Dropdown />
                  </div>
                  <select
                    {...register("penilaian", { required: true })}
                    type="text"
                    className="a placeholder-gray-400 form-input mt-1 rounded-md border w-full"
                    disabled={isSubmitting ? "disabled" : ""}
                  >
                    <option value={" "} selected hidden>
                      Pilih Penilaian
                    </option>
                    <option>nhf</option>
                    <option>nhf</option>
                  </select>
                </div>
              </div>
              <div className="w-full h-auto relative">
                <div className="w-full flex justify-between">
                  <p className="text-xs font-bold">Input Isi Penilaian</p>
                  {errors.nama && (
                    <span className="text-xs text-red-500">
                      Field required.
                    </span>
                  )}
                </div>
                <input
                  {...register("isi_penilaian", { required: true })}
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Input penilaian disini"
                  disabled={isSubmitting ? "disabled" : ""}
                />
              </div>
            </div>
          </div>
          {errMsg.length > 0 && (
            <span className="text-xs text-red-500">{errMsg}.</span>
          )}
          <div className="w-full h-full flex justify-between gap-4">
            <button
              onClick={() => {
                reset({ nama: "" });
              }}
              type="button"
              disabled={isSubmitting ? "disabled" : ""}
              className={` w-full h-9 bg-white shadow rounded`}
            >
              <p className="text-xs text-red-500 font-bold">Cancel</p>
            </button>

            <button
              ref={sbmt}
              type="submit"
              disabled={isSubmitting ? "disabled" : ""}
              className="w-full h-9 bg-blue-500 rounded border border-white shadow"
            >
              <p className="text-xs text-white font-bold">Simpan</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

FormJurusan.displayName = "FormJurusan";

const FormJurusanRef = React.forwardRef(FormJurusan, {});
const FormJurusanComp = React.memo(FormJurusanRef);

const Jurusan = ({ jurusan }) => {
  const updateData = React.useRef();

  const act = React.useCallback((r, s) => {
    if (r === "remove") {
      updateData.current?.removeData(s);
      return;
    }
    updateData.current?.updateData(s);
  }, []);

  React.useEffect(() => {
    if (env == "development") {
      console.log("Jurusan rerender");
    }
  });

  return (
    <>
      <div className="w-full h-fit rounded shadow flex flex-col gap-2 relative overflow-hidden">
        <FormJurusanComp ref={updateData} />
        <TableKI act={act} jurusan={jurusan} />
      </div>
    </>
  );
};
export default Jurusan;
