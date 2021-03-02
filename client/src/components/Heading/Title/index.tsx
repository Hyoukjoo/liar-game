import { FC, HTMLAttributes } from "react";
import styled from "@emotion/styled";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  heading?: Heading;
}

const Title: FC<Props> = ({ heading = "h1", children, ...props }) => {
  const HeadingStyle = styled(heading)`
    text-align: center;
  `;

  return <HeadingStyle {...props}>{children}</HeadingStyle>;
};

export default Title;
