import { CreateStudy } from "./components/CreateStudy"
import { StudyList } from "./components/StudyList"

export const Study = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>勉強アプリ</h1>
            {/* ここにコンポーネントを差し込む */}
            <CreateStudy />
            <StudyList />
        </div>
    )
}