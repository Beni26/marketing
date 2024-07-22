import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import DatePickerField from "../../../ui/DatePickerField";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface DashboardFormValues {
  gender: number;
  phone: number;
  meliCode: number;
  cartNumber: number;
  shabaNumber: number;
  birthDayFa: string; // تاریخ تولد به صورت رشته
  profileImage: string;
  id: string;
  fullName: string; // نام و نام خانوادگی به صورت رشته
}

const Dashboard1 = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<DashboardFormValues>();

  // شبیه‌سازی دریافت داده‌ها از سرور یا منبع دیگر
  const userData: DashboardFormValues = {
    gender: 1,
    phone: 1234567890,
    meliCode: 1234567890,
    cartNumber: 1234567890,
    shabaNumber: 1234567890,
    birthDayFa: "1400/04/25",
    profileImage: "path/to/image.jpg",
    id: "123456",
    fullName: "John Doe",
  };
  const convertDigitsToEnglish = (str: string) => {
    return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
  };
  const [date, setDate] = useState<Value>(new Date());
  useEffect(() => {
    // ست کردن اطلاعات کاربر به عنوان مقادیر اولیه
    setValue("fullName", userData.fullName);
    setValue("meliCode", userData.meliCode);
    setValue("phone", userData.phone);
    setValue("cartNumber", userData.cartNumber);
    setValue("shabaNumber", userData.shabaNumber);
    setValue("birthDayFa", userData.birthDayFa);
    if (userData.birthDayFa) {
        const persianDate = new DateObject({
          date: userData.birthDayFa,
          calendar: persian,
        });
        setValue("birthDayFa", userData.birthDayFa);
        setDate(persianDate);
      }
  }, []); // setValue و userData به عنوان وابستگی‌ها استفاده می‌شوند

  const onSubmit = (data: DashboardFormValues) => {
    const persianDate = new DateObject(date:Value)
      .convert(persian)
      .format("YYYY/MM/DD");
    const persianDatee = convertDigitsToEnglish(persianDate);

    console.log(data);
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      <TextField
        label="نام و نام خانوادگی"
        register={register}
        name="fullName"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <TextField
        label="کد ملی "
        register={register}
        name="meliCode"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <TextField
        label="شماره تلفن همراه"
        register={register}
        name="phone"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <TextField
        label="شماره کارت"
        register={register}
        name="cartNumber"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <TextField
        label="شماره شبا"
        register={register}
        name="shabaNumber"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <DatePickerField
        date={date}
        setDate={setDate}
        control={control}
        name="birthDayFa"
        rules={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
        errors={errors}
      />
      <button
        type="submit"
        className="col-span-2 bg-primary text-white py-2 px-4 rounded-lg"
      >
        ارسال
      </button>
    </form>
  );
};

export default Dashboard1;
