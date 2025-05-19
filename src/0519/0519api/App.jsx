import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {

    //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "MXlS1mBZS2JxGtAZxV4bLDCPxIEdLokauNxJZpglX08";
    const [filterString, setFilterString] = useState("cat");

    //存放山選後的資料
    const [jsonData, setJonsData] = useState([]);

    //建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            //將資料寫入陣列 sonData
            setJonsData(...result.data.results);
            console.log(jsonData);

            
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        getPhotos();

    }, [])

    return (
        <>
            <h1>取得雲端資料</h1> <hr />
        
        </>

    )

}