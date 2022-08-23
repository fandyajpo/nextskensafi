import React from "react";
import DataTable from "react-data-table-component";
import { dataKelas } from "./tableList";
import { useForm } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter } from "lib/ctx";
import { Loading } from "lib/listSvg";
import { Modal } from "components/default";
import { useRouter } from "next/router";
import {
  getCurrentYear,
  getCurrentMonth,
  getWeeksInMonth,
  getAllMonth,
} from "lib/date";

const env = process.env.NODE_ENV;

const exampleData = [
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
  {
    name: "KOMPETENSI INTI 1 SIKAP SEPIRITUAL",
    content:
      "Memahami, menerapkan, menganalisis,dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup Simulasi dan Komunikasi Digital (Simdig) pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional. ",
  },
];

const CustomLoader = () => {
  return (
    <div className="bg-black w-full h-2/4 flex items-center justify-center">
      <div className="bg-blue-500 w-24 h-24 animate-spin"></div>
    </div>
  );
};

const TableKI = React.memo(({ act, jurusan }) => {
  const { state, fnr } = React.useContext(GlobalContext);

  const router = useRouter();

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

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

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
        progressComponent={<CustomLoader />}
        progressPending={loading}
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
      kompetensi_dasar: "",
      bulan: "",
      minggu: "",
      event: "",
    },
  });

  const [minggu, setMinggu] = React.useState();
  const sMinggu = React.useCallback((r) => {
    setMinggu((e) => r);
  }, []);

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
    console.log(minggu);
  }, [minggu]);

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
          <div className="w-full h-auto relative">
            <div className="w-full flex justify-between">
              <p className="text-xs font-bold">Pilih Kompetensi Dasar</p>
              {errors.nama && (
                <span className="text-xs text-red-500">Field required.</span>
              )}
            </div>
            <select
              {...register("kompetensi_dasar", { required: true })}
              type="text"
              className="placeholder-gray-400 form-input mt-1 rounded-md border w-full"

              // disabled={isSubmitting ? "disabled" : ""}
            >
              <option selected value={""} hidden>
                Pilih KD
              </option>
              <option value={1}>3.8 Memahami konsep Kewargaan Digital </option>
              <option value={2}>3.8 Memahami konsep Kewargaan Digital </option>
              <option value={3}>3.8 Memahami konsep Kewargaan Digital </option>
            </select>
          </div>
          <div className="w-full flex flex-row gap-x-3">
            <div className="w-full h-auto relative">
              <div className="w-full flex justify-between">
                <p className="text-xs font-bold">Pilih Bulan</p>
                {errors.nama && (
                  <span className="text-xs text-red-500">Field required.</span>
                )}
              </div>
              <select
                {...register("bulan", {
                  required: true,
                  onChange: () => sMinggu(getValues().bulan),
                })}
                type="text"
                className="placeholder-gray-400 form-input mt-1 rounded-md border w-full"
                // disabled={isSubmitting ? "disabled" : ""}
              >
                <option selected value={""} hidden>
                  Pilih Bulan
                </option>
                {getAllMonth("genap").map((bln, no) => {
                  return <option value={no}>{bln}</option>;
                })}
              </select>
            </div>
            <div className="w-full h-auto relative">
              <div className="w-full flex justify-between">
                <p className="text-xs font-bold">Minggu Ke</p>
                {errors.nama && (
                  <span className="text-xs text-red-500">Field required.</span>
                )}
              </div>
              <select
                {...register("minggu", {
                  required: true,
                })}
                disabled={!minggu}
                type="text"
                className="placeholder-gray-400 form-input mt-1 rounded-md border w-full"
                // disabled={isSubmitting ? "disabled" : ""}
              >
                <option selected value={""} hidden>
                  Minggu keberapa?
                </option>
                {Array(getWeeksInMonth(getCurrentYear, minggu) || null)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <option selected value={index}>
                        {index + 1}
                      </option>
                    );
                  })}

                {/* getWeeksInMonth(getCurrentYear(), getCurrentMonth().number) */}
              </select>
            </div>
          </div>
          <div className="w-full h-auto relative">
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <p className="text-xs font-bold">Input Event </p>
                <p className="text-xs font-bold text-gray-300">
                  Masukkan event semester anda disini, abaikan jika tidak
                  terdapat event
                </p>
              </div>
              {errors.nama && (
                <span className="text-xs text-red-500">Field required.</span>
              )}
            </div>
            <input
              {...register("event", { required: true })}
              type="text"
              className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
              placeholder="Masukkan program tahunan"
              disabled={isSubmitting ? "disabled" : ""}
            />
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
