import image from "../../assets/images/hero.png";

function Form() {
  return (
    <div className="flex lg:justify-between justify-center items-center relative">
      <form className="bg-[#FFFF] xl:w-[500px] lg:w-[430px] md:w-[440px] sm:w-[340px] w-[320px] flex flex-col gap-7 justify-start p-3 h-[430px] rounded-lg shadow-md shadow-gray-300 mr-5 lg:ml-0">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            نام و نام خانوادگی <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            شماره تماس ثابت (به همراه کد شهر)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            موبایل
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            لطفا کارکترها را تایپ کنید
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
          />
        </div>
        <div className="mb-[1rem]">
          <button className="bg-orange-700 w-[100px] p-1 rounded-full text-white">
            ارسال
          </button>
        </div>
      </form>
      <main className="absolute top-[-2rem] left-0 w-[500px] hidden lg:block">
        <img
          className="w-[330px] rounded-lg object-cover"
          src={image}
          alt="hero"
        />
      </main>
    </div>
  );
}

export default Form;
