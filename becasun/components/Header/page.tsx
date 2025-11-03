"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSolarPanel } from "react-icons/fa";

interface User {
  name: string;
  email: string;
}

export default function Header() {
  const router = useRouter();

  // Fake auth state — replace with your real auth context
  const [user, setUser] = useState<User | null>({
    name: "User",
    email: "user@example.com",
  });

  const handleNavigate = (page: string) => {
    router.push(`/${page === "home" ? "" : page}`);
  };

  const handleLogout = () => {
    setUser(null);
    // your logout logic here
  };

  return (
    <header className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigate("home")}
        >
          <FaSolarPanel color="text-yellow-500"  size={16} />
          <h1 className="text-xl font-bold text-gray-800">Becasunver4</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            {["home", "statement", "dashboard", "ownership"].map((page) => (
              <li key={page}>
                <button
                  onClick={() => handleNavigate(page)}
                  className="hover:text-yellow-600 transition-colors"
                >
                  {page === "home"
                    ? "Trang chủ"
                    : page === "statement"
                    ? "Hóa đơn"
                    : page === "dashboard"
                    ? "Bảng điều khiển"
                    : "Sở hữu & Lịch sử"}
                </button>
              </li>
            ))}

            {!user ? (
              <li>
                <button
                  onClick={() => handleNavigate("login")}
                  className="text-blue-600 hover:underline"
                >
                  Đăng nhập
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Đăng xuất
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* User Info */}
        {user && (
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-700 text-sm">{user.email}</span>
          </div>
        )}
      </div>
    </header>
  );
}
