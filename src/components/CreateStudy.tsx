import { Button, Input } from "@chakra-ui/react";

type Props = {
  title: string;
  detail: string;
  date: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDetail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: () => void;
};
export const CreateStudy = (props: Props) => {
  const {
    title,
    detail,
    date,
    onChangeTitle,
    onChangeDetail,
    onChangeDate,
    onClickButton,
  } = props;
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
