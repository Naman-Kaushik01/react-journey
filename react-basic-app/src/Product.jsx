import "./Product.css";
import Price from "./Price";

function Product({title,idx}){ // if price of any product will not show it will set 500 by default
    let oldPrices=["12,495","11,980","1,590","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description=[
        ["8,000 DPI","5 Programmable buttons"],
        ["intuitive Surface","Designed for Ipad Pro"],
        ["Designed for IPad Pro","intuitive Surface"],
        ["Wireless","Smooth Working"]
    ]

        return(
            <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
        )
    
    
}

 export default Product;