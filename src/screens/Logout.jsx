import React, { useEffect } from "react";
import { logout } from "../utils/request";

const Logout = () => {
  useEffect(() => {
    const onMount = async () => {
      localStorage.setItem("role", "");
      localStorage.setItem("token", "");
      await logout();
    };
    onMount();
  }, []);

  return <div>Logging out</div>;
};

export default Logout;
