import clsx from "clsx";
import Form from "../form/Form";
import H1 from "../typography/H1";
import Subtext from "../typography/Subtext";

function Main({ className = "" }) {
  const baseStyles =
    "flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 justify-center";

  return (
    <main className={clsx(baseStyles, className)}>
      <H1>Your Journey to Coding Conf 2025 Starts Here!</H1>
      <Subtext>
        Secure your spot at next year's biggest coding conference
      </Subtext>
      <Form />
    </main>
  );
}

export default Main;
