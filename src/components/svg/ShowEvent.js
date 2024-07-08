import { forwardRef } from 'react';

function Root(props, ref) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.38 15.98V17.02C19.38 18.61 18.78 19.25 17.26 19.25H5.38V13.75H17.26C18.78 13.75 19.38 14.39 19.38 15.98Z"
        fill="#707070"
      />
      <path
        opacity="0.4"
        d="M14.38 7.48V8.52C14.38 10.11 13.77 10.75 12.26 10.75H5.38V5.25H12.26C13.77 5.25 14.38 5.89 14.38 7.48Z"
        fill="#707070"
      />
      <path
        d="M5.37998 22C4.96998 22 4.62998 21.66 4.62998 21.25V2.75C4.61998 2.33 4.95998 2 5.37998 2C5.79998 2 6.12998 2.34 6.12998 2.75V21.25C6.11998 21.66 5.78998 22 5.37998 22Z"
        fill="#707070"
      />
    </svg>
  );
}
const ShowEvent = forwardRef(Root);
export default ShowEvent;
