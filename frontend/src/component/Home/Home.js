import React, { Fragment,useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import {clearErrors, getProduct} from "../../actions/productAction";
import { useSelector ,useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";



const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products ,productCount} = useSelector(state => state.products);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error,alert]);

  return (
    <Fragment>
      {loading ? (<Loader/>):(<Fragment>

<MetaData title="Grocery Junction"></MetaData>

<div className="banner">
  <h1>Welcome to Grocery Junction</h1>
  <h2>Find Best Vegetables & Fruits Below</h2>

  <a href="#container">
    <button>
      Scroll <CgMouse />
    </button>
  </a>
</div>

<h2 className="homeHeading">Featured Products</h2>

<div className="container" id="container">
      {products && products?.map((prod) => <Product product={prod}/>)}
      
</div>

</Fragment>)}
    </Fragment>
  );
};

export default Home;
