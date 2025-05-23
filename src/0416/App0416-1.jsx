//資料來源: https://data.gov.tw/dataset/6069
//天氣圖示: https://www.cwa.gov.tw/V8/C/K/Weather_Icon.html
//因為氣象圖示檔多，
// import 晴時多雲 from './weatherIcon/晴時多雲.svg';
import { useState } from "react";
import { useEffect } from "react";

function App() {
    //使用useEffect建立變數
    const [city, setCitys] = useState([]);

    //渲染後，使用useEffect取得天氣資料
    useEffect(() => {
        (async () => {

            //取得遠端資料
            // const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            const data = await axios.get('./api/F-C0032-001.json');
            //查看是否連上jason檔
            // console.log(data);

            //解構名稱縣市的氣象資訊
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            //建立時間物件
            // const options = {
            //     hour: 'numeric',
            //     minute: 'numeric'
            // }


            //將取得的天氣資料，透過setLocation方法，更新location變數資料
            setCitys(location);
        })();
    }, [])

    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* 一列兩欄 */}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈，顯示所有縣市 */}
                {
                    city.map((city) => {
                        return (
                            < div className="col" key={city.locationName} >
                                {/* 卡片樣式 */}
                                < div className="card text-center" >
                                    {/* 頭: 卡片標題 */}
                                    < div className="card-header" >
                                        {/* <div className="h4 my-0"> */}
                                        {/* 台北市 */}
                                        {/* <div /> */}
                                        {city.locationName}

                                    </div>
                                    {/* 身: 卡片內容 */}
                                    <div className="row row-cols-3">
                                        {/* 顯示每個縣市的3個欄位資訊 */}
                                        {
                                            city.weatherElement[0].time.map((time, index) => {
                                                return (
                                                    <div className="col" key={index} >
                                                        {/* 日期 */}
                                                        <div className="h4 my-0">
                                                            {/* 16日 */}
                                                            {/* 使用日期時間函數 toLocalString */}
                                                            {
                                                                new Date(time.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        {/* 時間 */}
                                                        {/* 上午6:00<br />
                                                        ~<br />
                                                        下午6:00<br /> */}
                                                        {
                                                            new Date(time.startTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />~<br />
                                                        {
                                                            new Date(time.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />
                                                        {/* 天氣圖: 使用執行路徑，顯示所以要放在public，才讀的到 */}
                                                        <img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                                        {/* 天氣名稱 */}
                                                        <div className="mt-2">
                                                            {/* 晴時多雲 */}
                                                            {time.parameter.parameterName}
                                                        </div>
                                                        {/* 降雨機率 */}
                                                        <div className="mt-2">
                                                            {/* icon */}
                                                            <i className="bi bi-umbrella">
                                                                {/* 10% */}
                                                                {city.weatherElement[4].time[index].parameter.parameterName}
                                                            </i>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div >
                            </div >
                        )
                    })
                }

            </div >
        </>
    )
}
export default App
