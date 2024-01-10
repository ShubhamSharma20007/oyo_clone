import Image from "next/image"

const Block = ({title,subtitle}) => {
  return (
    <div>
        <div className="className w-52  line-h h-full  py-2  flex items-center gap-3 ">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z" fill="currentColor"></path></svg>
        <div className="text-container">
        <h1 className="text-md font-semibold text-blue-950">{title}</h1>
        <p className="text-slate-600 text-xs">{subtitle}</p>
        </div>
        </div>

    </div>
  )
}

export default Block
