import React from 'react';

interface SearchIconAttributes {
  className?: string;
}

export const Cart: React.FC<SearchIconAttributes> = ({
  className = '',
}: SearchIconAttributes) => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      id="memory-Cart"
      className={className}
    >
      <path d="M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" />
    </svg>
  );
};

export default Cart;
