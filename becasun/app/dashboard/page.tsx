"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Link from "next/link";
import StatCard from "@/components/DashboardEnergy/StatCard";
import ChartCard from "@/components/DashboardEnergy/ChartCard";
import ProfitCalculator from "@/components/ProfitCalculator/ProfitCalculator";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface EnergyStats {
    currentPower: number;
    todayEnergy: number;
    monthEnergy: number;
    co2Avoided: number;
    lastUpdated: string;
}

export default function RealTimeDashboard() {
    const [data, setData] = useState<EnergyStats>({
        currentPower: 0,
        todayEnergy: 0,
        monthEnergy: 0,
        co2Avoided: 0,
        lastUpdated: "--:--:--",
    });

    // Live data simulation energy
    useEffect(() => {
        const interval = setInterval(() => {
            setData({
                currentPower: +(Math.random() * 5).toFixed(2),
                todayEnergy: +(Math.random() * 20).toFixed(2),
                monthEnergy: +(Math.random() * 500).toFixed(2),
                co2Avoided: +(Math.random() * 200).toFixed(2),
                lastUpdated: new Date().toLocaleTimeString(),
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    //mock data
    const liveOutputData = {
        labels: Array.from({ length: 10 }, (_, i) => `${i + 1}h`),
        datasets: [
            {
                label: "Công suất (kW)",
                data: Array.from({ length: 10 }, () => Math.random() * 5),
                fill: false,
                borderColor: "#2E7D32",
                tension: 0.3,
            },
        ],
    };

    const savingsData = {
        labels: ["10/2024", "11/2024", "12/2024", "01/2025", "02/2025", "03/2025", "04/2025", "05/2025"],
        datasets: [
            {
                label: "Tiết kiệm (VND)",
                data: [120000, 150000, 180000, 220000, 210000, 250000, 300000, 280000],
                backgroundColor: "rgba(46, 125, 50, 0.5)",
                borderColor: "#2E7D32",
                fill: true,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
                Bảng điều khiển Năng lượng Cộng đồng
            </h2>
            <p className="text-gray-600 mb-8">
                Dữ liệu thời gian thực từ hệ thống pin năng lượng mặt trời Becasun
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard title="Công suất Hiện tại" value={`${data.currentPower} kW`} label="Năng lượng đang sản xuất" />
                <StatCard title="Năng lượng Hôm nay" value={`${data.todayEnergy} kWh`} label="Tổng sản xuất hôm nay" />
                <StatCard title="Năng lượng Tháng này" value={`${data.monthEnergy} kWh`} label="Từ đầu tháng" />
                <StatCard title="CO₂ Tránh được" value={`${data.co2Avoided} kg`} label="Tác động môi trường" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ChartCard title="Đường cong Sản lượng Thời gian Thực">
                    <Line data={liveOutputData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </ChartCard>

                <ChartCard title="Tiết kiệm Điện Hàng tháng (10/2024 - 12/2025)">
                    <Line data={savingsData} options={{ responsive: true }} />
                </ChartCard>
            </div>

            <div className="text-right text-sm text-gray-500 mb-6">
                Cập nhật lần cuối: <span className="font-semibold">{data.lastUpdated}</span>
            </div>

            <div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                    <FaArrowLeft /> Quay lại Trang chủ
                </Link>
            </div>

            <ProfitCalculator/>
        </div>
    );
}