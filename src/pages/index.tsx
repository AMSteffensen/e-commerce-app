import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const router = useRouter();

  const API_URL = `http://localhost:3000`;
  useEffect(() => {
    async function fetchProducts() {
      const data = await axios.get(`${API_URL}/api/products`);
      setProducts(data.data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Layout>
        <main>
          <section className="my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4">
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
          </section>
        </main>
      </Layout>
      <footer>this is footer</footer>
    </>
  );
};

export default Home;
