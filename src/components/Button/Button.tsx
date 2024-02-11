type PropsType = {
  text: string;
};

export const Button = (props: PropsType) => {
  const { text } = props;
  return (
    <button className="bg-gray-500 text-gray-100 hover:bg-blue-500 rounded w-8 h-8">
      {text}
    </button>
  );
};
