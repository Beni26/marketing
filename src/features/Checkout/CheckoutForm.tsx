import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";
import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { cities, cityType, provinces } from "./data";
import DetailOrders from "./DetailOrders";

type provincesType = {
  label: string;
  value: string;
};

type CheckoutForm = {
  name: string;
  lastName: string;
  companyName: string;
  state: provincesType;
  city: cityType;
  address: string;
  postCode: number;
  phone: number;
  email: string;
  detail: string;
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<CheckoutForm>();

  const [availableCities, setAvailableCities] = useState<cityType[]>([]);

  const selectedProvince = watch("state");

  useEffect(() => {
    if (selectedProvince) {
      setAvailableCities(cities[selectedProvince.value] || []);
    } else {
      setAvailableCities([]);
    }
  }, [selectedProvince]);

  const sendOtpHandler: SubmitHandler<CheckoutForm> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="col-span-3">
        <h1 className="text-2xl font-bold text-accent">جزئیات صورتحساب</h1>
        <form className="space-y-10" onSubmit={handleSubmit(sendOtpHandler)}>
          <div className="flex gap-3">
            <TextField<CheckoutForm>
              label="نام"
              name="name"
              type="string"
              register={register}
              required
              errors={errors}
              className="flex-1"
              validationSchema={{
                required: "لطفا این قسمت را خالی نگذارید",
              }}
            />
            <TextField<CheckoutForm>
              label="نام خانوادگی"
              name="lastName"
              type="string"
              register={register}
              required
              errors={errors}
              className="flex-1"
              validationSchema={{
                required: "لطفا این قسمت را خالی نگذارید",
              }}
            />
          </div>
          <TextField<CheckoutForm>
            label="نام شرکت (اختیاری)"
            name="companyName"
            type="string"
            register={register}
          />
          <SelectField
            label="استان"
            name="state"
            required
            provinces={provinces}
            control={control}
            errors={errors}
            placeholder="استان را انتخاب کنید"
            rules={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
          <SelectField
            label="شهر"
            name="city"
            provinces={availableCities}
            control={control}
            errors={errors}
            required
            placeholder="شهر را انتخاب کنید"
            rules={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
          <TextField<CheckoutForm>
            label="آدرس  "
            name="address"
            type="string"
            register={register}
            required
            errors={errors}
            className="flex-1"
            validationSchema={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
          <TextField<CheckoutForm>
            label="کدپستی  "
            name="postCode"
            type="number"
            register={register}
            required
            errors={errors}
            className="flex-1"
            validationSchema={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
          <TextField<CheckoutForm>
            label="تلفن   "
            name="phone"
            type="number"
            register={register}
            required
            errors={errors}
            className="flex-1"
            validationSchema={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
          <TextField<CheckoutForm>
            label="ایمیل   "
            name="email"
            type="number"
            register={register}
            required
            errors={errors}
            className="flex-1"
            validationSchema={{
              required: "لطفا این قسمت را خالی نگذارید",
            }}
          />
        </form>
      </div>
      <div className="col-span-2 border grow-0 border-cl_border rounded-lg p-7">
        <DetailOrders onSubmit={handleSubmit(sendOtpHandler)} />
      </div>
    </>
  );
};
export default CheckoutForm;
