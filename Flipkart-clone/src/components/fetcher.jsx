import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemAction } from "../store/itemslice"
import { fetchAction } from "../store/fetch"
const FetchItem=()=>{
const fetchStatus=useSelector((store)=>store.fetchStatus)
const dispatch=useDispatch()

useEffect(()=>{
    if (fetchStatus.fetchdone) return;
    
    const controller=new AbortController();
    const signal=controller.signal;

    dispatch(fetchAction.markfetchstart())
    fetch("http://localhost:8080/items",{signal})
    .then((response)=>response.json())
    .then(({items})=>{
        dispatch(fetchAction.markfetchdone())
        dispatch(fetchAction.markfetchfinished());
     dispatch(itemAction.addItem(items))
     
    });
    return ()=>{
        controller.abort();
    }
    },[fetchStatus])


return <>
<div>
</div>
</>
}
export default FetchItem