import { useState, useEffect } from "react"
import RootLayout from "./layouts/RootLayout"
import LoginLayout from "./layouts/LoginLayout"
import RegisterLayout from "./layouts/RegisterLayout"
import ForgotPassLayout from "./layouts/ForgotPassLayout"
import ImageLogo from "/assets/logo-app.png"
import ProfileLayout from "./layouts/ProfileLayout"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-poppins">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <img src={ImageLogo} className="w-[300px] absolute top-1/2 -translate-y-1/2 animate-fade-in-out" alt="Loading Logo" />
        </div>
      ) : (
        <div className="opacity-0 animate-fade-in">
          <RootLayout />
          <LoginLayout />
          <RegisterLayout />
          <ForgotPassLayout />
          <ProfileLayout />
        </div>
      )}
    </div>
  );
}

export default App