import clsx from "clsx";
import PropTypes from "prop-types";

function Subtext({ children, className = "" }) {
  const baseStyles =
    "text-stone-300 text-xs sm:text-lg lg:text-xl text-center sm:tracking-wider lg:tracking-widest w-[80%]";

  return <p className={clsx(baseStyles, className)}>{children}</p>;
}
Subtext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtext;
