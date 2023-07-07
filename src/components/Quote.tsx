import React from "react";
import styles from "../app/page.module.css";

interface Props {
  quoteText: string;
}

export default function Quote({quoteText}: Props) {
  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quote}>
        {quoteText}
      </p>
    </div>
  );
}
