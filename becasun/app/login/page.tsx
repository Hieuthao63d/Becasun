"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("/api/auth/login", { email, password });
            const { user, token } = res.data;

            localStorage.setItem("becasun_user", JSON.stringify(user));
            localStorage.setItem("becasun_token", token);

            alert("Đăng nhập thành công!");
            if (user.role === "admin") router.push("/admin");
            else router.push("/");

        } catch (err: any) {
            alert(err.response?.data?.error || "Lỗi đăng nhập");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Đăng nhập hệ thống</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </button>
                </form>
            </div>
        </div>
    );
}
