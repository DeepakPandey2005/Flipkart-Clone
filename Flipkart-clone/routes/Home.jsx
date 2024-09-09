import { useSelector } from "react-redux"
import HomeItems from "../src/components/HomeItems"

const Home = () => {
  const items = useSelector((store) => store.items)
  return <>
    <main>
      <div className="items-container">
        {items.map((item) => { return <HomeItems item={item} key={item.id} /> })}
      </div>

    </main>

  </>
}
export default Home