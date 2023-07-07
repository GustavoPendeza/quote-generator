/* eslint-disable react-hooks/exhaustive-deps */
import { api } from "@/lib/axios";
import React from "react";
import { useEffect } from "react";
import Quote from "./Quote";
import styles from "../app/page.module.css";
import Loading from "./Loading";
import { useState } from "react";

interface Props {
  author: string | null;
  page: number;
  apiResponse: Data | null;
  setApiResponse: (value: Data) => void;
}

export default function QuoteList({
  author,
  page,
  apiResponse,
  setApiResponse,
}: Props) {
  const [loading, setLoading] = useState(false);
  const limit = 5;

  async function getDataByAuthor() {
    try {
      setLoading(true);
      const response = await api.get(
        `?author=${author}&page=${page}&limit=${limit}`
      );

      setApiResponse(response.data);
    } catch (error) {
      console.log(error);
      alert("Houve um erro. \n\nTente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDataByAuthor();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {apiResponse ? (
            <>{apiResponse.totalQuotes ? author : "Author not found"}</>
          ) : null}
        </h1>
      </div>

      {apiResponse
        ? apiResponse.data.map((quote) => {
            return <Quote key={quote._id} quoteText={quote.quoteText} />;
          })
        : null}
    </>
  );
}
