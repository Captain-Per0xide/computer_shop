import React from "react";
import Image from "next/image";

interface CustomerReview {
    id: number;
    name: string;
    review: string;
    rating: number;
    avatar?: string;
}

interface CustomerReviewsProps {
    reviews: CustomerReview[];
}

const stars = (count: number) =>
    Array.from({ length: 5 }, (_, i) =>
        i < count ? (
            <span key={i} className="text-yellow-400">★</span>
        ) : (
            <span key={i} className="text-gray-400">★</span>
        )
    );

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => (
    <section className="w-full py-8">
        <h2 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wider text-center">
            Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-xl p-6 shadow-lg flex flex-col items-center border border-blue-800"
                >
                    {review.avatar ? (
                        <div className="w-16 h-16 rounded-full mb-3 border-2 border-blue-400 overflow-hidden flex items-center justify-center bg-red-900">
                            <Image
                                src={review.avatar}
                                alt={review.name}
                                width={64}
                                height={64}
                                className="object-cover w-16 h-16"
                            />
                        </div>
                    ) : (
                        <div className="w-16 h-16 rounded-full mb-3 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 flex items-center justify-center text-2xl text-white font-bold border-2 border-blue-400 shadow-lg">
                            {review.name[0]}
                        </div>
                    )}
                    <div className="flex mb-2">{stars(review.rating)}</div>
                    <p className="text-gray-200 text-center mb-2">&ldquo;{review.review}&rdquo;</p>
                    <span className="text-blue-300 font-semibold">&ndash; {review.name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default CustomerReviews;
