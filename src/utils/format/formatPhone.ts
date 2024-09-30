const formatPhone = (phone: string) => {
  // input: 79999999999
  // output: +7 999 999 99-99
  return `+${phone.slice(0, 1)} ${phone.slice(1, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 9)}-${phone.slice(9)}`;
};

export default formatPhone;
