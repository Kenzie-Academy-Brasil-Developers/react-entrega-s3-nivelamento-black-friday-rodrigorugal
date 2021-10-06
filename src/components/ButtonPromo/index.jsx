import { useState } from "react";
import { ButtonCreatePromo } from "./style";
const ButtonPromo = ({ useProduct, setItemPromo, ItemPromo }) => {
  const [ItemRandom, setItemRandom] = useState({});

  const Promo = () => {
    return Math.floor(Math.random() * 6 + 4) * 10;
  };
  const ID = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const createPromo = () => {
    const promo = Promo();
    const Id = ID();
    const ITEM = useProduct.filter((item) => item.id === Id);

    setItemPromo({
      ...ITEM[0],
      discount: promo,
      valuePromo: ((ITEM[0].price * promo) / 100).toFixed(2),
      endPrice: (ITEM[0].price - (ITEM[0].price * promo) / 100).toFixed(2),
    });
  };

  return (
    <ButtonCreatePromo onClick={createPromo}>gerar promo</ButtonCreatePromo>
  );
};

export default ButtonPromo;
