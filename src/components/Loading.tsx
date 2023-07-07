import React from "react";
import styles from "../app/page.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer} id={styles.projectsList}>
      <div className={styles.loading}></div>
    </div>
  );
}
