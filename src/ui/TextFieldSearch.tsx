import React from "react";
import { FiSearch } from "react-icons/fi";

interface TextFieldSearchProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextFieldSearch: React.FC<TextFieldSearchProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full p-3 bg-gray-100  rounded-lg text-secondary  
           border-[2px] border-cl_border focus:border-gray-300  transition-all duration-300 ease-in-out"
          type="text"
          autoComplete="false"
        />
        <button
          type="submit"
          className=" absolute h-full left-0 top-0 w-10 flex justify-center items-center"
        >
          <FiSearch className="h-6 w-6 text-accent" />
        </button>
      </div>
    </div>
  );
};

export default TextFieldSearch;
