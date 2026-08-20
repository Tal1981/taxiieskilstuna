'use client'

interface SuccessOverlayProps {
    show: boolean;
    message: string;
}

const SuccessOverlay = ({ show, message }: SuccessOverlayProps) => {

    if (!show) return null;

    return (
        <div 
        className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-black/75 backdrop-blur-sm animate-fadeIn"
        >
            <svg className="w-24 h-24 sm:w-32 sm:h-32 mb-6" viewBox="0 0 52 52">
                <circle
                    className="checkmark-circle"
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                />
                <path
                    className="checkmark-check"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l7 7 16-16"
                />
            </svg>
            <p 
            className="text-white text-xl sm:text-3xl font-bold tracking-wider text-center px-6"
            >
                {message}
            </p>
        </div>
    );
};

export default SuccessOverlay;