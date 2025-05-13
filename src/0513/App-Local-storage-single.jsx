export default function App() {

    //寫入資料
    // window.localStorage.setItem('book1', 'html')
    //讀取資料
    // console.log(window.localStorage.getItem('book1'))
    //移除資料
    // window.localStorage.removeItem('book1')
    //清空所有資料
    // window.localStorage.clear()

    return (
        <>
            <h1>本地端存取-Local storage</h1>
            <button onClick={() => {
                window.localStorage.setItem('book1', 'html')
                window.localStorage.setItem('book2', 'css')
                window.localStorage.setItem('book3', 'js')
            }} >寫入資料 (新增&修改) </button >

            <button onClick={() => {
                //已知key寫法
                // console.log(window.localStorage.getItem('book2'))

                //未知key寫法
                for (var i = 0; i < window.localStorage.length; i++) {
                    var key = window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key));
                }
            
            }}> 讀取資料 </button>

            <button onClick={()=> {
                window.localStorage.removeItem("book2");
            }}> 清空資料 </button>

            <button onClick={() =>{
                window.localStorage.clear("book2");
            }}> 移除所有資料 </button>
        </>
    )

}