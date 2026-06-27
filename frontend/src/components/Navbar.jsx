import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        Ajantha Yoga
      </Link>

      <div>
        <Link to="/sessions" style={styles.link}>Sessions</Link>
        <Link to="/bookings" style={styles.link}>Bookings</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#355c4b",
    color: "#ffffff",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 14px rgba(47,79,62,0.25)",
  },

  logo: {
    color: "#ffffff",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "18px",
  },

  link: {
    color: "#ffffff",
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
  },
};

export default Navbar;