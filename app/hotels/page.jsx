// pages/hotels/[page].jsx
"use client"
import Header from "@/components/Header";
import Hotel from "@/components/Hotel";
import axios from "axios";
import { useRouter } from 'next/navigation';
const Page = () => {
  return (
    <div>
      <Header />
      <Hotel />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   console.log(context.query.location);  // Access the query parameter
//   return {
//     props: {
//       page: "hello world"
//     }
//   };
// }

export default Page;
