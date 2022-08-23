import React from "react";
import DataTable from "react-data-table-component";
import { dataKelas } from "components/Admin/Absensi/tableList";
import { useForm, Controller } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter, logGer } from "lib/ctx";
import { Loading } from "lib/listSvg";
import { Modal } from "components/default";

const env = process.env.NODE_ENV;

const TableUser = React.memo(({ act, user, polar, bars }) => {
  const { state, fnr } = React.useContext(GlobalContext);

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
      jenis: "all",
      jurusan: "all",
      kelas: "all",
    },
  });

  const handlePageChange = React.useCallback(async (r, s) => {
    const rr = await getter([
      "api/prot/get",
      { params: { uri: "bo/user", offset: (r - 1) * 5, limit: 5, mm: "asd" } },
    ]);
    if (rr.status && rr.data?.all) {
      fnr({ type: "listUser", payload: rr.data.all });
    }
  }, []);

  const onSubmit = React.useCallback(async (data) => {
    console.log("console console");
  });

  React.useEffect(() => {
    fnr({ type: "listUser", payload: user });
  }, []);

  React.useEffect(() => {
    if (env == "development") {
      console.log("TableJurusan rerender");
      console.log("TableJurusan polar", polar);
      console.log("TableJurusan rerender", bars);
    }
  });

  return (
    <>
      <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
        <div className="text-sm font-semibold flex flex-col">
          <p className="h-full flex items-end">List User</p>
          <p className="h-full font-light text-xs">
            Add, Update & Remove User.
          </p>
        </div>
        <div className="text-3xl font-bold text-black flex items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-row items-center gap-1.5"
          >
            <div className="w-full h-auto relative">
              <select
                // name="func"
                className="placeholder-gray-300 form-input rounded-md border w-full text-xs"
                onChange={(e) => {
                  jenis.onChange(e); // react hook form onChange
                  console.log("Here would go the my onChange"); // my onChange
                }}
                {...register("jenis", { required: false })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value="all">All</option>
                {polar.map(({ role, length }, index) => (
                  <option key={index + 1} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/*<div className='w-full h-auto relative'>
                <select
                  // name="func"
                  className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                  onChange={(e) => {
                    jurusan.onChange(e); // react hook form onChange
                    console.log("Here would go the my onChange"); // my onChange
                  }}
                  {...register("jurusan", { required: false })}
                  disabled={isSubmitting ? "disabled" : ""}
                >
                  <option value="all">All</option>
                  <option value="5">Function 2</option>
                  <option value="6">Function 3</option>
                </select>
              </div>

              <div className='w-full h-auto relative'>
                <select
                  // name="func"
                  className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                  onChange={(e) => {
                    kelas.onChange(e); // react hook form onChange
                    console.log("Here would go the my onChange"); // my onChange
                  }}
                  {...register("kelas", { required: false })}
                  disabled={isSubmitting ? "disabled" : ""}
                >
                  <option value="all">All</option>
                  <option value="5">Function 2</option>
                  <option value="6">Function 3</option>
                </select>
              </div>*/}
          </form>
        </div>
      </div>
      <div className="w-full h-auto">
        <DataTable
          columns={dataKelas(act)}
          data={state?.listUser?.user}
          responsive={true}
          highlightOnHover={true}
          pagination
          paginationServer
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationTotalRows={
            state?.listUser?.total?.[0] ? state.listUser.total[0] : 0
          }
          // progressPending={loading}
          // onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
        />
      </div>
    </>
  );
});
TableUser.displayName = "TableUser";

const AbsensiList = ({ user, polar, bars }) => {
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
      console.log("User rerender");
    }
  });

  return (
    <>
      <div className="w-full h-fit rounded shadow flex flex-col gap-2 relative overflow-hidden">
        <TableUser act={act} user={user} polar={polar} bars={bars} />
      </div>
    </>
  );
};
export default AbsensiList;
