import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import "./store.css";

const Store = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setData(data.products.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 align="center" p="3">
        Welcome to the store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {data.map((product) => (
          <Col align="center" key={product.id}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
