import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@styles/stitches.config";
import { H5, Paragraph } from "./Text";

// export default () => (
//   <Tabs.Root defaultValue="tab1" orientation="vertical">
//     <Tabs.List aria-label="tabs example">
//       <Tabs.Trigger value="tab1">One</Tabs.Trigger>
//       <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
//       <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
//     </Tabs.List>
//     <Tabs.Content value="tab1">Tab one content</Tabs.Content>
//     <Tabs.Content value="tab2">Tab two content</Tabs.Content>
//     <Tabs.Content value="tab3">Tab three content</Tabs.Content>
//   </Tabs.Root>
// );

// export const;

export const VerticalTabs = styled(Tabs.Root, {});

export const VerticalTabsList = styled(Tabs.List, {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

const StyledTrigger = styled(Tabs.Trigger, {
  background: "transparent",
  border: 0,
  textAlign: "left",
  "&:focus": {
    outline: "1px solid $hiContrast",
    outlineOffset: "3px",
  },
  variants: {
    active: {
      true: {
        color: "$hiContrast",
      },
      false: {
        color: "$uloContrast",
      },
    },
  },
});

export const VerticalTabsTrigger = ({
  title,
  children,
  value,
  active,
  ...rest
}) => {
  return (
    <StyledTrigger value={value} active={active}>
      <H5 as="h3">{title}</H5>
      <Paragraph css={{ maxWidth: "42ch" }}>{children}</Paragraph>
    </StyledTrigger>
  );
};

export const VerticalTabsContent = styled(Tabs.Content, {
  padding: "$6",
  backgroundColor: "$grey90",
  boxShadow: "$level1",
  borderRadius: "$lg",
  "&:focus": {
    outline: "1px solid $hiContrast",
    outlineOffset: "3px",
  },
});
