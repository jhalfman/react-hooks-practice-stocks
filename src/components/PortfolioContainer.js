import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, deletePortfolio}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList.map(stock => {
         return <Stock stock={stock} key={stock.name} handleClick={deletePortfolio}/>
        })
      }
    </div>
  );
}

export default PortfolioContainer;
