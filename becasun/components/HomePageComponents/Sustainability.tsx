import { FaTree, FaRecycle, FaWater } from "react-icons/fa";

export default function Sustainability() {
    const items = [
        {
            icon: <FaTree className="text-4xl text-green-700" />,
            title: "Trồng cây xanh",
            desc: "Hơn 1.200 cây xanh được trồng từ quỹ becasun."
        },
        {
            icon: <FaRecycle className="text-4xl text-blue-600" />,
            title: "Tái chế rác thải",
            desc: "Đã tái chế hơn 12 tấn rác nhựa tại địa phương."
        },
        {
            icon: <FaWater className="text-4xl text-cyan-600" />,
            title: "Bảo vệ nguồn nước",
            desc: "Hơn 8km sông/hồ được làm sạch."
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Hoạt động phát triển bền vững</h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((item, i) => (
                        <div key={i} className="p-8 bg-white rounded-xl shadow hover:-translate-y-1 transition text-center">
                            {item.icon}
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
