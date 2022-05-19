import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data));
      });
  }, []);
  

  return data;
}
export default Home;
