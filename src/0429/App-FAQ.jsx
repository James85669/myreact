//摺疊QA => Accordion
//npm install motion
import { useState } from 'react';
import { RiIndeterminateCircleFill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";


function App() {
    //作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null);

    //FAQ的資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            ans: "答案1"
        },
        {
            id: 2,
            question: "題目2",
            ans: "答案2"
        },
        {
            id: 3,
            question: "題目3",
            ans: "答案3"
        }
    ];

    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                background: "#333",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* Accordion摺疊面板 */}
                <div style={{
                    width: "90%",
                    margin: "auto",
                    maxWidth: "1200px",
                    background: "#aaa",
                    padding: "10px",
                    borderRadius: "5px",
                }}>
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "6px",
                    }}>FAQ標題</h2>
                    {
                        //帶出陳列資料
                        questions.map((q) => {
                            return (
                                <div key={q.id} style={{ marginBottom: "4px" }}>
                                    {/* QA按鈕 */}
                                    <button>
                                        {/* 題目 */}
                                        {q.question}
                                        {/* icon */}
                                        {activeQuestion === q.id ? <RiIndeterminateCircleFill /> : <FaCirclePlus />}
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}
export default App