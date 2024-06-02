import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "5px solid #0077DB" : "",
      color: isActive ? " #0077DB" : "",
      borderRadius: isActive ? "5px" : "",
      transition: isActive ? "0.3s" : "",
    };
  };
  return (
    <div className="mt-[-5px] z-1">
      <div className="bg-gray-100">
        <ul className="flex gap-[1rem] p-8">
          <NavLink style={navLinkStyle} className="mb-2" to="/">
            <i className="bi bi-house-door mb-3"></i> خانه
          </NavLink>
          <NavLink style={navLinkStyle}  to="/Bus">
            <i className="bi bi-bus-front mb-3"></i> اتوبوس
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
