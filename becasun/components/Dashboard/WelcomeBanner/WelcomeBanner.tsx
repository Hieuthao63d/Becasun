import { FaCalendarAlt } from "react-icons/fa";

interface WelcomeBannerProps {
  userName: string;
  startDate: string,
  endDate: string
}

export default function WelcomeBanner({
  userName,
  startDate,
  endDate
}: WelcomeBannerProps) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-2xl mb-8 shadow-md relative overflow-hidden">
      <h2 className="text-2xl font-semibold mb-2">
        Chào mừng {userName} đến với Becasunver4
      </h2>
      <p className="opacity-90">
        Đầu tư thông minh - Tiết kiệm bền vững - Bảo vệ môi trường
      </p>
      <div className="flex items-center gap-2 mt-4 opacity-90">
        <FaCalendarAlt />
        <span>Chu kỳ hiện tại: {startDate} - {endDate}</span>
      </div>
    </div>
  );
}
