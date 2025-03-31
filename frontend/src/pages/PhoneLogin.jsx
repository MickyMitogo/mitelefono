import { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function PhoneLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('SEND_OTP'); // 'SEND_OTP' o 'VERIFY_OTP'

  const handleSendOTP = async () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
    setStep('VERIFY_OTP');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {step === 'SEND_OTP' ? (
        <div className="bg-white p-8 rounded shadow">
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="+51 987654321" 
            className="p-2 border mb-4 w-full"
          />
          <div id="recaptcha-container"></div>
          <button 
            onClick={handleSendOTP}
            className="bg-blue-500 text-white p-2 w-full rounded"
          >
            Enviar OTP
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded shadow">
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            placeholder="Código OTP" 
            className="p-2 border mb-4 w-full"
          />
          <button 
            onClick={() => {/* Lógica para verificar OTP */}}
            className="bg-green-500 text-white p-2 w-full rounded"
          >
            Verificar
          </button>
        </div>
      )}
    </div>
  );
}