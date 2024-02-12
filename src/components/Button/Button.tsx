type PropsType = {
  value: string;
  onClick: (value: string) => void;
};

export const Button = (props: PropsType) => {
  const { value, onClick } = props;
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClick(e.currentTarget.value)
      }
      value={value}
      className="bg-gray-500 text-gray-100 hover:bg-blue-500 rounded w-8 h-8"
    >
      {value}
    </button>
  );
};
