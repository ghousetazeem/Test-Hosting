import React from 'react';

const PaymentCancelled = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-6 md:w-1/3 w-11/12">
                <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.656 16.656a1.25 1.25 0 1 1-1.768 1.768L12 13.768l-3.888 3.888a1.25 1.25 0 1 1-1.768-1.768L10.232 12 6.344 8.112a1.25 1.25 0 1 1 1.768-1.768L12 10.232l3.888-3.888a1.25 1.25 0 1 1 1.768 1.768L13.768 12l3.888 3.888z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold">Payment Cancelled</h3>
                    <p className="text-gray-600 my-2">Your payment was not successful. Please try again.</p>
                    <p>Have a great day!</p>
                    <div className="py-10 text-center">
                        <a href="/dashboard" className="px-12 bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded">
                            GO BACK
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentCancelled;
