// pages/hotels/[page].jsx

import Header from "@/components/Header";
import Hotel from "@/components/Hotel";
import { usePathname } from 'next/navigation';

const Page = () => {
  return (
    <div>
      <Header />
      <Hotel />

    </div>
  );
};


export default Page;
