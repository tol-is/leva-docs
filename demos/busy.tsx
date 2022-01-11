import {
  useControls,
  useCreateStore,
  folder,
  Leva,
  LevaPanel,
  monitor,
  button,
} from "leva";

export default function Demo() {
  const store = useCreateStore();

  const radii = useControls(
    {
      radii: folder({
        xs: "2px",
        sm: "3px",
        lg: "10px",
      }),
    },
    { store: store }
  );

  const space = useControls(
    {
      space: folder({
        sm: "6px",
        md: "10px",
        rowGap: "7px",
        colGap: "7px",
      }),
    },
    { store: store }
  );

  const fontSizes = useControls(
    {
      fontSizes: folder({
        root: "11px",
      }),
    },
    { store: store }
  );

  const fontWeights = useControls(
    {
      fontWeights: folder({
        label: { value: "normal", options: ["bold", "light"] },
        folder: { value: "normal", options: ["bold", "light"] },
        button: { value: "normal", options: ["bold", "light"] },
      }),
    },
    { store: store }
  );

  return (
    <div className="absolute w-72 right-5 top-5">
      <LevaPanel store={store} fill />
    </div>
  );
}
