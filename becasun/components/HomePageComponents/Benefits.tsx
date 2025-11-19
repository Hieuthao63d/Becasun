import { FaShieldAlt, FaChartLine, FaBatteryHalf, FaPiggyBank } from "react-icons/fa";

export default function Benefits() {
    const data = [
        { icon: <FaPiggyBank />, title: "Lợi nhuận 6–12%/năm", desc: "Dựa trên sản lượng điện thực tế." },
        { icon: <FaBatteryHalf />, title: "Theo dõi thời gian thực", desc: "IoT đo công suất và sản lượng từng phút." },
        { icon: <FaShieldAlt />, title: "An toàn & minh bạch", desc: "Dữ liệu công khai, quy trình rõ ràng." },
        { icon: <FaChartLine />, title: "Ổn định lâu dài", desc: "Năng lượng mặt trời tăng trưởng mạnh 2025–2030." },
    ];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-14">Lợi ích khi đầu tư cùng Becasun</h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {data.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                            <div className="text-4xl text-(--primary) mb-4 w-fit mx-auto">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
