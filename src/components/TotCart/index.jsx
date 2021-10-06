const TotCart = ({ currentSale }) => {
  const valueTotCart = currentSale.reduce((anterior, atual) => {
    return atual.price + anterior;
  }, 0);

  return (
    <>
      <div>
        <h3>Valor total R$ {valueTotCart.toFixed(2)}</h3>
      </div>
    </>
  );
};

export default TotCart;
