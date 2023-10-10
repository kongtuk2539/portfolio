import React, { useEffect } from 'react';

function WarningDialog({ message, onClose, duration }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40">
            <div className="bg-[#D2272B] p-6 rounded shadow-lg text-center">
                <p className="font-Lilita-One text-[26px] text-[#FFFFFF]">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-[#FFFFFF] hover:bg-[#FFFFFF]/[0.8] font-Lilita-One text-[26px] text-[#D2272B] px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default WarningDialog