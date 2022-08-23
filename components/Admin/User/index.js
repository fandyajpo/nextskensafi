import React from "react";
import DataTable from 'react-data-table-component';
import { dataKelas } from "components/Admin/User/tableList";
import { useForm, Controller } from "react-hook-form";
import { GlobalContext, poster, patcher, del, getter, logGer } from "lib/ctx";
import { Loading } from "lib/listSvg"
import { Modal } from "components/default"

const env = process.env.NODE_ENV

const TableUser = React.memo(({act, user, polar, bars}) => {

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
    // mode: "onChange",
    defaultValues: {
      jenis: 'all',
      jurusan: 'all',
      kelas: 'all',
    }
  });

  const handlePageChange = React.useCallback(async(r, s) => {
    console.log("handlePageChange", r, s);
    const rr = await getter([
      'api/prot/get',
      { params: { uri: 'bo/user', offset: (r-1)*5, limit: 5 } }
    ]);
    if ( rr.status && rr.data?.all ) {
      fnr({ type: "listUser", payload: rr.data.all })
    }
  },[])

  const onSubmit = React.useCallback(async(data) => {
    console.log("console console onSubmit", data);
  },[])

  React.useEffect(() => {
    fnr({ type: "listUser", payload: user })
  },[])

  React.useEffect(() => {
    if ( env == "development" ) {
      console.log("TableJurusan rerender");
    }
  })

  return (
    <>
    <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
      <div className="text-sm font-semibold flex flex-col">
        <p className="h-full flex items-end">List User</p>
        <p className="h-full font-light text-xs">Add, Update & Remove User.</p>
      </div>
      <div className="text-3xl font-bold text-black flex items-center">

        {/*<form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full h-auto flex flex-row items-center gap-1.5'
        >

          <div className='flex-none w-28 h-auto relative'>
            <select
              className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
              {...register("jenis", { required: true })}
              disabled={isSubmitting ? "disabled" : ""}
            >
              <option value="all">All</option>
              {polar.map(({ role, length }, index) => <option key={index+1} value={role}>{role}</option>)}
            </select>
          </div>

          <div className='flex-none w-28 h-auto relative'>
            <select
              className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
              {...register("jurusan", { required: true })}
              disabled={isSubmitting ? "disabled" : ""}
            >
              <option value="all">All</option>
              {polar.map(({ role, length }, index) => <option key={index+1} value={role}>{role}</option>)}
            </select>
          </div>

          <div className='flex-none w-28 h-auto relative'>
            <select
              className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
              {...register("kelas", { required: true })}
              disabled={isSubmitting ? "disabled" : ""}
            >
              <option value="all">All</option>
              {polar.map(({ role, length }, index) => <option key={index+1} value={role}>{role}</option>)}
            </select>
          </div>

          <div className='flex-none w-full h-auto relative'>
            <button type='submit' className='p-2 px-4 bg-red-900 text-xs text-white rounded'>
              Filter
            </button>
          </div>
        </form>*/}

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
        paginationTotalRows={state?.listUser?.total?.[0] ? state.listUser.total[0] : 0}
        // progressPending={loading}
        // onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
    </>
  )
})
TableUser.displayName = 'TableUser';

