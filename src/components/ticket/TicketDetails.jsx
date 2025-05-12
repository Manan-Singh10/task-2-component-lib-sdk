import Logo from "../logo/Logo";
import { useUser } from "../../context/UserContext";
import UserCard from "./UserCard";
import clsx from "clsx";

function TicketDetails({ className = "" }) {
  const { user } = useUser();
  const baseStyles = "flex flex-col justify-between px-2 py-5";

  return (
    <div className={clsx(baseStyles, className)}>
      <div className="flex gap-2 items-center">
        <Logo />
        <div>
          <p className="text-lg">Coding Conf</p>
          <p className="text-sm text-gray-400">{user.date} | India</p>
        </div>
      </div>

      <UserCard />
    </div>
  );
}

export default TicketDetails;
