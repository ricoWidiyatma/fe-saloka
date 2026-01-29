import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {}
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: 16, marginBottom: 20 }}>
      <Link to="/categories">Categories</Link>
      <Link to="/products">Products</Link>
      <Link to="/transactions">Transactions</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
