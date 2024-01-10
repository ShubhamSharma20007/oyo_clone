import Header from "@/components/Header"
import Image from "next/image"

const page = ({params}) => {
  return (
    <div>
      <Header></Header>
      <div className="w-full">
      <center><Image src={"https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} className="w-1/2  h-large-box mr-3 my-5 object-contain" /></center>

      <div className="mx-20">
        <h3 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem!
        </h3>
        <p className="text-xl my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolores nulla alias sit, officia earum maiores fugiat esse similique velit. Molestias, blanditiis laborum voluptates dicta aspernatur ad accusantium voluptatibus exercitationem?</p>
        <button type="submit" className="bg-sky-500 text-md px-3 py-2 rounded-sm my-4">Price :5400</button>
      </div>

        </div> 
    </div>
  )
}

export default page
