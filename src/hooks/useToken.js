import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const useToken = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const accessToken = localStorage.getItem("token");
  const parseToken = jwt_decode(accessToken);
  console.log(parseToken);

  return { parseToken };
};

export default useToken;
