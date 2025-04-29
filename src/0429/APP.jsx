import { useEffect, useState } from 'react'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";


export default function App() {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const slides = [
        { url: "./images/p1.jpg", title: "photo1" },
        { url: "./images/p2.jpg", title: "photo2" },
        { url: "./images/p3.jpg", title: "photo3" },
    ]

    //當 currentImgIndex 改變時，會再觸發useEffect
    useEffect(() => {
        //每3秒呼叫nextSlide()換下一張
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        //每3秒後，清除autoplay，這樣才能取得最新索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    //下一張
    const nextSlide = () => {
        //取得前一張的索引編號，檢查是否為最後一個編號
        //是=>回第一張，否=>跳下一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }
    //上一張
    const prevSlide = () => {
        //取得前一張的索引編號，檢查是否為第一個編號
        //是=>最後一張，否=>跳到前一張
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    //建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            //擺放icon的區域
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px", //將icon拆開，並且調整左右留白間距
            }}>
                {
                    direction === "left" ? (
                        <FaRegArrowAltCircleLeft size={50} onClick={onClick} />
                    ) : (
                        <FaRegArrowAltCircleRight size={50} onClick={onClick} />)
                }
            </div>
        )
    }

    return (
        <>
            {/*滿版最外層 */}
            <div className="wrapper" style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",
            }}>
                {/* 滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"
                }}>

                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
                    {/* 上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/* 下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>

        </>

    )

}
