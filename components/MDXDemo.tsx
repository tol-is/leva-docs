import dynamic from "next/dynamic";

const InputNumber = dynamic(() => import("../demos/input-number"));

export const getDemo = (id) =>
  ({
    "input-number": <InputNumber />,
  }[id]);
