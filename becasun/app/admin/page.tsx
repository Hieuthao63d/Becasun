"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaUserPlus, FaUsers, FaSignOutAlt } from "react-icons/fa";
import AdminHeader from "@/components/AdminHeader";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    created_date: string;
}

export default function AdminPage() {
    const router = useRouter();

    // Kiểm tra quyền Admin
    // ---- FIX lỗi redirect lặp vô hạn ----
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("becasun_user") || "null");

        if (!user) {
            router.push("/login");
            return;
        }

        if (user.role !== "Admin") {
            router.push("/");
            return;
        }

        setChecking(false);
    }, []);

    if (checking) return <div className="p-10">Đang tải trang quản trị...</div>;


    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "Investor",
    });

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    // Lấy danh sách user
    const fetchUsers = async () => {
        try {
            const res = await axios.get("/api/admin/get-users");
            setUsers(res.data);
        } catch (err) {
            console.error("Không thể tải danh sách:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Submit tạo user
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("/api/admin/create-user", form);
            alert("Tạo tài khoản thành công!");

            setForm({
                name: "",
                email: "",
                password: "",
                role: "Investor",
            });

            fetchUsers();
        } catch (err: any) {
            alert(err.response?.data?.error || "Có lỗi xảy ra!");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("becasun_user");
        router.push("/login");
    };

    return (
        <div>

            <div className="min-h-screen bg-gray-50 p-8">

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
                            <FaUsers /> Trang quản trị (Admin)
                        </h2>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            <FaSignOutAlt /> Đăng xuất
                        </button>
                    </div>

                    {/* FORM TẠO USER */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                            <FaUserPlus /> Thêm tài khoản mới
                        </h3>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Tên người dùng"
                                className="border rounded-lg p-3"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-lg p-3"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                className="border rounded-lg p-3"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                required
                            />

                            <select
                                className="border rounded-lg p-3"
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                            >
                                <option value="Investor">Investor (User)</option>
                                <option value="Manager">Manager</option>
                                <option value="Admin">Admin</option>
                            </select>

                            <button
                                type="submit"
                                disabled={loading}
                                className="col-span-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mt-2"
                            >
                                {loading ? "Đang tạo..." : "Tạo tài khoản"}
                            </button>
                        </form>
                    </div>

                    {/* DANH SÁCH USER */}
                    <h3 className="text-lg font-semibold text-green-800 mb-4">
                        Danh sách tài khoản
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="bg-green-100 text-green-800">
                                <tr>
                                    <th className="py-2 px-4 text-left">Tên</th>
                                    <th className="py-2 px-4 text-left">Email</th>
                                    <th className="py-2 px-4 text-left">Vai trò</th>
                                    <th className="py-2 px-4 text-left">Ngày tạo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id} className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-4">{u.name}</td>
                                        <td className="py-2 px-4">{u.email}</td>

                                        <td className="py-2 px-4 font-medium">
                                            <span
                                                className={
                                                    u.role === "Admin"
                                                        ? "text-red-600"
                                                        : u.role === "Manager"
                                                            ? "text-blue-600"
                                                            : "text-green-700"
                                                }
                                            >
                                                {u.role}
                                            </span>
                                        </td>

                                        <td className="py-2 px-4 text-gray-600 text-sm">
                                            {new Date(u.created_date).toLocaleDateString("vi-VN")}
                                        </td>
                                    </tr>
                                ))}

                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center text-gray-500 py-4">
                                            Không có tài khoản nào.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}
