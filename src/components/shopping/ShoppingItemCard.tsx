import type { Item } from "../../types/item";
import { ITEM_STATUS } from "../../constants/item-status";
import { getStatusLabel } from "../../utils/item-status";

interface Props {
  item: Item;
  onStatusChange: (
    itemId: string
  ) => void;
}

export function ShoppingItemCard({
  item,
  onStatusChange,
}: Props) {

  const isPurchased = item.status === ITEM_STATUS.PURCHASED;

  return (
    <div className={`
      border 
      rounded 
      p-2
      ${isPurchased ? "opacity-50" : ""}
    `}>
      <div className={isPurchased ? "line-through" :  ""}>
        {item.name}
      </div>

      <button onClick={() => {
        onStatusChange(item.id)
      }}>
        {getStatusLabel(item.status)}
      </button>
    </div>
  );
}