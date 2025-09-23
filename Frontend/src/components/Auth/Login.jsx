import React, { useEffect, useRef } from "react";
import axios from "axios";

const Login = () => {
  const googleButtonRef = useRef(null);

  useEffect(() => {
    // Make sure Google script has loaded
    if (window.google) {
      /* Initialize the Google Sign-In */
      window.google.accounts.id.initialize({
        client_id: "682527723176-jmgchqucm46ho2t3ups5hdd8tb79cd27.apps.googleusercontent.com",
        callback: async (response) => {
          console.log("ID Token:", response.credential);

          try {
            console.log("hi");
            const { data } = await axios.post("http://localhost:3000/api/auth/google", {
              token: response.credential,
            });
            console.log("Backend response:", data);
          } catch (error) {
            console.error("Error verifying token:", error);
          }
        },
      });

      /* Render the Google Sign-In button */
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        { theme: "outline", size: "large" } // customization options
      );

      // Optionally auto prompt
      window.google.accounts.id.prompt();
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Google button will render inside this div */}
      <div ref={googleButtonRef}></div>
    </div>
  );
};

export default Login;
