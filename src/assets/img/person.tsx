import React from 'react';

interface SearchIconAttributes {
  className?: string;
}

const Person: React.FC<SearchIconAttributes> = ({
  className = '',
}: SearchIconAttributes) => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 22 22"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <path d="M8,12h1v1h6v-1h1v-1h1V5h-1V4h-1V3H9v1H8v1H7v6h1V12z M9,7h1V6h1V5h2v1h1v1h1v2h-1v1h-1v1h-2v-1h-1V9H9V7z" />
        <polygon
          points="19,16 19,15 18,15 18,14 6,14 6,15 5,15 5,16 4,16 4,21 6,21 6,18 7,18 7,17 8,17 8,16 16,16 16,17 17,17 17,18 
		18,18 18,21 20,21 20,16 	"
        />
      </g>
    </svg>
  );
};

export default Person;
