import { LuBarChart4 } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.id === 1 ? (
        <LuBarChart4 />
        ): item.id === 2 ? (
          <LuShoppingCart />
        ): (
          <LuUsers />
        )
        }
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous year
        </span>
      </div>
    </div>
  );
};

export default Card;
