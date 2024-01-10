import React from 'react'

const Header2 = () => {
    const List =[
        {
            name:"Banglore"
        },
        {
            name:"Culcutta"
        },
        {
            name:"Mumbai"
        },
        {
            name:"Delhi"
        },
        {
            name:"Hyderabad"
        },


    ]
  return (
    <div>
      <div className="flex px-5 bg-gray-100 justify-evenly ">
        {
            List.map((item,index)=>{
                return(
                    <span key={index}>{item.name}</span>
                )
            })
        }
      </div>
    </div>
  )
}

export default Header2
