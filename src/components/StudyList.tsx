import { Button } from "@chakra-ui/react";

type Props = {
  completeStudy: Array<Array<string>>;
  onClickDelete: (index: number) => void;
};
export const StudyList = (props: Props) => {
  const {completeStudy, onClickDelete } = props;
  return (
    <div>
      <h2>勉強した内容一覧</h2>
      {completeStudy.map((study, index) => {
        return (
          <div key={index} style={{marginBottom: "10px"}}>
            <span style={{ fontWeight: "bold" }}>{study[0]}</span>
            <span>{study[1]}</span>
            <span>{study[2]}</span>
            <Button onClick={() => onClickDelete(index)}>削除</Button>
          </div>
        );
      })}
    </div>
  );
};
