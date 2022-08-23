const jam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const JadwalMengajarGuruC = () => {
  return (
    <div className="w-full h-full overflow-y-auto border">
      <div className="w-full flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Senin
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Selasa
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Rabu
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Senin
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Selasa
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Rabu
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-row items-center border h-fit overflow-clip">
        <div className="w-44 -rotate-90 bg-white flex items-center justify-center duration-500 text-xl font-bold">
          Rabu
        </div>
        <div className="flex flex-col">
          {jam.map((a) => {
            return (
              <div className="w-10 h-10 bg-white border flex justify-center items-center text-black">
                {a}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JadwalMengajarGuruC;
