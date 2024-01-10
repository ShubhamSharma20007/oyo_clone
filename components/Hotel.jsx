import Image from "next/image"
import Link from "next/link"
const Hotel = () => {
  return (
    <div>
      <div className="h-96 w-full my-3 p-5 ">
        <div className="flex h-full ">
            <Image src={"https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} className="w-96  h-large-box mr-3 my-auto object-contain" />
            <div className="grid grid-rows-3 gap-3 max-h-fit  ">
            <Image src={"https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} className=" w-32 h-36 object-contain " />
            <Image src={"https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} className="w-32 h-28  object-contain" />
            <Image src={"https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} className="w-32 h-28 object-contain " />
            </div>
         <div className="ml-10">
         <div className="tilte text-lg font-semibold line-clamp-1">OYO Hotel 4 To Min</div>
         <p className="text-justify my-5 text-md ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque error perferendis veniam dolor voluptatibus non autem debitis quam dolorum.
         </p>
         <p><span className="text-xl font-semibold">Facilities :</span></p>
         <ul className="flex gap-5">
            <li className="text-md   font-semibold ">Free Wifi</li>
            <li className="text-md font-semibold">Pet Care</li>
            <li className="text-md font-semibold">Swimming Pool</li>
            <li className="text-md font-semibold">Beaches</li>
            <li className="text-md font-semibold">Restronent</li>
         </ul>
         <button type="submit" className="bg-sky-500 text-md px-3 py-2 rounded-sm my-4">Price :5400</button>
         
         <Link href={"/hotels/2"} className="text-md font-semibold ml-5 text-red-600">More Details</Link>
         </div>
         
        </div>
       
        </div>
    </div>
  )
}

export default Hotel
