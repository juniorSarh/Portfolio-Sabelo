import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Tech Stack", to: "/techstack" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className="navbar py-3 px-4"
      style={{
        background: "linear-gradient(to right, #050507, #0a0d13)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left Logo + Name */}
        <div className="d-flex align-items-center gap-2">
          <span style={{ color: "#3b82f6", fontSize: "1.4rem" }}>{"</>"}</span>
          <span className="fw-semibold text-white fs-5">Sabelo Gumede</span>
        </div>

        {/* Right Navigation Links */}
        <div className="d-flex gap-4">
          {navItems.map((item) => {
            const active = pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link"
                style={{
                  color: active ? "#3b82f6" : "#ffffff",
                  fontWeight: active ? "600" : "400",
                  padding: "6px 16px",
                  borderRadius: active ? "8px" : "0px",
                  backgroundColor: active ? "#ffffff" : "transparent",
                  transition: "0.2s",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
