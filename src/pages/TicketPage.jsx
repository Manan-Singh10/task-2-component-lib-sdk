import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Header from "../components/header/Header";
import H1 from "../components/typography/H1";
import Subtext from "../components/typography/Subtext";
import Ticket from "../components/ticket/Ticket";

function TicketPage() {
  const { user } = useUser();
  console.log(user);

  if (!user)
    return (
      <div>
        <p className="text-lg">Problem with creating try again!</p>
        <Link to="/" className="text-blue-600">
          back to homepage
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-8">
      <Header />

      <div className="flex flex-col gap-4 sm:gap-10 items-center justify-center">
        <H1>
          Congrats,{" "}
          <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            {user.fullName}
          </span>
          ! Your ticket is ready.
        </H1>
        <Subtext>
          We've emailed your ticket to{" "}
          <span className="text-orange-400">{user.emailAddress}</span> and will
          send updates on your email.
        </Subtext>
      </div>

      <div className="h-[40%] flex items-center">
        <Ticket />
      </div>
    </div>
  );
}

export default TicketPage;
