const Section = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`flex flex-grow items-center space-x-3 text-sm p-4 hover:bg-gray-100 border-${color}-500 ${
        selected && `text-${color}-500 bg-gray-200 border-b-2`
      }`}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
