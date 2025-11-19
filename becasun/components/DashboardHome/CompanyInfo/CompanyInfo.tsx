import { FaSolarPanel, FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";

export default function CompanyInfo() {
    return (
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mt-12">
            <div className="flex items-center gap-4 mb-5">

                <div className="w-12 h-12 bg-(--primary-dark) text-white rounded-xl flex items-center justify-center text-2xl">
                    <FaSolarPanel />
                </div>
                <h3 className="text-xl font-semibold text-(--primary-dark)">Thông tin BECASUN</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-2 text-(--primary-dark)">Địa chỉ doanh nghiệp</h4>
                    <p>
                        số A, toà B, đường C, Thủ Dầu Một, Bình Dương
                    </p>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt /> Hotline: 1800 1234
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope /> info25@gmail.vn
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGlobe /> www.becasun.vn
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-(--primary-dark) mb-2">Giờ làm việc</h4>
                    <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    <p>Thứ 7: 8:00 - 12:00</p>
                    <p>Chủ nhật: Nghỉ</p>
                </div>
            </div>
        </section>
    );
}
