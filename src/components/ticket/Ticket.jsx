import clsx from "clsx";
import { useUser } from "../../context/UserContext";
import TicketDetails from "./TicketDetails";

function Ticket({ className = "" }) {
  const { user } = useUser();

  const baseStyles =
    "h-40 sm:h-50  bg-[var(--ticket-bg)] border-2 border-[var(--input-border)] grid grid-cols-[minmax(200px,_1fr)_40px_60px] justify-center sm:grid-cols-[minmax(300px,_1fr)_60px_80px]";

  return (
    <div className={clsx(baseStyles, className)}>
      <TicketDetails />

      <div className="bg-transparent relative overflow-hidden flex justify-center items-center">
        <div className="w-full h-10 sm:h-14 bg-white/10 rounded-full absolute top-0 -translate-y-1/2"></div>
        <div className="w-full h-10 sm:h-14 bg-white/10 rounded-full absolute bottom-0 translate-y-1/2"></div>
        <div className="h-[70%] border-r border-dashed border-white/50 my-4"></div>
      </div>

      <div className="flex items-center justify-center rotate-270 text-white/70">
        {user.ticketID}
      </div>
    </div>
  );
}

export default Ticket;
