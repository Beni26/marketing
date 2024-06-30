import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
// import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import { confirmData } from "./type";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp,});

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<confirmData>();


  const sendOtpHandler : SubmitHandler<confirmData> = async (data) => {
    const confirmData = {
      phone:data.phone,
      osType: 1,
      seriall: "imei",
      confirmCode: "",
    };
    const formData = new FormData();
    formData.append("body", JSON.stringify(confirmData));

    try {
      const { data } = await mutateAsync(formData);
      toast.success(data.message);

      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

 
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={sendOtpHandler}
          isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phone={getValues("phone")}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
          />
     );
      default:
        return null;
    }
  };

  return (
    <div className="border border-cl_border rounded-lg  p-5 md:min-w-[400px] ">
      {renderStep()}
    </div>
  );
};

export default AuthContainer;
