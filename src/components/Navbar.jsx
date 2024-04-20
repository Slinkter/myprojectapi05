import { navbar } from "@material-tailwind/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputDown = (e) => {
    e.key === "Enter" ? onSearch(search) : null;
  };

  useImperativeHandle(ref, () => ({ search, setSearch }));
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 14, width: "100%", display: "flex" }}>
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Mi Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          type="text"
          placeholder="buscar tu evento favorite"
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleInputDown}
        />
        <Link
          to="/profile/my-info"
          style={{
            marginLeft: 24,
            color: "#00e",
            textDecoration: "none",
          }}
        >
          {" "}
          Mi Perfil
        </Link>
      </div>
    </div>
  );
});
Navbar.displayName = "Navbar";

export default Navbar;
