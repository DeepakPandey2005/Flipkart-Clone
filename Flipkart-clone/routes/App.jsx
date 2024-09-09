import "./App.css"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import { Outlet } from "react-router"
import FetchItem from "../src/components/fetcher"
import Loader from "../src/components/Loader"
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch, useSelector } from "react-redux"
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currfetch ? <Loader /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
