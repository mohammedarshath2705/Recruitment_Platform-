// Profile.jsx
import { logout } from "../auth";

export default function Profile({ user }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md sm:p-10 md:max-w-lg space-y-5">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome, {user.full_name}
        </h2>

        <div className="space-y-3 text-gray-700">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Title:</strong> {user.title || "Not set"}</p>
          <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>
        </div>

        <button
          onClick={logout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
