import { Stack } from "@mui/material";
import NavbarButton from "./navbar-btn";
import addOrderIcon from "../../../../assets/images/navBar/buttonAddOrder.svg";
import paymentIcon from "../../../../assets/images/navBar/buttonPayment.svg";

const NavbarButtonsBlock = () => {
  return (
    <Stack spacing="32px" sx={{ padding: "0 20px" }}>
      <NavbarButton text="Добавить заказ" icon={addOrderIcon} alt="!" />
      <NavbarButton text="Оплата" icon={paymentIcon} alt="+" />
    </Stack>
  );
};

export default NavbarButtonsBlock;
