import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-light border-end"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <div className="p-3 fw-bold">
        Menu
      </div>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/add-product">
            Add Product
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;