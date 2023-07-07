import React from 'react'
import styles from "../app/page.module.css";
import { MdArrowRightAlt } from "react-icons/md";
import Link from 'next/link';

interface Props {
  quoteAuthor: string;
  quoteGenre: string;  
}

export default function Author({ quoteAuthor, quoteGenre }: Props) {
  return (
    <Link href={{pathname: "/authorquotes", query: { author: quoteAuthor }}} className={styles.authorContainer}>
      <div className={styles.authorTexts}>
        <h5 className={styles.author}>{quoteAuthor}</h5>

        <span className={styles.genre}>{quoteGenre}</span>
      </div>

      <MdArrowRightAlt className={styles.arrow} />
    </Link>
  )
}
