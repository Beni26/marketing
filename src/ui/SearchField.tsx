import AsyncSelect from "react-select/async";
import { StylesConfig, OptionProps } from "react-select";
import truncateText from "../utils/truncateText";
import { FiSearch } from "react-icons/fi";
import { BASE_URL_SITE } from "../services/httpService";
import { Link } from "react-router-dom";

interface OptionType {
  label: string;
  value: string;
  image: string;
  index: number;
  id:string;
}

interface SearchFieldProps {
  loadOptions: (inputValue: string) => Promise<OptionType[]>;
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    boxShadow: "none",
    borderRadius: "8px",
    padding: "9px",
    "&:hover": {
      border: "1px solid #888",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#333",
    padding: "0px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#888",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#333",
    "&:hover": {
      color: "#555",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "10px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomDropdownIndicator = (props: any) => {
  return (
    <div {...props.innerProps}>
      <FiSearch className="h-6 w-6 text-accent" />
    </div>
  );
};

const CustomOption: React.FC<OptionProps<OptionType>> = (props) => {
  const { data, innerRef, innerProps, options } = props;

  return (
    <Link to={`product/${data.id}`}>
      <div
        ref={innerRef}
        {...innerProps}
        className={`flex gap-2 p-3 items-center ${
          options.length > data.index ? "border-b" : ""
        }`}
      >
        <img
          src={`${BASE_URL_SITE}/images/${data.image}`}
          alt={data.label}
          className="w-12 h-12 border p-1 rounded-md"
        />
        <span>{truncateText(data.label, 40)}</span>
      </div>
    </Link>
  );
};

const SearchField: React.FC<SearchFieldProps> = ({ loadOptions }) => {
  return (
    <div className="custom-scrollbar">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        placeholder="جستجوی محصولات..."
        noOptionsMessage={() => "موردی یافت نشد"}
        styles={customStyles}
        components={{
          Option: CustomOption,
          DropdownIndicator: CustomDropdownIndicator,
        }}
      />
    </div>
  );
};

export default SearchField;
