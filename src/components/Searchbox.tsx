import React from "react";

export type SearchboxProps = {
  placeholder: string;
  onInputChange: (value: string) => void;
};

let timeoutId: number;
export default function Searchbox(props: SearchboxProps): React.JSX.Element {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if(props.onInputChange) props.onInputChange(value)
    }, 500)
  }
  return (
    <input
      className="w-full h-full searchbox"
      placeholder={props.placeholder}
      onChange={onChange}
    />
  );
}
