import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import MensClothing from "./MensClothing";
import "./ProductDetails.css";
import WomensClothing from "./WomensClothing";

const ProductDetails = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [status, setStatus] = useState(1);
  useEffect(() => {
    fetch(` https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch(` https://fakestoreapi.com/products/category/jewelery`)
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      });
  }, []);
  console.log(data2);

  function setValue(idx) {
    setStatus(idx);
  }

  return (
    <div className="product_container">
      <div className="left_panel">
        left panel
        <ul>
          {data?.map((e, idx) => {
            return (
              <h3 key={idx}>
                <Link path={e} onClick={() => setValue(idx)}>
                  {e}
                </Link>
              </h3>
            );
          })}
        </ul>
      </div>
      <div className="right_panel">
        {/* {status === 0 ? <Electronics /> : status === 1 ? <Jewelery /> ? status == 2 ? <MensClothing /> ? status === 3 ?<WomensClothing />} */}
        {status === 0 ? (
          <Electronics />
        ) : (
          <>
            {status === 1 ? (
              <Jewelery data={data2} />
            ) : status === 2 ? (
              <MensClothing />
            ) : (
              <WomensClothing />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
