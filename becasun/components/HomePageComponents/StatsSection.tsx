export default function StatsSection() {
    const stats = [
        { value: "12.5 MWh", label: "Năng lượng đã tạo ra" },
        { value: "8.2 Tấn", label: "CO₂ đã tránh được" },
        { value: "5,200+", label: "Thành viên tham gia" },
        { value: "320+", label: "Hộ gia đình hưởng lợi" }
    ];

    return (
        <section className="py-20 bg-(--primary) text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                        <p className="opacity-90">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
