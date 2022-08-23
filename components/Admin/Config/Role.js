import React from "react";
import DataTable from "react-data-table-component";
import { dataKelas } from "components/Admin/Config/tableList";
import { useForm, Controller } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter, logGer } from "lib/ctx";
import { Loading } from "lib/listSvg";
import { Modal } from "components/default";

const env = process.env.NODE_ENV;

const TableRole = React.memo(({ act, role }) => {
  const { state, fnr } = React.useContext(GlobalContext);

  const handlePageChange = React.useCallback(async (r, s) => {
    const rr = await getter([
      "api/prot/get",
      { params: { uri: "bo/role", offset: (r - 1) * 5, limit: 5 } },
    ]);

    if (rr.status && rr.data?.all) {
      fnr({ type: "listRole", payload: rr.data.all });
    }
  }, []);

  React.useEffect(() => {
    fnr({ type: "listRole", payload: role });
  }, []);

  React.useEffect(() => {
    if (env == "development") {
      console.log("TableRole rerender");
    }
  });

  return (
    <div className="w-full h-full">
      <DataTable
        columns={dataKelas(act)}
        data={state?.listRole?.role}
        responsive={true}
        highlightOnHover={true}
        pagination
        paginationServer
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        paginationTotalRows={
          state?.listRole?.total?.[0] ? state.listRole.total[0] : 0
        }
        // progressPending={loading}
        // onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
});
TableRole.displayName = "TableRole";

const FormRole = (props, ref) => {
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
      nama: "",
      kex: "",
    },
  });

  const remover = React.useCallback(() => {
    sbmt?.current?.click();
  }, []);

  const onSubmit = React.useCallback(async (data) => {
    let r;
    sErrMsg("");
    data.uri = "bo/config/role";
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
        type: "listRole",
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
      console.log("FormRole rerender");
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
        desc={`Role ${getValues().nama}`}
        remover={remover}
      />

      <div
        className={`${!isSubmitting && "hidden"} w-full h-full absolute z-10`}
      >
        <Loading />
      </div>

      <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
        <div className="text-sm font-semibold flex flex-col">
          <p className="h-full flex items-end">List Role</p>
          <p className="h-full font-light text-xs">Update / Remove Role.</p>
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
              <p className="text-xs font-bold">Nama Role</p>
              {errors.nama && (
                <span className="text-xs text-red-500">Field required.</span>
              )}
            </div>
            <input
              {...register("nama", { required: true })}
              type="text"
              className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
              placeholder="Role"
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
FormRole.displayName = "FormRole";
const FormRoleRef = React.forwardRef(FormRole, {});
const FormRoleComp = React.memo(FormRoleRef);

const Role = ({ role }) => {
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
      console.log("Role rerender");
    }
  });

  return (
    <>
      <div className="w-full h-fit rounded shadow flex flex-col gap-2 relative overflow-hidden">
        <FormRoleComp ref={updateData} />
        <TableRole act={act} role={role} />
      </div>
    </>
  );
};
export default Role;
