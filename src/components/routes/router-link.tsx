import Link, { LinkProps } from "next/link";
import PropTypes from "prop-types";
import { forwardRef, ReactNode } from "react";

interface RouterLinkProps extends LinkProps {
  href: string;
  children?: ReactNode;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref) => <Link ref={ref} href={href} {...other} />
);

RouterLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default RouterLink;
