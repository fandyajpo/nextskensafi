import React from "react";
import DataTable from "react-data-table-component";
import { dataKelas } from "components/Admin/Pengumuman/tableList";
import { useForm } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter, posterGo } from "lib/ctx";
import { Loading } from "lib/listSvg";
import { Modal } from "components/default";

const env = process.env.NODE_ENV;

const TablePengumuman = React.memo(({ act, pengumuman }) => {
  const { state, fnr } = React.useContext(GlobalContext);

  // const handlePageChange = React.useCallback(async (r, s) => {
  //   const rr = await getter([
  //     "api/prot/get",
  //     { params: { uri: "bo/pengumuman", offset: (r - 1) * 5, limit: 5 } },
  //   ]);
  //   if (rr.status && rr.data?.all) {
  //     fnr({ type: "listPengumuman", payload: rr.data.all });
  //   }
  // }, []);

  // React.useEffect(() => {
  //   fnr({ type: "listPengumuman", payload: pengumuman });
  // }, []);

  // React.useEffect(() => {
  //   if (env == "development") {
  //     console.log("TableJurusan rerender");
  //   }
  // });

  return (
    <>
      <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
        <div className="text-sm font-semibold flex flex-col">
          <p className="h-full flex items-end">List User</p>
          <p className="h-full font-light text-xs">
            Add, Update & Remove User.
          </p>
        </div>
        <div className="text-3xl font-bold text-black flex items-center"></div>
      </div>
      <div className="w-full h-auto">
        <DataTable
          columns={dataKelas(act)}
          data={state?.listPengumuman?.pengumuman}
          responsive={true}
          highlightOnHover={true}
          pagination
          paginationServer
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationTotalRows={
            state?.listPengumuman?.total?.[0]
              ? state.listPengumuman.total[0]
              : 0
          }
          // progressPending={loading}
          // onChangeRowsPerPage={handlePerRowsChange}
          // onChangePage={handlePageChange}
        />
      </div>
    </>
  );
});
TablePengumuman.displayName = "TablePengumuman";

const FormPengumuman = (props, ref) => {
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
    formState,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      img: "",
      judul: "",
      deskripsi: "",
    },
  });

  const remover = React.useCallback(() => {
    sbmt?.current?.click();
  }, []);

  const onSubmit = React.useCallback(async (data) => {
    let r;
    sErrMsg("");
    // data.uri = "bo/pengumuman";
    data.uri = "";
    console.log(data);
    // data.nama_lengkap = data.nama_lengkap.toLowerCase()
    // r = await poster(["api/prot/post", data]);
    // if (data?.judul && !data?.kex && !data?.mode) {
    // r =
    // }
    r = await poster(["api/prot/post", data]);

    // if (data?.judul && data?.kex && !data?.mode) {
    //   r = await patcher(["api/prot/patch", data]);
    // }

    // if (data?.judul && data?.kex && data?.mode) {
    //   r = await del([
    //     "api/prot/delete",
    //     {
    //       params: data,
    //     },
    //   ]);
    // }

    sCfrm(false);
    // if (r.status) {
    //   fnr({ type: "listPengumuman", payload: r.data.all });
    // } else {
    //   sErrMsg(r.data);
    // }
  }, []);

  React.useImperativeHandle(ref, () => ({
    updateData(s) {
      reset({
        img: `${
          s?.[0]?.img?.thumbnailUrl ? s?.[0]?.img?.thumbnailUrl : s?.[0]?.img
        }`,
        judul: `${s[0].judul}`,
        deskripsi: `${s[0].deskripsi}`,
        kex: `${s[0]._key}`,
      });
    },
    removeData(s) {
      Promise.all([
        sCfrm(true),
        reset({
          judul: `${s[0].judul}`,
          kex: `${s[0]._key}`,
          mode: "remove",
        }),
      ]);
    },
  }));

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        img: "",
        judul: "",
        deskripsi: "",
      });
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
        desc={`Pengumuman ${getValues().judul}`}
        remover={remover}
      />

      <div
        className={`${!isSubmitting && "hidden"} w-full h-full absolute z-10`}
      >
        <Loading />
      </div>

      <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
        <div className="text-sm font-semibold flex flex-col">
          <p className="h-full flex items-end">Form Pengumuman</p>
          <p className="h-full font-light text-xs">
            Add, Update & Remove Pengumuman.
          </p>
        </div>
        <div className="text-3xl font-bold text-black flex items-center"></div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center p-4"
      >
        <div className="w-full h-full flex flex-col gap-3">
          <div className="w-full h-auto flex flex-col md:flex-row relative gap-3">
            <div className="w-full h-auto relative">
              <div className="w-full flex justify-between">
                <p className="text-xs font-bold">Image Url</p>
                {errors.img && (
                  <span className="text-xs text-red-500">Field required.</span>
                )}
              </div>
              <input
                {...register("img", { required: false })}
                type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Img Url"
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

            <div className="w-full h-auto relative">
              <div className="w-full flex justify-between">
                <p className="text-xs font-bold">Judul</p>
                {errors.judul && (
                  <span className="text-xs text-red-500">Field required.</span>
                )}
              </div>
              <input
                {...register("judul", { required: false })}
                type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Judul"
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>
          </div>

          <div className="w-full h-auto flex flex-col md:flex-row relative gap-3">
            <div className="w-full h-auto relative">
              <div className="w-full flex justify-between">
                <p className="text-xs font-bold">Deskripsi</p>
                {errors.deskripsi && (
                  <span className="text-xs text-red-500">Field required.</span>
                )}
              </div>
              <textarea
                rows="4"
                cols="50"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                {...register("deskripsi", { required: false })}
                disabled={isSubmitting ? "disabled" : ""}
              ></textarea>
            </div>
          </div>

          {errMsg.length > 0 && (
            <span className="text-xs text-red-500">{errMsg}.</span>
          )}
          <div className="w-full h-full flex justify-between gap-4">
            <button
              onClick={() => {
                reset({
                  img: "",
                  judul: "",
                  deskripsi: "",
                });
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
FormPengumuman.displayName = "FormPengumuman";
const FormPengumumanRef = React.forwardRef(FormPengumuman, {});
const FormPengumumanComp = React.memo(FormPengumumanRef);

const Pengumuman = ({ pengumuman }) => {
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
      console.log("pengumuman rerender");
    }
  });

  return (
    <>
      <div className="w-full h-fit rounded shadow flex flex-col gap-2 relative overflow-hidden">
        <FormPengumumanComp ref={updateData} />
        <TablePengumuman act={act} pengumuman={pengumuman} />
      </div>
    </>
  );
};
export default Pengumuman;
