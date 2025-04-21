import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                {/* <li><a href="">首頁</a></li>
                <li><a href=""></a>關於我</li>
                <li><a href=""></a>最新消息</li> */}

                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/about">關於我們</Link>
                </li>
                <li>
                    <Link to="/news">最新消息</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar