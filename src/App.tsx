import { ReactNode } from "react";
import { Button } from "./components/Button/Button";
import "./output.css";

type ButtonLineType = {
  children: ReactNode;
};

const ButtonLine = (props: ButtonLineType) => {
  const { children } = props;
  return <div className="flex gap-1">{children}</div>;
};

export const App = () => {
  return (
    <div className="w-80 mx-auto">
      <p className="bg-white h-8 border border-gray-800 rounded mb-4"></p>
      <div className="grid gap-1">
        <ButtonLine>
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Button text="+" />
        </ButtonLine>
        <ButtonLine>
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" />
        </ButtonLine>
        <ButtonLine>
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="*" />
        </ButtonLine>
        <ButtonLine>
          <Button text="c" />
          <Button text="0" />
          <Button text="." />
          <Button text="/" />
        </ButtonLine>
        <ButtonLine>
          <Button text="=" />
        </ButtonLine>
      </div>
    </div>
  );
};
