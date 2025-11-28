"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSolarPanel } from "react-icons/fa";

interface User {
    name: string;
    email: string;
    role: string;
}

const navigationLinks = [
    { name: "Trang chủ", page: "home" },
    { name: "Hóa đơn", page: "statement" },
    { name: "Bảng điều khiển", page: "dashboard" },
    { name: "Sở hữu & Lịch sử", page: "ownership" },
];

export default function Header() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    // 🔹 Khi reload, lấy user từ localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("becasun_user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleNavigate = (page: string) => {
        router.push(`/${page === "home" ? "" : page}`);
    };

    const handleLogout = () => {
        localStorage.removeItem("becasun_user");
        localStorage.removeItem("becasun_token");
        setUser(null);
        router.push("/");
    };

    return (
        <header className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleNavigate("home")}
                >
                    <FaSolarPanel color="text-yellow-500" size={18} />
                    <h1 className="text-xl font-bold text-gray-800">Becasunver4</h1>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-6 text-gray-700 font-medium">
                        {navigationLinks.map((link) => (
                            <li key={link.page}>
                                <button
                                    onClick={() => handleNavigate(link.page)}
                                    className="hover:text-green-700 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Info */}
                {user ? (
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full cursor-pointer">
                        <div
                            className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold"
                        >
                            {user.name?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-700 text-sm">{user.email}</span>
                        <button
                            onClick={handleLogout}
                            className="text-red-500 text-sm font-semibold hover:underline ml-2"
                        >
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <button onClick={() => handleNavigate("login")} className="text-green-700">
                        Đăng nhập
                    </button>
                )}

            </div>
        </header>
    );
}
