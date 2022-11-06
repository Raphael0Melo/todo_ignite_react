import { Dispatch, SetStateAction } from "react";
import styles from "./Input.module.css";

type Props = {
  value: string;
  placeholder: string;
  change: (e: any) => void;
};

export function Input({ value, change, placeholder }: Props) {

  

  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={change}
    />
  );
}