const FormUser = (props, ref) => {

  const { state, fnr } = React.useContext(GlobalContext);
  const sbmt = React.useRef();

  const [showCancel, setShowCancel] = React.useState(false);
  const sShowCancel = React.useCallback((r) => {
    setShowCancel(e => r)
  },[]);

  const [errMsg, setErrMsg] = React.useState("");
  const sErrMsg = React.useCallback((r) => {
    setErrMsg(e => r)
  },[]);

  const [cfrm, setCfrm] = React.useState(false);
  const sCfrm = React.useCallback((r) => {
    setCfrm( p => r );
  },[]);

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
      nama_lengkap: '',
      tempat_lahir: '',
      agama: '',
      nomor_orangtua: '',
      nomor_hp: '',
      alamat: '',
      email: '',
      kelas: '',
      jurusan: '',
      tahun_ajaran: '',
      kelamin: '',
    }
  });

  const remover = React.useCallback(() => {
    sbmt?.current?.click()
  },[])

  const onSubmit = React.useCallback(async(data) => {
    let r
    sErrMsg("")
    data.uri = 'bo/user'
    data.nama_lengkap = data.nama_lengkap.toLowerCase()

    if (data?.nama_lengkap && !data?.kex && !data?.mode) {
      r = await poster([
        'api/prot/post',
        data,
      ]);
    }

    if (data?.nama_lengkap && data?.kex && !data?.mode) {
      r = await patcher([
        'api/prot/patch',
        data,
      ]);
    }

    if (data?.nama_lengkap && data?.kex && data?.mode) {
      r = await del([
        'api/prot/delete',
        {
          params: data,
        }
      ]);
    }

    sCfrm(false)

    if (r.status) {
      fnr({ type: "listUser", payload: r.data.all })
    } else {
      sErrMsg(r.data)
    }
  },[]);

  React.useImperativeHandle(ref, () => ({
    updateData(s) {
       reset({
         nama_lengkap: `${s.user[0].nama_lengkap}`,
         tempat_lahir: `${s.user[0].tempat_lahir}`,
         agama: `${s.user[0].agama}`,
         nomor_orangtua: `${s.user[0].nomor_orangtua}`,
         nomor_hp: `${s.user[0].nomor_hp}`,
         alamat: `${s.user[0].alamat}`,
         email: `${s.user[0].email}`,
         kelas: `${s.user[0].kelas}`,
         jurusan: `${s.user[0].jurusan}`,
         tahun_ajaran: `${s.user[0].tahun_ajaran}`,
         kelamin: `${s.user[0].kelamin}`,
         kex: `${s.user[0]._key}`
       });
    },
    removeData(s) {
      Promise.all([
        sCfrm(true),
        reset({
          nama_lengkap: `${s.user[0].nama_lengkap}`,
          kex: `${s.user[0]._key}`,
          mode: 'remove'
        }),
      ])
    }
  }))

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        nama_lengkap: '',
        tempat_lahir: '',
        agama: '',
        nomor_orangtua: '',
        nomor_hp: '',
        alamat: '',
        email: '',
        kelas: '',
        jurusan: '',
        tahun_ajaran: '',
        kelamin: '',
      });
    }
  },[formState, reset]);

  React.useEffect(() => {
    if ( env == "development" ) {
      console.log("FormJurusan rerender");
      console.log(props.lTahunAjaran);
    }
  })

  return (
    <>
    <Modal
      isShow={cfrm}
      isSubmitting={isSubmitting}
      reset={reset}
      sCfrm={sCfrm}
      title={'Anda yakin akan menghapus data :'}
      desc={`User ${getValues().nama_lengkap}`}
      remover={remover}
    />

    <div className={`${!isSubmitting && 'hidden'} w-full h-full absolute z-10`}>
      <Loading />
    </div>

    <div className="h-14 bg-gray-50 flex justify-between px-4 py-3">
      <div className="text-sm font-semibold flex flex-col">
        <p className="h-full flex items-end">Form User</p>
        <p className="h-full font-light text-xs">Add, Update & Remove User.</p>
      </div>
      <div className="text-3xl font-bold text-black flex items-center">
      </div>
    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex items-center p-4'
    >
        <div className='w-full h-full flex flex-col gap-3'>

          <div className='w-full h-auto flex flex-col md:flex-row relative gap-3'>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Nama Lengkap</p>
                {errors.nama_lengkap && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("nama_lengkap", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Nama Lengkap'
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Tempat lahir</p>
                {errors.tempat_lahir && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("tempat_lahir", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Tempat lahir'
                disabled={isSubmitting ? "disabled" : ""}
              />

            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Agama</p>
                {errors.agama && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <select
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                // className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                {...register("agama", { required: true })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value=""> Pilih Agama</option>
                <option value="islam">Islam</option>
                <option value="hindu">Hindu</option>
                <option value="budha">Budha</option>
                <option value="kristen">Kristen</option>
                <option value="katolik">Katolik</option>
              </select>
            </div>

          </div>

          <div className='w-full h-auto flex flex-col md:flex-row relative gap-3'>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Nomor HP</p>
                {errors.nomor_hp && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("nomor_hp", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Nomor HP'
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Nomor Orangtua</p>
                {errors.nomor_orangtua && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("nomor_orangtua", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Nomor Orangtua'
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Email</p>
                {errors.email && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("email", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Email'
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

          </div>

          <div className='w-full h-auto flex flex-col md:flex-row relative gap-3'>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Kelas</p>
                {errors.kelas && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <select
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                // className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                {...register("kelas", { required: true })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value=""> Pilih Kelas</option>
                {props.lKelas[0].kelas.map((vals, index) => <option key={vals[0]._key} value={vals[0]._key}>{vals[0].nama}</option> )}
              </select>
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Kelas</p>
                {errors.jurusan && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <select
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                // className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                {...register("jurusan", { required: true })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value=""> Pilih Jurusan</option>
                {props.lJurusan[0].jurusan.map((vals, index) => <option key={vals[0]._key} value={vals[0]._key}>{vals[0].nama}</option> )}
              </select>
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Tahun Ajaran</p>
                {errors.tahun_ajaran && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <select
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                // className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                {...register("tahun_ajaran", { required: true })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value=""> Pilih Tahun Ajaran</option>
                {props.lTahunAjaran[0].tahunAjaran.map((vals, index) => <option key={vals[0]._key} value={vals[0]._key}>{vals[0].nama}</option> )}
              </select>
            </div>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Jenis Kelamin</p>
                {errors.kelamin && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <select
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                // className='placeholder-gray-300 form-input rounded-md border w-full text-xs'
                {...register("kelamin", { required: true })}
                disabled={isSubmitting ? "disabled" : ""}
              >
                <option value=""> Pilih Jenis Kelamin</option>
                <option value="l">Laki - Laki</option>
                <option value="p">Perempuan</option>
              </select>
            </div>

          </div>

          <div className='w-full h-auto flex flex-col md:flex-row relative gap-3'>

            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-between'>
                <p className='text-xs font-bold'>Alamat</p>
                {errors.alamat && <span className="text-xs text-red-500">Field required.</span>}
              </div>
              <input
                {...register("alamat", { required: true })}
                type='text'
                className='placeholder-gray-300 form-input mt-1 rounded-md border w-full'
                placeholder='Alamat'
                disabled={isSubmitting ? "disabled" : ""}
              />
            </div>

          </div>

          {errMsg.length > 0 && <span className="text-xs text-red-500">{errMsg}.</span>}
          <div className='w-full h-full flex justify-between gap-4'>
            <button
              onClick={() => {
                reset({
                  nama_lengkap: '',
                  tempat_lahir: '',
                  agama: '',
                  nomor_orangtua: '',
                  nomor_hp: '',
                  alamat: '',
                  email: '',
                  kelas: '',
                  jurusan: '',
                  tahun_ajaran: '',
                  kelamin: '',
                })
              }}
              type="button"
              disabled={isSubmitting ? "disabled" : ""}
              className={` w-full h-9 bg-white shadow rounded`}
            >
              <p className='text-xs text-red-500 font-bold'>Cancel</p>
            </button>

            <button
              ref={sbmt}
              type="submit"
              disabled={isSubmitting ? "disabled" : ""}
              className='w-full h-9 bg-blue-500 rounded border border-white shadow'
            >
              <p className='text-xs text-white font-bold'>Simpan</p>
            </button>
          </div>
        </div>
    </form>
    </>
  )
}
FormUser.displayName = 'FormUser';
const FormUserRef = React.forwardRef(FormUser, {});
const FormUserComp = React.memo(FormUserRef);

const UserList = ({user, polar, bars, lKelas, lJurusan, lTahunAjaran}) => {

  const updateData = React.useRef();

  const act = React.useCallback((r, s) => {
    if ( r === "remove") {
        updateData.current?.removeData(s);
      return
    };
    updateData.current?.updateData(s);
  },[]);

  React.useEffect(() => {
    if( env == "development" ) {
      console.log("User rerender");
    }
  });

  return (
    <>
    <div className="w-full h-fit rounded shadow flex flex-col gap-2 relative overflow-hidden">
      <FormUserComp ref={updateData} lKelas={lKelas} lJurusan={lJurusan} lTahunAjaran={lTahunAjaran} />
      <TableUser
        act={act} user={user} polar={polar} bars={bars}
      />
    </div>
    </>
  )
}
export default UserList;
