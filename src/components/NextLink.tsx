import { Anchor } from "@la1ch3/ui";
import Link from "next/link";

export const NextLink = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <Anchor {...props}>{children}</Anchor>
  </Link>
);
