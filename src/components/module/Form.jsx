import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// notifications-toast
import toast, { Toaster } from "react-hot-toast";

// images
import image from "../../assets/images/hero.png";

function Form() {
  // yup in validations inputs
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "نام نباید کمتر از 3 حروف باشد")
      .max(10, "نام نباید بیشتر از 10 حروف باشد")
      .required("وارد کردن نام اجباری است"),
    phonenumber: yup.string().required("وارد کردن شماره تلفن اجباری است"),
    mobile: yup
      .string()
      .min(11, "شماره موبایل نباید کمتراز 11 رقم باشد")
      .max(11, "شماره موبایل نباید بیشتر 11 رقم باشد")
      .required("وارد کردن شمار همراه اجباری است"),
    caracter: yup.string().required("لطفا حروف را وارد کنید"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(schema) });

  // react-hook-form-validation form
  const onFormSubmit = (data) => {
    if (!data.name || !data.phonenumber || !data.mobile || !data.caracter) {
      toast.error("لطفا تمامی فیلدها را پر کنید!");
      return;
    }
    console.log(data);
  };

  return (
    <div className="flex  lg:justify-between justify-center items-center relative">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="bg-[#FFFF] xl:w-[500px] lg:w-[430px] md:w-[440px] sm:w-[340px] w-[320px] flex flex-col gap-7 justify-start p-3 h-fit rounded-lg shadow-md shadow-gray-300 mr-5 lg:ml-0"
      >
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            نام و نام خانوادگی <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-[11px] p-[2px] bg-red-500 text-white rounded-md text-center">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            شماره تماس ثابت (به همراه کد شهر)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
            {...register("phonenumber")}
          />
          {errors.phonenumber && (
            <p className="text-[11px] p-[2px] bg-red-500 text-white rounded-md text-center">
              {errors.phonenumber?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            موبایل
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="text-[11px] p-[2px] bg-red-500 text-white rounded-md text-center">
              {errors.mobile?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            لطفا کارکترها را تایپ کنید
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="xl:w-[470px] lg:w-[390px] outline-none border-[1px] p-1 rounded-md"
            {...register("caracter")}
          />
          {errors.caracter && (
            <p className="text-[11px] p-[2px] bg-red-500 text-white rounded-md text-center">
              {errors.caracter?.message}
            </p>
          )}
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
      <Toaster />
    </div>
  );
}

export default Form;
