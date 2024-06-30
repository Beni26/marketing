import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>; // Ensure the name is a string
  type: string;
  register: UseFormRegister<T>;
  required?: boolean;
  validationSchema: object;
  errors: FieldErrors<T>;
  placeholder?: string;
}

const TextField = <T extends FieldValues>({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
  placeholder,
}: TextFieldProps<T>) => {
  return (
    <div>
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
