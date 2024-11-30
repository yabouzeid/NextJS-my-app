import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
	title: "Home Page",
};
export default function Home() {
  return (
    <div className="main-div">
      <h1>Hello World</h1>
    </div>
  );
}
