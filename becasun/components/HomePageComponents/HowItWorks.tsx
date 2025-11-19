import { FaCoins, FaBolt, FaLeaf } from "react-icons/fa";

export default function HowItWorks() {
    const steps = [
        {
            icon: <FaCoins className="text-4xl text-(--primary)" />,
            title: "1. Mua Credit Năng lượng",
            desc: "Chọn số credit bạn muốn đầu tư. Credit đại diện cho phần công suất hệ thống."
        },
        {
            icon: <FaBolt className="text-4xl text-(--primary)" />,
            title: "2. Hệ thống tạo ra điện",
            desc: "Điện được tạo bởi hệ thống IoT và cập nhật theo thời gian thực trong ứng dụng."
        },
        {
            icon: <FaLeaf className="text-4xl text-(--primary)" />,
            title: "3. Nhận giảm giá và lợi nhuận",
            desc: "Bạn nhận tiết kiệm điện + lợi nhuận hàng tháng dựa trên lượng điện tạo ra."
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Becasun hoạt động như thế nào?</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition">
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
