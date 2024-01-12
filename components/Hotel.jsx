import Image from "next/image"
import Link from "next/link"
const Hotel = (props) => {
  const {item} = props

  return (
    <div>
      <div className="h-96 w-full my-3 p-5 ">
        <div className="flex h-full ">
            <Image src={item.banner} height={500} width={500} className="w-96  h-large-box mr-3 my-auto object-contain" alt="banner" />
            <div className="grid grid-rows-3 gap-3 max-h-fit  ">
           {
            item.gallery.map(ele=>{
              return(
               <div className="div  w-32 h-24 " key={ele._id}>
                 <Image src={ele} height={500} width={500} className=" object-contain h-full w-full py-4" alt="images" />
               </div>
              )
            })
           }
          
            </div>
         <div className="ml-10">
         <div className="tilte text-lg font-semibold line-clamp-1">{item.name}</div>
         <p className="text-justify my-5 text-md font-semibold ">
            {item.description}
         </p>
        <div className="inline-block my-4 ">
        <span className="text-xl font-semibold mr-3">Location :</span>
        <span className="text-md font-semibold">{item.location}</span>
        </div>
         <p><span className="text-xl font-semibold">Facilities :</span></p>
       
         {
          item.facilities.map(fac=>(
            <>
              <div className="parent inline-flex justify-center my-3 px-3 items-center gap-5"  key={fac._id}>
            <div className="flex w-10 h-10">
              <Image height={40} width={40} src={fac.img} className="w-full h-full" alt="icons"></Image>
         </div>
               <li className="text-md list-none  font-semibold ">{fac.name}</li>
         </div>
            </>
          ))
         }
    


     <div className="div btn-section">
     <button type="submit" className="bg-red-400 hover:bg-red-500 text-md font-semibold px-3 py-2 rounded-sm my-4">Price : ₹{item.price}</button>
         <Link href={"/hotels/2"} className="text-md font-semibold ml-5 text-red-600">More Details</Link>
     </div>
         </div>
         
        </div>
       
        </div>
    </div>
  )
}

export default Hotel
