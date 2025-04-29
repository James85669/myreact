   import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <div id="page1">page1</div>;
      case 2:
        return <div id="page2">page2</div>;
      case 3:
        return <div id="page3">page3</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}

      {currentPage === 1 && (
        <button id="btn1" onClick={() => setCurrentPage(2)}>
          下一頁
        </button>
      )}

      {currentPage === 2 && (
        <>
          <button id="btn2" onClick={() => setCurrentPage(1)}>
            上一頁
          </button>
          <button id="btn3" onClick={() => setCurrentPage(3)}>
            下一頁
          </button>
        </>
      )}

      {currentPage === 3 && (
        <button id="btn1" onClick={() => setCurrentPage(1)}>
          回到第一頁
        </button>
      )}
    </div>
  );
}

export default App;