import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Pagination from "react-js-pagination";
import "./Product.css";
import { Link } from "react-router-dom";
import Typography from"@material-ui/core/Typography"
// import { useAlert } from "react-alert";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";

const categories = [
  "Cooler",
  "Lane Cable",
  "Lane Adapter",
  "Daily Usage",
  "Others"
]

const Products = ({ match }) => {
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [category,setCategory] = useState("");

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  useEffect(() => {
      if(error){
          alert(error);
          dispatch(clearErrors())
      }
    dispatch(getProduct(keyword, currentPage,category));
  }, [dispatch, keyword,currentPage,category,alert,error]); 



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <MetaData title="Products" />
          <Header />
          <div>
           {products.length === 0 ? 
            ""
            :
            <h2
            style={{
              textAlign: "center",
              borderBottom: "1px solid rgba(21,21,21,0.5)",
              width: "20vmax",
              fontSize: "1.4vmax",
              margin: "3vmax auto",
                    color: "rgb(0, 0, 0, 0.7)",
                                  boxShadow:' 0 2px 5px ',
                    fontFamily: "Segoe Script",

            }}
          >
            Featured Products
          </h2>
           }
            <div className="sidebar__product" style={{
                display:"flex",
                flex: 1,
            }}>
                <div className="sidebar__products" style={{
                  border: "1px solid #999",
                  margin:"1vmax",
                  flex: ".177",
                  borderRadius: '1rem',
                  width: "150px",
                  height: '39rem',
                    boxShadow:' 0 5px 10px ',


    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    padding: "30px",

              }}>
                  <Typography style={{fontSize:"1.2vmax",padding:"1rem",marginLeft:'1rem',fontFamily: "Segoe Script"}}>CHOOSE CATEGORIES</Typography>
                  <ul className="categoryBox">
                      {categories.map((category) =>(
                          <li
                          className="category-link"
                          key={category}
                          onClick={() =>setCategory(category)}
                          type="checkbox">
                          {category}
                          </li> 
                      ))}
                  </ul>
                  <Typography style={{ fontSize: "1.2vmax",padding:"1rem",marginLeft:'1rem',      fontFamily: "Segoe Script"}}>QUICK LINKS</Typography>
                                    <div className="categoryBox">

                  <li className="category-link">
                                   <Link to="/cart" style={{color:'black'}}>Cart</Link>

                  </li>
                    <li className="category-link">
                                                         <Link to="/favourites" style={{color:'black'}}>Favourites Items</Link>

                  </li>
                  <li className="category-link">
                      Go to Checkout
                    </li>
                    </div>
              </div>

             {products.length === 0 ?
             <span style={{
               display:"block",
               padding:"30px 0",
               fontSize:"1.5rem",
               flex:".9",
               textAlign:"center"
             }}>No Product Found ....</span>
             : 
             <div
             className="products"
             style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               flex:".9"
             }}
           >
             {products &&
               products.map((product) => (
                 <ProductCard key={product.id} product={product} />
               ))}
           </div>
              }
             
             </div>
            
              <div
                className="pagination__box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "6vmax",
                }}
              >
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="First"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Products;
