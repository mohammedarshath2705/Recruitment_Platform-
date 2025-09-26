// ProfilePage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../api";
import { getToken } from "../auth";
import Profile from "../components/Profile";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) return navigate("/login");

    fetchProfile(token).then((data) => {
      if (data.user) setProfile(data.user);
      else navigate("/login");
    });
  }, [navigate]);

  if (!profile)
    return (
      <p className="text-center mt-10 text-gray-100 text-lg animate-pulse">
        Loading...
      </p>
    );

  return <Profile user={profile} />;
}
