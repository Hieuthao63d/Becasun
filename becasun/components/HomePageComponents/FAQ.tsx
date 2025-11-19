export default function FAQ() {
    const faqs = [
        { q: "Credit là gì?", a: "Credit là phần công suất bạn sở hữu trong hệ thống điện mặt trời." },
        { q: "Lợi nhuận lấy từ đâu?", a: "Từ sản lượng điện tạo ra và phần chi phí điện được tiết kiệm." },
        { q: "Có rút tiền trước hạn không?", a: "Bạn có thể bán lại credit cho Becasun hoặc nhà đầu tư khác." },
        { q: "Dữ liệu IoT có chính xác không?", a: "Dữ liệu được cập nhật trực tiếp từ hệ thống inverter đạt chuẩn EVN." }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details open key={i} className="bg-white p-4 rounded-lg shadow">
                            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                            <p className="mt-2 text-gray-600">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
