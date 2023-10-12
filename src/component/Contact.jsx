import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Dialog from './Dialog';
import WarningDialog from './WarningDialog';
import SuccessDialog from './SuccessDialog';
import Spinner from './Spinner';
import DogUser from '../assets/img/pf1.png';
import iconPhone from '../assets/img/icon-phone.png'
import iconMail from '../assets/img/icon-mail.png'
import iconLinked from '../assets/img/icon-linkedin.png'

function Contact() {
    const form = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for controlling the spinner

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
        // Show the spinner while submitting
        setIsSubmitting(true);

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
            setIsSubmitting(false); // Hide the spinner
            return;
        } else {
            // Perform your email sending logic here
            closeDialog();
            emailjs
                .sendForm('service_lq3ybbq', 'template_gge11nt', form.current, 'B1CfCaJTVT8i25sG3')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                ).finally(() => {
                    setTimeout(() => {
                        setIsSubmitting(false); // Hide the spinner after sending or if there's an error
                        openSuccessDialog();
                        form.current.reset();
                    }, 2000);
                });
        }

    };

    const handleCancel = () => {
        closeDialog(); // Close the dialog if canceled
    };

    return (
        <div id='contact' className='h-auto pt-14 pb-[120px]' >
            <div className='mb-0 lg:mb-8 text-center font-Lilita-One text-[48px] text-[#D2272B]'>
                <h2>Contact</h2>
            </div>
            <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-16 '>
                <div className='flex flex-col items-center gap-12'>
                    <div className='w-[280px] hidden lg:block'>
                        <img src={DogUser} alt="" />
                    </div>
                    <div className='flex flex-col gap-2 border-2 p-4 border-[#D2272B] rounded' data-aos="zoom-out-up">
                        <div className='relative -top-[45px] left-[180px] font-Lilita-One text-[24px] w-fit p-2 rounded bg-[#F0B91E] text-[#D2272B]'>
                            <h2>Talk to me</h2>
                        </div>
                        <div className='flex flex-col gap-1 w-[300px] items-center p-2 bg-[#FCE097] rounded'>
                            <div className='flex items-center gap-1'>
                                <h3 className='font-Lilita-One text-[18px]'>
                                    Email
                                </h3>
                                <img src={iconMail} className='w-6' />
                            </div>
                            <p className='font-Nunito text-base font-bold'>
                                t.kongtuk@gmail.com
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 w-[300px] items-center p-2 bg-[#FCE097] rounded'>
                            <div className='flex items-center gap-1'>
                                <h3 className='font-Lilita-One text-[18px]'>
                                    LinkedIn
                                </h3>
                                <img src={iconLinked} className='w-6' />
                            </div>
                            <p className='font-Nunito text-base font-bold'>
                                Tho Kongtuk
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 w-[300px] items-center p-2 bg-[#FCE097] rounded'>
                            <div className='flex items-center gap-1'>
                                <h3 className='font-Lilita-One text-[18px]'>
                                    Phone
                                </h3>
                                <img src={iconPhone} className='w-6' />
                            </div>
                            <p className='font-Nunito text-base font-bold'>
                                (+66) 834930546
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' mt-10 ml-0 lg:ml-10 w-full lg:w-auto p-6 lg:p-0'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col mb-4'>
                            <p className='font-Lilita-One text-[28px]'>Name</p>
                            <input type="text" name="user_name" className='p-6 font-Nunito font-bold w-full lg:w-[480px] h-[60px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <p className='font-Lilita-One text-[28px]'>Email</p>
                            <input type="email" name="user_email" className='p-6 font-Nunito font-bold w-full lg:w-[480px] h-[60px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Lilita-One text-[28px]'>Message</p>
                            <textarea name="message" className='p-6 font-Nunito font-bold w-full lg:w-[480px] h-[180px] rounded-md bg-[#FCE097] ring-2 ring-[#D2272B] hover:ring-4 ' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <button type="submit" className='mt-6 font-Lilita-One text-[26px] text-[#D2272B] w-full lg:w-[480px] h-[60px] rounded-md bg-[#F0B91E] hover:bg-[#F0B91E]/[0.8] ring-2 ring-[#D2272B] hover:ring-4 '>Submit</button>
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
                    <Spinner isVisible={isSubmitting} /> {/* Show spinner when isSubmitting is true */}
                </div>
            </div>
        </div >
    )
}

export default Contact