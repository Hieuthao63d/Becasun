import { FaSolarPanel, FaThumbsUp, FaGem } from "react-icons/fa";

export default function Information() {
    const sections = [
        {
            icon: <FaSolarPanel className="text-(--primary) text-5xl" />,
            title: "Nhiệm vụ & Tầm nhìn",
            desc: "Mang năng lượng sạch đến cộng đồng Việt Nam thông qua mô hình đầu tư minh bạch, bền vững và đem lại lợi ích thiết thực cho cả người dân và môi trường.",
        },
        {
            icon: <FaThumbsUp className="text-(--primary) text-5xl" />,
            title: "Tại sao chọn Becasun?",
            desc: "Ứng dụng IoT theo thời gian thực, lợi nhuận ổn định, tính minh bạch cao, đội ngũ chuyên môn giàu kinh nghiệm, cùng chính sách đầu tư an toàn.",
        },
        {
            icon: <FaGem className="text-(--primary) text-5xl" />,
            title: "Giá trị Cốt lõi",
            desc: "Trách nhiệm – Minh bạch – Đồng hành – Đổi mới. Chúng tôi cam kết tạo ra giá trị lâu dài, bền vững cho cả nhà đầu tư và xã hội.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Becasun – Giá trị tạo nên sự khác biệt
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {sections.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-center"
                        >
                            <div className="flex justify-center mb-6">{item.icon}</div>

                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
