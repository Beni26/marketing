import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { checkOtp, login } from "../../services/authService";
import { CheckOTPFormProps, TokenBody } from "./type";
import Loading from "../../ui/Loading";
import { HiArrowRight } from "react-icons/hi";
import logo from "../../assets/images/logo.png"; 
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const CheckOTPForm: React.FC<CheckOTPFormProps> = ({
  phone,
  onBack,
  onResendOtp,
}) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(10);
  const [isTimerFinished, setIsTimerFinished] = useState<boolean>(false);
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<{ otp: string }>();



  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setIsTimerFinished(true);
      } else {
        if (seconds === 0) {
          setMinutes((prevMinutes) => Math.max(0, prevMinutes - 1));
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const { isPending: loginIsPending, mutateAsync: mutateLoginAsync } =
    useMutation({
      mutationFn: login,
    });
  const checkOtpHandeler: SubmitHandler<{ otp: string }> = async (data) => {
    const confirmData = {
      phone: phone,
      osType: 1,
      seriall: "imei",
      confirmCode: data.otp,
    };
    const formData = new FormData();
    formData.append("body", JSON.stringify(confirmData));
    try {
      const { data: confirmSmsResponse } = await mutateAsync(formData);

      try {
        const tokenBody: TokenBody = {
          securityKey: confirmSmsResponse.data.securityKey,
          deviceType: 1,
          appVersion: 1,
          imei: "reza",
        };
        const formData = new FormData();
        formData.append("body", JSON.stringify(tokenBody));

        const { data: loginResponseData } = await mutateLoginAsync(formData);
        const { securityKey, token } = loginResponseData.data;
        Cookies.set("securityKey", securityKey);
        Cookies.set("token", token);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center mb-5">
        <button className="flex gap-1 text-md group " onClick={onBack}>
          <HiArrowRight className="text-accent group-hover:text-link_hover transition-all duration-300 ease-in-out" />
        </button>
        <img src={logo} alt="Logo" className="w-48 h-20 m-auto" />
      </div>

      <form className="space-y-10 relative" onSubmit={handleSubmit(checkOtpHandeler)}>
        <h3 className="font-bold text-accent text-lg mb-1">
          کد تایید را وارد کنید
        </h3>
        <span className="text-xs">کد تایید برای شماره {phone} پیامک شد</span>
        <Controller
          name="otp"
          control={control}
          rules={{
            required: "لطفا این قسمت را خالی نگذارید",
            minLength: {
              value: 4,
              message: "کد تایید باید 4 رقم باشد",
            },
          }}
          render={({ field }) => (
            <OtpInput
              value={field.value}
              onChange={(val) => {
                field.onChange(val);
                setValue("otp", val);
              }}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} type="number" />}
              containerStyle="flex flex-row-reverse gap-x-2 justify-center"
              inputStyle={{
                width: "2.5rem",
                padding: "0.5rem 0.2rem",
                border: "1px solid rgb(var(--e-global-color-border))",
                borderRadius: "0.5rem",
              }}
            />
          )}
        />
        {errors.otp && <span className="text-red-500 text-xs absolute w-full text-center flex !m-0 justify-center bottom-24">{errors.otp.message}</span>}
        <div className="text-center ">
          <span className="text-nowrap text-xs w-30 blocktext-nowrap  w-30 mb-5 block">
            {isTimerFinished ? (
              <button onClick={() => onResendOtp({phone:phone})}>ارسال مجدد کد تایید</button>
            ) : (
              <span>
                {`${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}{" "}
                مانده تا دریافت مجدد کد
              </span>
            )}
          </span>
          <button
            disabled={isPending ? true : false}
            className="w-full p-3 bg-primary rounded-md text-white hover:bg-opacity-80 transition-all duration-300 ease-in-out"
          >
            {isPending || loginIsPending ? <Loading /> : <span> تایید</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOTPForm;
