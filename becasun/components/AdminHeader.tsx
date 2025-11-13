"use client";

export default function AdminHeader() {
    return (
        <div className="w-full bg-green-700 text-white px-6 py-3 flex items-center justify-between">
            <h2 className="text-xl font-bold">Becasun Admin Panel</h2>

            <div className="flex gap-6">
                <a href="/admin/users" className="hover:underline">Quản lý tài khoản</a>
                <a href="/admin/create-user" className="hover:underline">Thêm tài khoản</a>
                <a href="/admin/articles" className="hover:underline">Quản lý bài viết</a>
                <button
                    onClick={() => {
                        localStorage.removeItem("becasun_user");
                        window.location.href = "/";
                    }}
                    className="text-red-300 hover:text-red-500"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
}
