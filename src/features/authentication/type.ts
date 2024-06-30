import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type  confirmData = {
    phone: string;
    // osType: number;
    // seriall: string;
    // confirmCode: string;
    onBack?:()=> void;
  };
  export type SendOTPFormProps = {
    onSubmit: SubmitHandler<confirmData>;
    isPending: boolean;
    register: UseFormRegister<confirmData>;
    handleSubmit: UseFormHandleSubmit<confirmData, undefined>; // نوع مناسب برای handleSubmit
    errors: FieldErrors<confirmData>;

  };
  
  export type CheckOTPFormProps = Pick<confirmData, "phone" | "onBack"> & {
    onResendOtp: SendOTPFormProps["onSubmit"];
  } 

  export interface TokenBody {
    securityKey: string ;
    deviceType: number;
    appVersion: number;
    imei: string;
}