import DesktopDeliveryTable from "./DesktopDeliveryTable";
import MobileDeliveryTable from "./MobileDeliveryTable";

export const DELIVERY_DATA = [
  ["Курьером", "300 ₽", "3-5 дней", "Картой", "ул. Пушкина 123, помещение 123"],
  ["Самовывоз", "0 ₽", "1-2 дня", "Картой", "ул. Пушкина 123, помещение 123"],
];

export const CITIES = ["Москва", "Московская область"];

const DeliveryTable = () => {
  return (
    <>
      <DesktopDeliveryTable />
      <MobileDeliveryTable />
    </>
  );
};

export default DeliveryTable;
