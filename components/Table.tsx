import { styled } from "@styles/stitches.config";
import { useEffect, useLayoutEffect, useRef } from "react";

export const StyledTable = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed",
  borderTop: "1px solid $grey60",
  "> thead": {
    display: "none",
    "@sm": {
      display: "table-header-group",
    },
  },

  "& > tbody > tr": {
    display: "block",
    "@sm": {
      display: "table-row",
    },
  },
});

export const isServer = typeof window === "undefined";
const useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;

type UseResponsiveTableProps<T> = {
  ref: React.RefObject<T | null>;
};
export function useResponsiveTable<T extends HTMLElement>(
  props: UseResponsiveTableProps<T>
) {
  const { ref } = props;

  useIsomorphicLayoutEffect(() => {
    const { current: table } = ref;

    const headings = Array.prototype.slice
      .call(table.querySelectorAll(`thead th`))
      .map((el) => el.innerText);

    const cells = Array.prototype.slice.call(
      table.querySelectorAll(`tbody td`)
    ) as HTMLElement[];

    cells.forEach((cell, index) => {
      const key = index % headings.length;
      cell.dataset.th = headings[key];
    });
  }, [ref.current!]);
}

export const Table = (props) => {
  const ref = useRef();
  useResponsiveTable({ ref });

  return <StyledTable ref={ref} {...props} />;
};

export const Thead = styled("thead", {});

export const Th = styled("th", {
  textAlign: "left",
  padding: "$3 $1",
  borderBottom: "1px solid $grey60",
  fontSize: "$1",
  fontFamily: "$mono",
  color: "$uloContrast",
  fontWeight: 400,
  textTransform: "uppercase",
});

export const Tr = styled("tr", {
  borderBottom: "1px solid $grey60",
  "@sm": {
    border: "0",
  },
});

export const Td = styled("td", {
  textAlign: "left",
  padding: "$1 $1",
  fontSize: "$3",
  lineHeight: 24 / 16,
  display: "flex",
  alignItems: "baseline",
  "&:before": {
    content: "attr(data-th)",
    fontFamily: "$mono",
    color: "$uloContrast",
    fontWeight: 400,
    textTransform: "uppercase",
    fontSize: "$0",
    marginRight: "$2",
    width: "$9",
  },
  "@sm": {
    fontSize: "$4",
    lineHeight: 28 / 18,
    display: "table-cell",
    borderBottom: "1px solid $grey60",
    padding: "$3 $1",
    "&:before": {
      display: "0",
    },
  },
});
