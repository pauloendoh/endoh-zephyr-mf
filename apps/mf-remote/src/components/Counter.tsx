import { useState } from "react";

type Props = {};

export const Counter = ({ ...props }: Props) => {
  const [value, setvalue] = useState(0);

  return (
    <button
      onClick={() => setvalue(value + 1)}
      className={`Counter bg-red-500 cursor-pointer text-white p-2 rounded`}
    >
      Counter = {value}
    </button>
  );
};
