import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DateObject, Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import DatePickerField from "../../../ui/DatePickerField";
import TextField from "../../../ui/TextField";
import convertDigitsToEnglish from "../../../utils/convertDigitsToEnglish";
import useUser from "../../authentication/useUser";
import SelectField from "../../../ui/SelectField";
import useEditProfile from "./useEditProfile";

type genderType = {
  label: string;
  value: string;
};
export interface DashboardFormValues {
  gender: genderType;
  phone: number;
  meliCode: number;
  cartNumber: number;
  shabaNumber: number;
  birthDayFa: string; // تاریخ تولد به صورت رشته
  profileImage: string;
  id: string;
  firstName: string;
  lastName: string;
}

const Dashboard = () => {
  // const userData: DashboardFormValues = {
  //   gender: 1,
  //   phone: 1234567890,
  //   meliCode: 1234567890,
  //   cartNumber: 1234567890,
  //   shabaNumber: 1234567890,
  //   birthDayFa: "1400/04/25",
  //   profileImage: "path/to/image.jpg",
  //   id: "123456",
  //   fullName: "John Doe",
  // };
  const {  data } = useUser();
  const {  profileEdit } = useEditProfile();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<DashboardFormValues>({ defaultValues: data });

  const [date, setDate] = useState<Value>();

  const genderOptions: genderType[] = [
    { label: "زن", value: "1" },
    { label: "مرد", value: "0" },
  ];

  useEffect(() => {
    if (data.birthDayFa) {
      const persianDate = new DateObject({
        date: data.birthDayFa,
        calendar: persian,
      });
      setValue("birthDayFa", data.birthDayFa);
      setDate(persianDate);
    }
    if (data) {
      const selectSex = data.gender == 0 ? "مرد" : "زن";
      const gender = { label: selectSex, value: data.gender };
      setValue("gender", gender);
    }
  }, []);

  const onSubmit = (data: DashboardFormValues) => {
    let finalData = { ...data, gender: data.gender.value };
    if (date) {
      const persianDate = new DateObject(date)
        .convert(persian)
        .format("YYYY/MM/DD");
      const persianDatee = convertDigitsToEnglish(persianDate);
      finalData = { ...finalData, birthDayFa: persianDatee };
    }
    const formData = new FormData();
    formData.append("body", JSON.stringify(finalData));
    profileEdit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      {/* <DatePicker
        containerClassName="w-full"
        inputClass="w-full p-2 rounded-lg text-secondary border-[2px] border-cl_border focus:border-accent focus:border-b-primary transition-all duration-300 ease-in-out"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => {
          setDate(date);
          console.log(date)
        }}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}

      /> */}
      <TextField
        label=" نام "
        register={register}
        name="firstName"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <TextField
        label="نام خانوادگی"
        register={register}
        name="lastName"
        errors={errors}
        required
        type="text"
        validationSchema={{
          required: "لطفا این قسمت را خالی نگذارید",
        }}
      />
      <SelectField
        label="جنسیت"
        name="gender"
        provinces={genderOptions}
        control={control}
        required
        errors={errors}
        rules={{
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
      <DatePickerField<DashboardFormValues>
        label="تاریخ تولد"
        required
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
        className="col-span-2 bg-primary text-white py-2 px-4 rounded-lg mt-5 mb-5"
      >
        ارسال
      </button>
    </form>
  );
};

export default Dashboard;
