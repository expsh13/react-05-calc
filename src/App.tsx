import { ReactNode, useState } from "react";
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
  const [fieldText, setFieldText] = useState("");
  const handleNumBtnClick = (value: string) => {
    setFieldText((prev) => prev + value);
  };
  const handleBtnClear = () => {
    setFieldText("");
  };
  const handleBtnResult = () => {
    console.log(fieldText);
  };
  return (
    <div className="w-80 mx-auto">
      <p className="bg-white h-8 border border-gray-800 rounded mb-4 p-1">
        {fieldText}
      </p>
      <div className="grid gap-1">
        <ButtonLine>
          <Button value="1" onClick={handleNumBtnClick} />
          <Button value="2" onClick={handleNumBtnClick} />
          <Button value="3" onClick={handleNumBtnClick} />
          <Button value="+" onClick={handleNumBtnClick} />
        </ButtonLine>
        <ButtonLine>
          <Button value="4" onClick={handleNumBtnClick} />
          <Button value="5" onClick={handleNumBtnClick} />
          <Button value="6" onClick={handleNumBtnClick} />
          <Button value="-" onClick={handleNumBtnClick} />
        </ButtonLine>
        <ButtonLine>
          <Button value="7" onClick={handleNumBtnClick} />
          <Button value="8" onClick={handleNumBtnClick} />
          <Button value="9" onClick={handleNumBtnClick} />
          <Button value="*" onClick={handleNumBtnClick} />
        </ButtonLine>
        <ButtonLine>
          <Button value="c" onClick={handleBtnClear} />
          <Button value="0" onClick={handleNumBtnClick} />
          <Button value="." onClick={handleNumBtnClick} />
          <Button value="/" onClick={handleNumBtnClick} />
        </ButtonLine>
        <ButtonLine>
          <Button value="=" onClick={handleBtnResult} />
        </ButtonLine>
      </div>
    </div>
  );
};
