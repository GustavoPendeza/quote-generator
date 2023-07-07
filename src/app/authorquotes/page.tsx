"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import QuoteList from "@/components/QuoteList";

export default function AuthorQuotes() {
  const searchParams = useSearchParams();
  const author = searchParams.get("author");
  const [apiResponse, setApiResponse] = useState<Data | null>(null);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <Header />
      <main className={styles.mainQuoteList}>
        <QuoteList
          author={author}
          page={page}
          apiResponse={apiResponse}
          setApiResponse={setApiResponse}
        />

        {apiResponse && apiResponse.totalQuotes ? (
          <Pagination
            setPage={setPage}
            totalPages={apiResponse.pagination.totalPages}
          />
        ) : null}
      </main>
    </>
  );
}
