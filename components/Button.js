// components/Button.js
import React from 'react';

const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyles = "w-full py-2 rounded-lg font-semibold";
  const variantStyles = variant === "primary" ? "bg-blue-900 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
};

export default Button;
