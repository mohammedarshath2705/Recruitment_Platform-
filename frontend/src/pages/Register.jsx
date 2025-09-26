import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import AuthForm from "../components/AuthForm";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

 const handleRegister = async (data) => {
  try {
    const res = await registerUser(data);

    if (res?.user) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } 
    else if (res?.errors && Array.isArray(res.errors) && res.errors.length > 0) {
      const messages = res.errors.map(e => e.msg).join(", ");
      setError(messages); // ✅ string now
    } 
    else if (res?.error) {
      setError(typeof res.error === "string" ? res.error : res.error?.error || "Registration failed");
    } 
    else {
      setError("Registration failed. Please try again.");
    }
  } catch (err) {
    setError(err.message || "Registration failed. Please try again.");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md sm:p-10 md:max-w-lg">
        {/* Auth form */}
        <AuthForm type="register" onSubmit={handleRegister} />

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-center mt-4 font-medium">
            {error}
          </p>
        )}

        {/* Login link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span
            className="text-purple-500 font-semibold cursor-pointer hover:text-purple-700 hover:underline transition-colors"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
