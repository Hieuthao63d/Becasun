import { FaSolarPanel } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="flex justify-center">
                    <FaSolarPanel className="text-(--primary) text-6xl mb-4" />
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Đầu Tư Năng Lượng Mặt Trời Cộng Đồng Becasun
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    An toàn – Bền vững – Lợi nhuận ổn định hàng tháng.
                    Tham gia cùng bạn trong hành trình xanh hóa tương lai Việt Nam.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-(--primary) hover:bg-(--primary-dark) text-white rounded-lg shadow-md transition">
                        Tham gia ngay
                    </button>

                    <button className="px-6 py-3 border border-(--primary) text-(--primary) rounded-lg hover:bg-(--primary-light)/20 transition">
                        Tìm hiểu mô hình
                    </button>
                </div>
            </div>
        </section>
    );
}
