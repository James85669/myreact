import axios from "axios";
import { useEffect, useRef, useState } from "react";
export default function App() {

    //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "MXlS1mBZS2JxGtAZxV4bLDCPxIEdLokauNxJZpglX08";
    const [filterString, setFilterString] = useState("cloud");

    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    //讀取變數
    const isLoading = useRef(false);

    // 當前頁數
    const currentPage = useRef(1);

    // 建立非同步方法，取得遠端資料
    const getPhotos = async (page = 1, isNew = true) => {
        try {

            //取得圖片前先寫入
            isLoading.current = true;
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString} &page=${page}`);
            // console.log(result);

            //由於加上頁數，不斷覆蓋，所以要保留之前的結果
            setJsonData((preData) => {
                //假如是新關鍵字，則回傳新結果
                if (isNew) {
                    return [...result.data.results];
                }
                //假如不是新關鍵字，則回傳舊結果+新結果
                return [...preData, ...result.data.results];


            });
            //更新頁數
            currentPage.current = page;
            // 1s 後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);

        } catch (error) {
            console.log(error)
        }
    }


    // 顯示陣列資料元件
    const ShowPhoto = () => {
        // console.log(jsonData)
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ margin: "3px" }}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }

    //建立搜尋元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div style={{ textAlign: "center", margin: "50px 0" }}>
                <label htmlFor="filter">Search</label>
                <input type="text" id="filter"
                    defaultValue={filterString}
                    onKeyDown={onSearchHandler} />
            </div>
        )

    }

    //按Enter鍵更改資料
    const onSearchHandler = (e) => {
        if (e.key === "Enter") {
            //更新關鍵字
            setFilterString(e.target.value);
        }
    }


    //列表高度
    const listRef = useRef(null);
    useEffect(() => {
        getPhotos(1, true);

        //滾動監聽涵試
        const scrollEvent = () => {
            // console.dir(listRef.current);

            //目前圖片列表高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight;
            if (!isLoading.current && window.scrollY >= height) {
                //頁數+1
                currentPage.current++;
                //同一個關鍵字的資料簿用覆蓋，所以補上false
                getPhotos(currentPage.current, false);


            }


        }
        //滾動監聽
        addEventListener('scroll', scrollEvent);
        //移除監聽(為了確保每次捲動時，正確的位置資料)
        return () => window.removeEventListener('scroll', scrollEvent);


    }, [filterString])




    return (


        <>

            <h1>取得遠端資料</h1><hr />

            <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} ref={listRef}>
                <ShowPhoto />
            </div>

        </>
    )
}
