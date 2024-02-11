type PropsType = {
  text: string;
};

export const Button = (props: PropsType) => {
  const { text } = props;
  return <p className="text-red-900">{text}</p>;
};
