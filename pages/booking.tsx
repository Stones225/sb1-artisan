import React from 'react';

const Booking = () => {
  return (
    <div className="pt-8 pb-20 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          Prendre rendez-vous
        </h1>
        <div className="mb-12">
          <iframe
            src="https://calendly.com/your-calendar"
            className="w-full h-[630px] border-none rounded-xl shadow-lg"
            title="Calendly"
          />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">
            Moyens de paiement acceptés
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Orange_logo.png" alt="Orange Money" className="h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Wave_logo.png/320px-Wave_logo.png" alt="Wave" className="h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
