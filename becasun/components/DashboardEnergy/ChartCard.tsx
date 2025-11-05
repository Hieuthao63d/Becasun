
interface ChartCardProps {
    title: string;
    children: React.ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-3">
                <div className="font-semibold text-green-800">{title}</div>
            </div>
            <div className="h-[250px]">{children}</div>
        </div>
    )
};