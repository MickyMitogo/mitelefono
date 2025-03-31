export default function PhoneLogin() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <input type="tel" placeholder="+51 987654321" className="p-2 border" />
        <button className="bg-blue-500 text-white p-2">Enviar OTP</button>
      </div>
    );
  }