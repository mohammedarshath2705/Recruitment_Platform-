import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { saveToken } from "../auth";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    try {
      const res = await loginUser(data);

      if (res?.token) {
        saveToken(res.token);
        navigate("/profile");
      } else if (res?.error?.toLowerCase().includes("invalid credentials")) {
        setError("Account not found. Please register.");
      } else {
        setError(res?.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md sm:p-10 md:max-w-lg transition-transform transform hover:scale-105">

        {/* Auth form */}
        <AuthForm type="login" onSubmit={handleLogin} />

        {/* Error message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Register link */}
        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-purple-500 font-semibold cursor-pointer hover:text-purple-700 hover:underline transition-colors"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
