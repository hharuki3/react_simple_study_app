import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export const CreateStudy = () => {
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const onClickButton = () => {
    console.log(title);
    console.log(detail);
    console.log(date);
  }
  return (
    <div>
      <h2>勉強したこと/ものを追加</h2>
      <Input placeholder="タイトル" value={title} onChange={onChangeTitle} />
      <Input placeholder="詳細" value={detail} onChange={onChangeDetail} />
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        value={date}
        onChange={onChangeDate}
      />
      <Button onClick={onClickButton}>追加</Button>
    </div>
  );
};
