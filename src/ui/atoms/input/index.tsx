import { useState } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

const Input = ({
  className,
  value,
  onChange,
  placeholder,
  readOnly = false,
}: {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}) => {
  const clazz = classNames([classes.input, className]);
  return (
    <div className={clazz}>
      {!readOnly ? (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input type="text" placeholder={placeholder} value={value} readOnly />
      )}
    </div>
  );
};

export default Input;
