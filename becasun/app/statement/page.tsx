'use client';

import { useState } from "react";
import { FaDownload, FaArrowLeft } from "react-icons/fa";

export default function StatementPage() {
    const [billCycle, setBillCycle] = useState("10/2025");
    const [evnCharge, setEvnCharge] = useState(1200000);
    const [solarCredit, setSolarCredit] = useState(51200);
    // const [lastUpdated, setLastUpdated] = useState("28/10/2025, 10:28:35 PM");

    const amountDue = evnCharge - solarCredit;

    const handleDownloadPDF = () => {
        alert("Downloading PDF statement...(Chưa xong!!)");
    };

    return (
        <div className="page-container active max-w-3xl mx-auto p-6 sm:p-8  h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[var(--gray)] pb-4 mb-6">
                <h2 className="text-2xl font-semibold text-(--primary-dark)">
                    Hóa đơn Tháng:{" "}
                    <span className="text-(--primary) font-bold">{billCycle}</span>
                </h2>

                <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 bg-(--primary) text-white px-5 py-2.5 rounded-lg font-medium shadow hover:bg-[var(--primary-dark)] transition-all duration-200"
                >
                    <FaDownload />
                    <span>Tải PDF</span>
                </button>
            </div>

            {/* Bill Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-(--gray) p-6 sm:p-8 space-y-4">
                <div className="flex justify-between text-lg">
                    <span className="text-(--text-light) font-medium">
                        Phí Cơ bản EVN
                    </span>
                    <span className="font-semibold text-(--text)">
                        {evnCharge.toLocaleString()} VND
                    </span>
                </div>

                <div className="flex justify-between text-lg gap-4">
                    <span className="text-(--primary-dark) font-medium">
                        Giảm giá từ Credit Năng lượng Mặt trời
                    </span>
                    <span className="text-(--primary) font-semibold">
                        -{solarCredit.toLocaleString()} VND
                    </span>
                </div>

                <div className="border-t border-var(--gray) pt-4 flex justify-between text-lg font-bold">
                    <span className="text-(--primary-dark)">
                        Số tiền Phải thanh toán
                    </span>
                    <span className="text-(--primary-dark)">
                        {amountDue.toLocaleString()} VND
                    </span>
                </div>

                {/* <div className="text-sm text-(--text-light) text-right mt-2">
                    Cập nhật lần cuối:{" "}
                    <span className="font-medium text-(--primary-dark)">
                        28/10/2025, 10:28 PM
                    </span>
                </div> */}
            </div>

            {/* Back Button */}
            <div className="mt-8">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 font-medium text-(--primary) hover:text-(--primary-dark) transition-colors duration-200"
                >
                    <FaArrowLeft />
                    <span>Quay lại Trang chủ</span>
                </a>
            </div>
        </div>
    );
}
