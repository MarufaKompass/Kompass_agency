import { forwardRef } from 'react';

function Root() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.9299 6.76001L18.5599 20.29C18.3199 21.3 17.4199 22 16.3799 22H3.23989C1.72989 22 0.649901 20.5199 1.0999 19.0699L5.30989 5.55005C5.59989 4.61005 6.46991 3.95996 7.44991 3.95996H19.7499C20.6999 3.95996 21.4899 4.53997 21.8199 5.33997C22.0099 5.76997 22.0499 6.26001 21.9299 6.76001Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.67993 6.38L10.7199 2.06006"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3799 6.39001L17.3199 2.05005"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.69995 12H15.7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.69995 16H14.7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
const Appoint = forwardRef(Root);
export default Appoint;
