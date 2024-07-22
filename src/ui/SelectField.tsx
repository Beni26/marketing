import Select from "react-select";
import {
  Controller,
  Control,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

interface SelectFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  provinces: { label: string; value: string }[];
  control: Control<any>;
  errors: FieldErrors;
  rules?: RegisterOptions;
  required?:boolean,
  defaultValue?:number
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  placeholder,
  className,
  provinces,
  control,
  errors,
  rules,
  required,
  defaultValue
}) => {
  return (
    <div className={className}>
     {label && (
        <label className="mb-1 block" htmlFor={name}>
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <div className="relative">
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Select
              {...field}
              options={provinces}
              isClearable
              placeholder={placeholder || "انتخاب کنید"}
              
            />
            
          )}
        />
        {errors[name] && (
          <span className="text-primary block text-xs absolute bottom-[-19px] ">
            {errors[name]?.message?.toString() || "Error"}
          </span>
        )}
      </div>
    </div>
  );
};

export default SelectField;
