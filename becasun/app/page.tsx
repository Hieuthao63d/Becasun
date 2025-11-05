'use client';

import ActivitiesSection from "@/components/DashboardHome/ActivitiesSection/ActivitiesSection";
import CompanyInfo from "@/components/DashboardHome/CompanyInfo/CompanyInfo";
import FeedbackForm from "@/components/DashboardHome/FeedbackForm/FeedbackForm";
import StatCard from "@/components/DashboardHome/StatCard/StatCard";
import WelcomeBanner from "@/components/DashboardHome/WelcomeBanner/WelcomeBanner";
import { FaCoins, FaBatteryFull, FaPiggyBank, FaLeaf } from "react-icons/fa";

export default function DashboardPage() {
  const activities = [
    {
      title: "Trồng cây xanh",
      description:
        "Tham gia các chương trình trồng cây xanh tại địa phương, góp phần tăng độ che phủ và cải thiện chất lượng không khí.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2072&q=80",
      stats: [
        { value: "1.200+", label: "Cây đã trồng" },
        { value: "85%", label: "Tỷ lệ sống" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* se them StartDate va EndDate useState sau */}
      <WelcomeBanner userName="Người dùng" startDate="01/10/2025" endDate="31/10/2025" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Tín dụng Năng lượng Tháng này" value="0 credits" subtitle="Tương đương 0 VND giảm giá" icon={<FaCoins />} />
        <StatCard title="Tổng Credit Đang Sở Hữu" value="0 credits" subtitle="Giá trị đầu tư hiện tại" icon={<FaBatteryFull />} />
        <StatCard title="Tổng Tiết kiệm Điện" value="0 VND" subtitle="Từ khi tham gia chương trình" icon={<FaPiggyBank />} />
        <StatCard title="CO₂ Tránh được" value="0 kg" subtitle="Tác động môi trường tích cực" icon={<FaLeaf />} />
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <button className="btn bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          <FaCoins className="inline mr-2" /> Xem Hóa đơn Chi tiết
        </button>
        <button className="btn border-2 border-green-600 text-green-700 px-5 py-2 rounded-lg hover:bg-green-600 hover:text-white">
          <FaLeaf className="inline mr-2" /> Bảng điều khiển Thời gian Thực
        </button>
      </div>

      <ActivitiesSection activities={activities} />
      <CompanyInfo />
      <FeedbackForm />
    </div>
  );
}
