import { FaSolarPanel, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function CompanyInfo() {
    return (
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mt-12">
            <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-2xl">
                    <FaSolarPanel />
                </div>
                <h3 className="text-xl font-semibold text-green-800">Thông tin Becasunver4</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-2 text-green-700">Địa chỉ doanh nghiệp</h4>
                    <p>
                        Tầng 15, Tòa nhà WTC Tower, Số 1 đường Hùng Vương, Phường Hòa Phú, Thành phố Thủ Dầu Một, tỉnh Bình Dương
                    </p>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaPhone /> Hotline: 1800 1234
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope /> info@becasunver4.vn
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGlobe /> www.becasunver4.vn
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-green-700 mb-2">Giờ làm việc</h4>
                    <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    <p>Thứ 7: 8:00 - 12:00</p>
                    <p>Chủ nhật: Nghỉ</p>

                    <h4 className="font-semibold text-green-700 mt-4 mb-2">Dịch vụ</h4>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Đầu tư năng lượng mặt trời cộng đồng</li>
                        <li>Tư vấn lắp đặt hệ thống</li>
                        <li>Bảo trì và bảo hành</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
