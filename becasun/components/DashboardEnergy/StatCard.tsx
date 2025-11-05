interface StatCardProps {
    title: string;
    value: string;
    label: string;
}

export default function StatCard({ title, value, label }: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center hover:-translate-y-1 transition-transform">
            <div className="text-gray-600 font-medium mb-1">{title}</div>
            <div className="text-2xl font-bold text-green-800 mb-1">{value}</div>
            <div className="text-gray-500 text-sm">{label}</div>
        </div>
    )
};