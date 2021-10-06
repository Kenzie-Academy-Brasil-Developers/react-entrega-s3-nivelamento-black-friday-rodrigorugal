import ProductList from "../ProductList";

const Product = ({ ItemPromo, setCurrentSale, currentSale }) => {
  return (
    <ul>
      {
        <ProductList
          ItemPromo={ItemPromo}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        ></ProductList>
      }
    </ul>
  );
};

export default Product;
