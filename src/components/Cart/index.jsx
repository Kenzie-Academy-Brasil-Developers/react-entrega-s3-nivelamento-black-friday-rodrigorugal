import TotCart from "../TotCart";
import { BoxCart, ItemListCart, ListCartUl } from "./style";

const Cart = ({ currentSale }) => {
  return (
    <>
      <BoxCart>
        <TotCart currentSale={currentSale} />
        <ListCartUl>
          {currentSale.map((item) => (
            <ItemListCart>
              <h3>{item.name}</h3>
              <p>
                Preço antigo: <span className="value">R${item.price}</span>
              </p>
              <p>
                Desconto: <span className="value">{item.discount}%</span>
              </p>
              <p>
                Valor do Desconto:{" "}
                <span className="value">R${item.valuePromo}</span>
              </p>
              <p>
                Preço a ser Pago:{" "}
                <span className="value">R${item.endPrice}</span>
              </p>
            </ItemListCart>
          ))}
        </ListCartUl>
      </BoxCart>
    </>
  );
};

export default Cart;
