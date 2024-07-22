import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Control, Controller, FieldValues, Path, FieldErrors } from 'react-hook-form';
import DatePicker, { Value } from 'react-multi-date-picker';


type DatePickerFieldProps<T extends FieldValues> = {
  date: Value | undefined;
  setDate: React.Dispatch<React.SetStateAction<Value | undefined>>;
  control: Control<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  rules: object;
  label: string;
  required: boolean;
};

const DatePickerField = <T extends FieldValues>({
  date,
  setDate,
  name,
  errors,
  rules,
  control,
  label,
  required
}: DatePickerFieldProps<T>) => {
  return (
    <div className="relative">
      {label && (
        <label className="mb-1 block" htmlFor={name}>
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange } }) => (
          <DatePicker
            value={date}
            onChange={(val) => {
              onChange(val);
              setDate(val);
            }}
            containerClassName="w-full"
            inputClass="w-full p-2 rounded-lg text-secondary border-[2px] border-cl_border focus:border-accent focus:border-b-primary transition-all duration-300 ease-in-out"
            calendarPosition="bottom-center"
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
          />
        )}
      />
      {errors[name as string]?.message && (
        <span className="text-primary block text-xs absolute bottom-[-19px]">
          {errors[name as string]?.message?.toString() || "Error"}
        </span>
      )}
    </div>
  );
};

export default DatePickerField;
