import clsx from "clsx";

function Logo({ className = "" }) {
  const baseStyles = "h-7 sm:h-8 lg:h-10";

  return (
    <img
      className={clsx(baseStyles, className)}
      src="/logo-coding-conf.png"
      alt="logo-coding-conf"
    />
  );
}

export default Logo;
