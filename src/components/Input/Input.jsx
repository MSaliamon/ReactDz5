import React from 'react';
const Input = React.forwardRef(({ type, placeholder, ...rest }, ref) => {
  return <input type={type} placeholder={placeholder} ref={ref} {...rest} />;
});
export default Input;