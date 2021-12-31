const IconButton = ({ src, tooltip, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-alpha rounded-md p-4 group relative"
    >
      <img src={src} alt="" />
      <span className="hidden group-hover:block absolute bg-gray-900 top-full left-full w-max px-2 rounded">
        {tooltip}
      </span>
    </button>
  );
};

export default IconButton;
