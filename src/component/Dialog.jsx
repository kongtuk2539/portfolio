import React from 'react';

function Dialog({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40">
            <div className="bg-[#F0B91E] flex flex-col justify-center gap-6 p-6 h-[250px] rounded shadow-lg text-center ">
                <p className="font-Lilita-One text-[48px] text-[#D2272B]">{message}</p>
                <div className='flex justify-center gap-12'>
                    <button
                        onClick={onConfirm}
                        className="mt-4 bg-[#FFFFFF] hover:bg-[#FFFFFF]/[0.8] font-Lilita-One text-[26px] text-[#F0B91E] px-4 py-2 rounded"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel}
                        className="mt-4 bg-[#FFFFFF] hover:bg-[#FFFFFF]/[0.8] font-Lilita-One text-[26px] text-[#D2272B]/[0.8] px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Dialog