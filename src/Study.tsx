import { useState } from "react";
import { CreateStudy } from "./components/CreateStudy";
import { StudyList } from "./components/StudyList";
import { Heading } from "@chakra-ui/react";

export const Study = () => {
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [completeStudy, setCompleteStudy] = useState<Array<Array<string>>>([]);

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
    setCompleteStudy([...completeStudy, [title, detail, date]]);
    setTitle("");
    setDetail("");
    setDate("");
  };
  const onClickDelete = (index: number) => {
    const updatedStudy = [...completeStudy];
    updatedStudy.splice(index, 1);
    setCompleteStudy(updatedStudy);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Heading as="h1" mb={5}>勉強アプリ</Heading>
      {/* ここにコンポーネントを差し込む */}
      <CreateStudy
        title={title}
        detail={detail}
        date={date}
        disabled={title === "" || detail === "" || date === ""}
        onChangeDate={onChangeDate}
        onChangeDetail={onChangeDetail}
        onChangeTitle={onChangeTitle}
        onClickButton={onClickButton}
      />
      <StudyList completeStudy={completeStudy} onClickDelete={onClickDelete} />
    </div>
  );
};
