import PropTypes from "prop-types";
import clsx from "clsx";

function H1({ children, className = "" }) {
  const baseStyles =
    "font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-center w-[70%] leading-8 sm:leading-12 lg:leading-18 sm:tracking-wide lg:tracking-wider";

  return <h1 className={clsx(baseStyles, className)}>{children}</h1>;
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
