import React from "react";
import styles from "../app/page.module.css";
import { MdAutorenew } from "react-icons/md";
import Link from "next/link";

interface Props {
  random?: boolean;
  setRandom?: (value: boolean) => void;
}

export default function Header({ random, setRandom }: Props) {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.randomButton}
        onClick={() => (setRandom ? setRandom(!random) : {})}
      >
        <span>random</span>

        <MdAutorenew />
      </Link>
    </header>
  );
}
