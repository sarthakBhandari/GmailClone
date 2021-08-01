const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <div
      className={`flex items-center px-3 rounded-r-full font-semibold text-gray-500 h-8 group relative ${
        selected
          ? "bg-red-200 text-red-600"
          : "hover:bg-red-200 hover:text-red-600 duration-200"
      }`}
    >
      <Icon className="h-5" />
      <h3 className=" ml-3">{title}</h3>
      <p
        className={`${
          !selected ? "opacity-0" : "opacity-100"
        } absolute right-3 group-hover:opacity-100`}
      >
        {number}
      </p>
    </div>
  );
};

export default SidebarOption;
