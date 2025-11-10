// const Checkbox = ({
//   id,
//   text,
//   className,
//   checkboxClassName,
//   labelClassName,
//   checked,
//   ...props
// }) => {
//   return (
//     <div className={`relative flex items-center ${className}`}>
//       <div className="flex items-center h-5 ">
//         <input
//           id={id}
//           type="checkbox"
//           className={`w-4 h-4 rounded cursor-pointer
//             ${checkboxClassName}`}
//           checked={checked}
//           {...props}
//         />
//       </div>

//       {text && (
//         <label
//           htmlFor={id}
//           className={`ml-3 text-md cursor-pointer font-medium 
//             ${labelClassName}`}
//         >
//           {text}
//         </label>
//       )}
//     </div>
//   );
// };
// export default Checkbox;




const Checkbox = ({
  id,
  text,
  className = "",
  checkboxClassName = "",
  labelClassName = "",
  checked,
  ...props
}) => {
  return (
    <div
      className={`relative flex items-center gap-2 select-none ${className}`}
    >
      {/* Checkbox input */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        {...props}
        className={`w-5 h-5 text-blue-600 border-gray-300 rounded cursor-pointer 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200 
          ${checkboxClassName}`}
      />

      {/* Label text */}
      {text && (
        <label
          htmlFor={id}
          className={`cursor-pointer text-gray-800 hover:text-blue-600 font-medium text-sm transition-colors duration-200 ${labelClassName}`}
        >
          {text}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
