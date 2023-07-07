/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "@/components/Header";
import styles from "./page.module.css";
import Quote from "@/components/Quote";
import Author from "@/components/Author";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import Loading from "@/components/Loading";

export default function Home() {
  const [apiResponse, setApiResponse] = useState<Data | null>(null);
  const [random, setRandom] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  async function getRandomData() {
    try {
      setLoading(true);
      const response = await api.get("/random");

      setApiResponse(response.data);
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
      alert("Houve um erro. \n\nTente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRandomData();
  }, [random]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header random={random} setRandom={setRandom} />
      {apiResponse ? (
        <main className={styles.main}>
          <Quote quoteText={apiResponse.data[0].quoteText} />

          <Author
            quoteAuthor={apiResponse.data[0].quoteAuthor}
            quoteGenre={apiResponse.data[0].quoteGenre}
          />
        </main>
      ) : null}
    </>
  );
}
