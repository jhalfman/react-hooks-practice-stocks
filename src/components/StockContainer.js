import React from "react";
import Stock from "./Stock";

function StockContainer({orderedStockList, addStock, filterCategory}) {

  return (
    <div>
      <h2>Stocks</h2>

      {orderedStockList.map(stock => {
        if (filterCategory === undefined) {
            return <Stock stock={stock} key={stock.name} handleClick={addStock}/>
        }
        else if (stock.type === filterCategory) {
          return <Stock stock={stock} key={stock.name} handleClick={addStock}/>
        }
        else return null;
      })}
    </div>
  );
}

export default StockContainer;
