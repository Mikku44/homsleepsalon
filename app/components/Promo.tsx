import { useState } from "react";
import { Link } from "react-router";


interface PromotionModalProps {

    title: string;
    description?: string;
    imageUrl?: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function PromotionModal({

    title,
    description,
    imageUrl,
    ctaText,
    ctaLink,
}: PromotionModalProps) {

    function onClose() {
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(true);
    if (!isOpen) return null;


    const whatsApp = `https://wa.me/66657479789?text=${ctaText}`;
    const line = `https://line.me/R/ti/p/@408onese?text=${ctaText}`

    return (
        <div
            className="fixed inset-0 z-99  flex items-center justify-center bg-black/50"
            onClick={onClose} // close when clicking overlay
        >
            <div
                className="bg-white rounded-xl shadow-xl max-h-[90vh] overflow-auto max-w-md w-full p-6 relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <div className="text-xl">X</div>
                </button>

                {/* Image */}
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full max-w-[300px] mx-auto h-fit object-cover rounded-md mb-4"
                    />
                )}

                <div className="flex flex-col gap-2">
                    {/* Title & Description */}
                    <div className="">
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        {description && <p className="text-gray-600 mb-4">{description}</p>}
                    </div>
                    {/* CTA Button */}
                    {ctaText && ctaLink && (
                        <Link to={ctaLink}
                            className='font-medium h-[40px] w-[100px] bg-[var(--primary-color)] 
                                text-black/80 flex items-center justify-center'
                        >
                            {("Book now")}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
