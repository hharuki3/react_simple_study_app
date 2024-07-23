import { Button, Flex, Heading, Input } from "@chakra-ui/react";

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
      <Heading size="lg">勉強したこと/ものを追加</Heading>
      <Flex mx={20} px={2}>
        <Input
          placeholder="タイトル"
          value={title}
          onChange={onChangeTitle}
          mb={4}
          size="md"
        />
        <Input
          placeholder="詳細"
          value={detail}
          onChange={onChangeDetail}
          mb={4}
        />
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          value={date}
          onChange={onChangeDate}
          mb={4}
        />
        <Button onClick={onClickButton} colorScheme="teal" size="md" px={10}>
          追加
        </Button>
      </Flex>
    </div>
  );
};
