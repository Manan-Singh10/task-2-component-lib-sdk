import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ children, className = "" }) {
  const baseStyles =
    "bg-[var(--btn-primary)] py-3 text-stone-700 font-semibold rounded-xl mt-2";

  return <button className={clsx(baseStyles, className)}>{children}</button>;
}

Button.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
