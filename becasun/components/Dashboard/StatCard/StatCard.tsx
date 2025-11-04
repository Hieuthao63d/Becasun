import { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: string;
    subtitle?: string;
    icon: ReactNode;
}

export default function StatCard({ title, value, subtitle, icon }: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-center mb-3">
                <div className="text-gray-500 font-medium">{title}</div>
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-green-600 text-white text-lg">
                    {icon}
                </div>
            </div>
            <div className="text-2xl font-bold text-green-800 mb-1">{value}</div>
            {subtitle && <div className="text-gray-500 text-sm">{subtitle}</div>}
        </div>
    );
}
