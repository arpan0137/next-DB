import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.link} href="addproduct">Add Product</Link>
      <Link className={styles.link} href="productlist">Product List</Link>
    </main >
  );
}
