import line from "../../assets/images/line.png";
import Form from "./Form";

function ServicesForm() {
  return (
    <div className="mt-[6.5rem] max-w-[1300px] mx-auto">
      <div className="flex justify-center lg:justify-start">
        <div className="relative mr-5 lg:mr-0">
          <h1 className="font-bold">دریافت سرویس</h1>
          <p className="mt-9 md:w-[510px] w-[340px] leading-8 md:text-[15px] text-[13px] text-gray-900">
            برای بهره مندی از این شرایط و دریافت سرویس های مختلف اینترنت پرسرعت
            شاتل فرم زیر را تکمیل کنید تا همکاران ما در سریعترین هنگام با شما
            تماس بگرند.
          </p>
          <div className="absolute top-[2rem]">
            <img className="w-[90px]" src={line} alt="line" />
          </div>
        </div>
      </div>

      <div className="mt-[2rem]">
        <Form />
      </div>
    </div>
  );
}

export default ServicesForm;
