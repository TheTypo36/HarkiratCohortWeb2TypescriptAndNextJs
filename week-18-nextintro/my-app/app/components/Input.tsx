"use client";
export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export default function Input(props: InputProps) {
  return (
    <div className="p-2 text-red-300 w-full">
      <input
        className="p-2 border-amber-500 border-2"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}
