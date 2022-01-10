import {
  useControls,
  useCreateStore,
  folder,
  Leva,
  LevaPanel,
  monitor,
  button,
} from "leva";

function Controls() {
  useControls({
    number: { value: 10, step: 0.25 },
    image: { image: undefined },
    select: { options: ["x", "y", ["x", "y"]] },
    interval: { min: -100, max: 100, value: [10, 15] },
    boolean: true,
    folder2: folder(
      {
        color2: "#fff",
        color: {
          value: "#ff005b",
          render: (get) => get("boolean"),
        },
        folder3: folder(
          {
            "Hello Button": button(() => console.log("hello")),
            folder4: folder({
              pos2d: { value: { x: 3, y: 4 } },
              pos2dArr: { value: [100, 200], x: { max: 300 } },
              pos3d: { value: { x: 0.3, k: 0.1, z: 0.5 }, j: { min: 0 } },
              pos3dArr: [Math.PI / 2, 20, 4],
            }),
          },
          { collapsed: false }
        ),
      },
      { render: (get) => get("boolean") }
    ),
    colorObj: { r: 1, g: 2, b: 3 },
  });

  return null;
}

export default function Demo() {
  const colorsStore = useCreateStore();
  const radiiStore = useCreateStore();
  const spaceStore = useCreateStore();
  const fontSizesStore = useCreateStore();
  const sizesStore = useCreateStore();
  const borderWidthsStore = useCreateStore();
  const fontWeightsStore = useCreateStore();

  const radii = useControls(
    {
      radii: folder({
        xs: "2px",
        sm: "3px",
        lg: "10px",
      }),
    },
    { store: radiiStore }
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
    { store: spaceStore }
  );

  const fontSizes = useControls(
    {
      fontSizes: folder({
        root: "11px",
      }),
    },
    { store: fontSizesStore }
  );

  const sizes = useControls(
    {
      sizes: folder({
        rootWidth: "280px",
        controlWidth: "160px",
        scrubberWidth: "8px",
        scrubberHeight: "16px",
        rowHeight: "24px",
        folderHeight: "20px",
        checkboxSize: "16px",
        joystickWidth: "100px",
        joystickHeight: "100px",
        colorPickerWidth: "160px",
        colorPickerHeight: "100px",
        monitorHeight: "60px",
        titleBarHeight: "39px",
      }),
    },
    { store: sizesStore }
  );

  const borderWidths = useControls(
    {
      borderWidths: folder({
        root: "0px",
        input: "1px",
        focus: "1px",
        hover: "1px",
        active: "1px",
        folder: "1px",
      }),
    },
    { store: borderWidthsStore }
  );

  const fontWeights = useControls(
    {
      fontWeights: folder({
        label: { value: "normal", options: ["bold", "light"] },
        folder: { value: "normal", options: ["bold", "light"] },
        button: { value: "normal", options: ["bold", "light"] },
      }),
    },
    { store: fontWeightsStore }
  );

  const theme = {
    radii,
    space,
    fontSizes,
    sizes,
    borderWidths,
    fontWeights,
  };

  return <Controls />;
}