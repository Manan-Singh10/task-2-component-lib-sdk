import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="bg-linear-to-br from-[var(--bg-dark)] to-[var(--bg-light)] text-gray-100 min-h-screen w-full flex justify-center p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
