import { forwardRef } from 'react';

function Root() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.66 10.44L20.68 14.62C19.84 18.23 18.18 19.69 15.06 19.39C14.56 19.35 14.02 19.26 13.44 19.12L11.76 18.72C7.59 17.73 6.3 15.67 7.28 11.49L8.26 7.30001C8.46 6.45001 8.7 5.71001 9 5.10001C10.17 2.68001 12.16 2.03001 15.5 2.82001L17.17 3.21001C21.36 4.19001 22.64 6.26001 21.66 10.44Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.16001 22.27 5.07001 21.2 3.78001 17.23L2.50001 13.28C1.22001 9.30998 2.28001 7.20998 6.25001 5.92998L7.83001 5.40998C8.24001 5.27998 8.63001 5.16998 9.00001 5.09998C8.70001 5.70998 8.46001 6.44998 8.26001 7.29998L7.28001 11.49C6.30001 15.67 7.59001 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.64 8.53003L17.49 9.76003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.66 12.4L14.56 13.14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
const EarnWage = forwardRef(Root);
export default EarnWage;
