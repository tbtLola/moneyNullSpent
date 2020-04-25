import Link from "next/link";
import PurchasedItems from "../components/PurchasedItems";

const Home = (props) => (
  <div>
    {/* <Link href="/upload">Upload</Link> */}
    <PurchasedItems></PurchasedItems>
  </div>
);

export default Home;
