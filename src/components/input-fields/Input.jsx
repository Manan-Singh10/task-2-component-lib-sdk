import clsx from "clsx";
import PropTypes from "prop-types";

function Input({
  title = "",
  placeholder = "",
  value,
  setValue,
  className = "",
}) {
  const baseStyles =
    "w-full bg-[var(--input-bg)] border-[var(--input-border)] border-1 h-10 rounded-xl px-4";

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2">
      {title && <p>{title}</p>}
      <input
        type="text"
        placeholder={placeholder}
        className={clsx(baseStyles, className)}
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Input;
