import Header from "../components/header/Header";
import Main from "../components/main/Main";

function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-8">
      <Header />
      <Main />
    </div>
  );
}

export default Dashboard;
