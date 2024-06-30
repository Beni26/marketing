import React from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { SendOTPFormProps, confirmData } from './type';
import logo from "../../assets/images/logo.png";

const SendOTPForm: React.FC<SendOTPFormProps> = ({
  onSubmit,
  isPending,
  register,
  handleSubmit,
  errors,
}) => {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        className="w-48 h-20 m-auto mb-10 space-y-4 block"
      />

      <form className="space-y-10 relative" onSubmit={handleSubmit(onSubmit)}>
      <TextField<confirmData>
          label="لطفا شماره موبایل خود را وارد کنید:"
          name="phone"
          type="string"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "لطفا این قسمت را خالی نگذارید",
            minLength: {
              value: 10,
              message: "شماره موبایل شما نامعتبر است",
            },
          }}
        />
        {/* {errors && errors["phone"] && (
          <span className="text-red-500 text-xs absolute w-full text-center flex !m-0 justify-center bottom-16">{errors["phone"]?.message}</span>
        )} */}
        <button
          type="submit"
          disabled={isPending ? true : false}
          className="w-full p-3 bg-primary rounded-md text-white hover:bg-opacity-80 transition-all duration-300 ease-in-out "
        >
          {isPending ? <Loading /> : <span> ارسال کد تایید</span>}
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
