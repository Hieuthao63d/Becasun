import { useState } from "react";
import { FaPaperPlane, FaStar } from "react-icons/fa";

export default function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    return (
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mt-12">
            <h3 className="text-xl font-semibold text-(--primary-dark) mb-2">Đánh giá dịch vụ của chúng tôi</h3>
            <p className="text-gray-600 mb-6">
                Chia sẻ trải nghiệm của bạn để chúng tôi có thể cải thiện dịch vụ tốt hơn
            </p>

            <div className="flex gap-2 mt-2 mb-6"> {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} onClick={() => setRating(star)}
                    className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`} />))}
            </div>

            <p className="text-gray-600 mb-6">
                Nhận xét của bạn
            </p>
            <textarea
                className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] focus:ring-2 focus:ring-(--primary) outline-none"
                placeholder="Chia sẻ trải nghiệm của bạn với Becasun"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button
                type="button"
                className="mt-4 bg-(--primary) text-white cursor-pointer px-5 py-2 rounded-lg font-semibold hover:bg-(--primary-dark) flex items-center gap-2"
            >
                <FaPaperPlane /> Gửi đánh giá
            </button>
        </section>
    );
}
