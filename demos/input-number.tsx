import React from "react";
import {
  useControls,
  useStoreContext,
  useCreateStore,
  LevaPanel,
  LevaStoreProvider,
} from "leva";

export default function InputNumber() {
  const store = useCreateStore();
  useControls(
    {
      length: 4,
    },
    { store: store }
  );

  return (
    <div>
      <LevaPanel store={store} fill flat titleBar={false} />
    </div>
  );
}
