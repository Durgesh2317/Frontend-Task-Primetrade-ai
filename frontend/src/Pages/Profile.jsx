import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [user, setUser] = useState(null);

  const loadProfile = async () => {
    const res = await API.get("/auth/me");
    setUser(res.data);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto mt-8 bg-white p-6 shadow rounded">
        <h1 className="text-xl font-bold">Profile</h1>

        {!user ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
