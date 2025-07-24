import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ToDo from "./pages/ToDo";
import Reports from "./pages/Reports";
import OtherReports from "./pages/OtherReports";
import AppControl from "./pages/AppControl";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="todo" element={<ToDo />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/other" element={<OtherReports />} />
            <Route path="app-control" element={<AppControl />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


