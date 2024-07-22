import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";

interface BaseProps<T extends FieldValues> {
  label?: string;
  name: Path<T>; // Ensure the name is a string
  type: string;
  register: UseFormRegister<T>;
  placeholder?: string;
  className?:string;
}
// نوع کمکی برای props با `required`
interface RequiredProps<T extends FieldValues> extends BaseProps<T> {
  required: true;
  validationSchema: object;
  errors: FieldErrors<T>;
}

// نوع کمکی برای props بدون `required`
interface OptionalProps<T extends FieldValues> extends BaseProps<T> {
  required?: false;
  validationSchema?: object;
  errors?: FieldErrors<T>;
}

type TextFieldProps<T extends FieldValues> = RequiredProps<T> | OptionalProps<T>;

const TextField = <T extends FieldValues>({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
  placeholder,
  className,
}: TextFieldProps<T>) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-1 block" htmlFor={name}>
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          {...register(name, validationSchema)}
          id={name}
          name={name}
          className="w-full p-2  rounded-lg text-secondary  
           border-[2px] border-cl_border focus:border-accent focus:border-b-primary transition-all duration-300 ease-in-out"
          type={type}
          autoComplete="false"
          placeholder={placeholder}
        />
        {errors && errors[name] && (
          <span className="text-primary block text-xs absolute bottom-[-19px] ">
            {(errors[name]?.message as React.ReactNode) || "Error"}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;
