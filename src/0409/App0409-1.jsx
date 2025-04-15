import img1 from './assets/img0409/coffee.jpg'

function App() {
  const data = {
    prod1: {
      imgUrl: img1,
      title: 'Card title',
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: 'https://unsplash.com/photos/man-buying-item-in-shop-Kx3o6_m1Yv8',
      btnName: '圖片來源'
    },
    prod2: {
      imgUrl: img1,
      title: 'Card title',
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: 'https://unsplash.com/photos/man-buying-item-in-shop-Kx3o6_m1Yv8',
      btnName: '圖片來源'
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
      }}>
        <div className="card" style={{ width: '18rem', marginRight: '15px' }}>
          <img src={data.prod1.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.prod1.title}</h5>
            <p className="card-text">{data.prod1.desc}</p>
            <a href={data.prod1.link} className="btn btn-primary">{data.prod1.btnName}</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={data.prod2.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.prod2.title}</h5>
            <p className="card-text">{data.prod2.desc}</p>
            <a href={data.prod2.link} className="btn btn-primary">{data.prod2.btnName}</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default App