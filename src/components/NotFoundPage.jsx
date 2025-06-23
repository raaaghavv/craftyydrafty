import React from "react";
import { Link } from "react-router-dom"; 

function NotFoundPage() {
  const pageStyle = {
    textAlign: "center",
    padding: "50px 20px",
    minHeight: "calc(100vh - 120px)", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--orange-97)", 
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    marginTop: "30px",
    padding: "12px 25px",
    backgroundColor: "var(--orange-90)", 
    color: "black",
    textDecoration: "none",
    border:"2px solid var(--grey-15)",
    borderRadius: "8px",
    fontSize: "1.1em",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h1>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
        Oops! The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--orange-80)")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--orange-90)")}
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
