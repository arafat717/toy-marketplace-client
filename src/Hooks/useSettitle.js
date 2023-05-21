import { useEffect } from "react"

const useSettitle = (title) =>{
    useEffect(()=>{
        document.title =`${title} - car toys`;
    },[title])
}

export default useSettitle;