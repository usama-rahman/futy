/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <button className="rounded-md bg-[#5f77ff] px-3 py-2 text-[14px] font-semibold text-white ">
      {text}
    </button>
  );
};
export default Button;
