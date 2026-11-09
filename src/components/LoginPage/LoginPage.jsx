import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
