import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Dialog from './Dialog';
import WarningDialog from './WarningDialog';
import SuccessDialog from './SuccessDialog';

function Contact() {
    const form = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const openWarningDialog = () => {
        setIsWarningOpen(true);
    };

    const closeWarningDialog = () => {
        setIsWarningOpen(false);
    };

    const openSuccessDialog = () => {
        setIsSuccessOpen(true);
    };

    const closeSuccessDialog = () => {
        setIsSuccessOpen(false);
    };


    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        openDialog();
    };


    const handleConfirm = () => {
        // Get form data
        const formData = new FormData(form.current);

        // Check if any of the form fields are empty
        let isFormValid = true;

        formData.forEach((value) => {
            if (!value.trim()) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            closeDialog();
            openWarningDialog();
            return;
        }

        // Perform your email sending logic here
        emailjs
            .sendForm('service_lq3ybbq', 'template_gge11nt', form.current, 'B1CfCaJTVT8i25sG3')
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    closeDialog();
                    openSuccessDialog();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const handleCancel = () => {
        closeDialog(); // Close the dialog if canceled
    };

    return (
        <div id='contact' className='h-auto pt-14 pb-[120px]' >
            <div className='mb-8 text-center font-Lilita-One text-[48px] text-[#D2272B]'>
                <h2>Contact</h2>
            </div>
            <div className='flex items-center gap-16'>
                <div className='w-[600px]'>
                    <img src="/src/assets/img/pf1.png" alt="" />
                </div>
                <div className='flex flex-col gap-8 mt-10 ml-10'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col mb-4'>
                            <p className='font-Lilita-One text-[28px]'>Name</p>
                            <input type="text" name="user_name" className='p-6 font-Nunito font-bold w-[480px] h-[60px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <p className='font-Lilita-One text-[28px]'>Email</p>
                            <input type="email" name="user_email" className='p-6 font-Nunito font-bold w-[480px] h-[60px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Lilita-One text-[28px]'>Message</p>
                            <textarea name="message" className='p-6 font-Nunito font-bold w-[480px] h-[180px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <button type="submit" className='mt-6 font-Lilita-One text-[26px] text-[#D2272B] w-[480px] h-[60px] rounded-md bg-[#F0B91E] hover:bg-[#F0B91E]/[0.8] ring-2 ring-[#D2272B] hover:ring-4 '>Submit</button>
                        </div>
                    </form>
                    {isOpen && (
                        <Dialog
                            message="Do you want to send a message?"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
                    {/* ... your form and button code ... */}
                    {isWarningOpen && (
                        <WarningDialog
                            message="Please fill out the information completely."
                            onClose={closeWarningDialog}
                            duration={3000} // Set the duration to 3 seconds (3000 milliseconds)
                        />
                    )}
                    {isSuccessOpen && (
                        <SuccessDialog
                            message="Message sent successfully."
                            onClose={closeSuccessDialog}
                            duration={3000} // Set the duration to 3 seconds (3000 milliseconds)
                        />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Contact