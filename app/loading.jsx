import style from "@/app/loading.module.css"

const loading = () => {
  return (
    <div>
        <div className="absolute top-[50%] left-[50%]   -translate-x-[50%] -translate-y-[50%] ">
        <div className={style.ldshourglass}></div>
        </div>
      
    </div>
  )
}

export default loading
