import { ButtonAdd, ItemList } from "./style";

const ProductList = ({ ItemPromo, setCurrentSale, currentSale }) => {
  return (
    <ItemList key={ItemPromo.id}>
      <h1>{ItemPromo.name}</h1>
      <p>
        Preço antigo: <span className="value">R${ItemPromo.price}</span>
      </p>
      <p>
        Desconto: <span className="value">{ItemPromo.discount}%</span>
      </p>
      <p>
        Valor do Desconto:{" "}
        <span className="value">R${ItemPromo.valuePromo}</span>
      </p>
      <p>
        Preço a ser Pago: <span className="value">R${ItemPromo.endPrice}</span>
      </p>
      <ButtonAdd
        onClick={() => {
          setCurrentSale([...currentSale, ItemPromo]);
        }}
      >
        Add Cart
      </ButtonAdd>
    </ItemList>
  );
};

export default ProductList;
