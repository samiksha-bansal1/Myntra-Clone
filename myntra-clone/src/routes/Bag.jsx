import BagItems from "../components/BagItems";
import BagsSummary from "../components/BagsSummary";
import { useSelector } from "react-redux";
function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItems item={item}></BagItems>
            ))}
          </div>
          <BagsSummary></BagsSummary>
        </div>
      </main>
    </>
  );
}
export default Bag;
