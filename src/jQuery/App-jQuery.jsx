import { useEffect } from 'react';

import $ from 'jquery';
import '../jQuery/App.css';


export default function App() {

    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增html元素 => append()
        // 取得子元素 => children()

        //當滑鼠碰到超連結時，檢查has()是否有ttpShow類別
        $('a:has(.ttpShow)').on('mouseover', function () {
            //動態增加append() 一個div區域在body標籤中
            //取得超連結指定的子元素childen() 中的html內容html()
            $('body').append('<div class="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({
                top: (e.pageX + 10) + 'px',
                left: (e.pageY + 10) + 'px'
            }).fadeIn('fast');
        })
    }, [])


    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem ipsum dolor, sit amet
                <a href='#'>
                    consectetur
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias voluptates assumenda sequi vel vitae ad voluptate exercitationem quasi officia, cupiditate veniam amet vero quae et minus consequatur eaque deleniti dolore velit consequuntur iure omnis, quisquam quia optio. Officiis veniam, sapiente, nesciunt iure similique dignissimos tenetur cupiditate quaerat, iste maxime accusantium alias dolore blanditiis totam? Maiores non qui, voluptate autem magnam corporis unde, eveniet dolores ducimus praesentium sed, rerum exercitationem laudantium quisquam blanditiis quo perferendis labore asperiores maxime sit eum placeat illum. Optio doloribus nisi molestiae in rem officia odio tenetur doloremque! Nulla illo recusandae provident laboriosam architecto enim ipsa suscipit, facere qui eveniet minima veritatis temporibus ex dolore modi nostrum, maxime iure error officiis nisi. Temporibus saepe ad voluptatem rem! Temporibus repellat tempora debitis necessitatibus? Veniam aliquid nesciunt voluptatem corporis beatae, odio tempore totam, quas aperiam, consectetur inventore non animi fugiat perspiciatis obcaecati iusto iure rerum repellat accusamus laudantium magnam dolorum adipisci! Dicta impedit itaque dolorem tempora suscipit perspiciatis eos ratione esse quisquam at, obcaecati reiciendis vero, voluptates veritatis asperiores eius ut neque harum minima illum nulla ea consequuntur nam? Aspernatur, facere tempora eum quibusdam molestiae adipisci, modi pariatur fuga commodi reiciendis vitae maiores rerum. Natus quibusdam voluptates saepe sequi consectetur quam quos architecto deserunt. Dolor velit veniam eum delectus, magnam, est ipsum totam recusandae id minima doloremque saepe adipisci assumenda repudiandae laudantium, itaque voluptate cum possimus. Aspernatur necessitatibus, quae ea amet repellendus nesciunt debitis? Magni autem tempora minima, deleniti veniam dolorem fugit accusamus ex nemo sunt voluptatum, quos sit repudiandae aspernatur quibusdam inventore eveniet quaerat quod placeat, blanditiis aliquam hic numquam commodi eius. Rerum ipsa ratione, error iste incidunt quisquam perspiciatis totam praesentium, laborum beatae recusandae dolorum magni iusto dolorem, necessitatibus libero placeat temporibus voluptas adipisci neque molestias excepturi repellendus. A, numquam sapiente aliquam vero accusantium quidem aspernatur explicabo voluptate amet, veritatis magni enim expedita esse ipsa laborum fugiat odio voluptatibus placeat ex possimus incidunt reprehenderit optio harum. Itaque eligendi nam accusantium ab, vero reprehenderit, quis quo aperiam corporis molestiae nihil repudiandae laudantium impedit dignissimos, officiis quae reiciendis expedita! Blanditiis repellendus quos, ipsa ab inventore eveniet modi minima quis quod eos veniam aperiam nemo nisi delectus a architecto, ratione sunt, error laboriosam omnis! Ipsam debitis in illo adipisci laborum autem mollitia, consequatur itaque hic recusandae placeat harum. Doloremque suscipit necessitatibus, voluptatem adipisci sunt incidunt, quos dolor ullam nostrum dignissimos temporibus? Corporis ratione odio fugiat amet veniam, velit sint assumenda maiores voluptas reiciendis cum. Sequi soluta qui optio odio corrupti corporis reprehenderit, perspiciatis aliquid quisquam dicta porro, velit ducimus assumenda quaerat placeat sunt minima nobis tempora! Ratione, distinctio deserunt tempora quas ut reiciendis nisi nesciunt accusamus aperiam ab dolor delectus neque sed quam, provident eaque in nihil et aliquid dicta fuga expedita iste. Ex autem placeat praesentium error esse, rem excepturi dolorem et nisi possimus fugit neque. Ipsam assumenda facilis earum excepturi consequuntur modi architecto fugiat vitae ad? Qui, blanditiis tempora cum unde, tempore aliquam molestias sunt nobis natus debitis, nostrum reiciendis ducimus impedit ad enim voluptas illo nemo odio!
            </p>
        </>
    )
}

