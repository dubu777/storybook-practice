import { useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        onChange={() => {}}
        placeholder="텍스트입력해"
        value=""
        iconAlt="icon"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        errorMessage="텍스트를 확인해주세요"
        isError={isError}
        onIconClick={() => {}}
      />
      <div className="my-28"/>
      <Label htmlFor="address">이메일</Label>
      <DefaultTextField
        id="address"
        onChange={() => {}}
        placeholder="텍스트입력해"
        value=""
        iconAlt="icon"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        errorMessage="텍스트를 확인해주세요"
        isError={isError}
        onIconClick={() => {}}
      />
      <button onClick={() => setIsError((prev) => !prev)}>에러 버튼</button>
    </>
  );
}

export default App;
