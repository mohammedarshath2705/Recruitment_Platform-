const API_URL = import.meta.env.VITE_API_URL; 

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Login request failed");
    }

    return res.json();
  } catch (err) {
    return { error: err.message };
  }
};

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Register request failed");
    }

    return res.json();
  } catch (err) {
    return { error: err.message };
  }
};

export const fetchProfile = async (token) => {
  try {
    const res = await fetch(`${API_URL}/user/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Profile fetch failed");
    }

    return res.json();
  } catch (err) {
    return { error: err.message };
  }
};
