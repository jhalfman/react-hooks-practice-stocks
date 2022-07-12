import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [orderedStockList, setOrderedStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [filterCategory, setFilterCategory] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => {setOrderedStockList(data); setStockList(data)});
  }, [])

  function addStock(stock) {
    const isAdded = portfolioList.find(item => item.name === stock.name);
    if (isAdded) {
      alert("you already have that stock!")
      return null;
    }
    else {
      const newPortfolio = [...portfolioList, stock];
      setPortfolioList(newPortfolio);
    }
  }

  function deletePortfolio(stock) {
    const newPortfolio = portfolioList.filter(item => item.name !== stock.name)
    setPortfolioList(newPortfolio);
  }

  function updateSort(sortTerm) {
    if (sortTerm === "Alphabetically") {
      const newList = [...stockList].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      setOrderedStockList(newList);
    }
    else {
      const newList = [...stockList].sort((a, b) => a.price - b.price)
      setOrderedStockList(newList);
    }
  }

  function updateCategory(category) {
    setFilterCategory(category);
  }

  return (
    <div>
      <SearchBar updateSort={updateSort} updateCategory={updateCategory}/>
      <div className="row">
        <div className="col-8">
          <StockContainer orderedStockList={orderedStockList} addStock={addStock} filterCategory={filterCategory}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} deletePortfolio={deletePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
