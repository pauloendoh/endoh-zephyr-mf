import { Button } from "@mantine/core";
import { useState } from "react";

type Props = {};

export const Counter = ({ ...props }: Props) => {
  const [value, setvalue] = useState(0);

  return <Button onClick={() => setvalue(value + 1)}>Counter = {value}</Button>;
};
