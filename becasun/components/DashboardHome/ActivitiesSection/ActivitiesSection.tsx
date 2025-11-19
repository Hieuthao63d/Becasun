interface Activity {
    title: string;
    description: string;
    image: string;
    stats: { value: string; label: string }[];
}

interface Props {
    activities: Activity[];
}

export default function ActivitiesSection({ activities }: Props) {
    return (
        <section className="my-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-green-800 mb-2">
                    Hoạt động Phát triển Bền vững
                </h2>
                <p className="text-gray-600">
                    Cùng Becasun tham gia các hoạt động bảo vệ môi trường và phát triển bền vững
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((a, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:-translate-y-1 transition-transform"
                    >
                        <div
                            className="h-52 bg-cover bg-center"
                            style={{ backgroundImage: `url(${a.image})` }}
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">{a.title}</h3>
                            <p className="text-gray-600 mb-3">{a.description}</p>
                            <div className="flex justify-between border-t pt-3 text-center">
                                {a.stats.map((s, j) => (
                                    <div key={j}>
                                        <div className="text-green-700 font-semibold">{s.value}</div>
                                        <div className="text-gray-500 text-sm">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
