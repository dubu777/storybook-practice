import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultFieldProps {
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  iconPath: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string;
  errorMessage: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  iconAlt,
  onIconClick,
  iconPath,
  onChange,
  placeholder,
  value,
  errorMessage,
  isError,
  id,
}: IDefaultFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";
  return (
    <div className="text-field relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border-b text-primary ${borderColor}`}
      >
        <input
          id={id}
          className="outline-none"
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type="text"
        />
        {value && (
          <IconButton alt={iconAlt} onClick={onIconClick} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
