import React from "react";
import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  validationSchema: object;
  errors: FieldErrors<T>;
  placeholder?: string;
}

const TextArea = <T extends FieldValues>({
  label,
  name,
  register,
  required,
  validationSchema,
  errors,
  placeholder,
}: TextAreaProps<T>) => {
  return (
    <div>
      {label && (
        <label className="mb-1 block" htmlFor={name}>
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          {...register(name, validationSchema)}
          id={name}
          className="w-full p-2 rounded-lg text-secondary border-[2px] border-cl_border focus:border-accent focus:border-b-primary transition-all duration-300 ease-in-out"
          placeholder={placeholder}
          rows={8}
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

export default TextArea;
