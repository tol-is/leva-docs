import { forwardRef } from "react";
import Link from "next/link";

type LinkProps = React.ComponentProps<"a"> & {
  href: string;
  newtab?: boolean;
};

export const NextLink = forwardRef(function NextLink(
  props: LinkProps,
  ref: any
) {
  const { href, newtab, ...rest } = props;
  const newTab = newtab || href.includes("https:");

  return (
    <Link href={href}>
      <a
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
        ref={ref}
      />
    </Link>
  );
});
