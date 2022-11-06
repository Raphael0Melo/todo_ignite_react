import styles from "./Button.module.css";
import Icon from "../assets/Layer.png";

type Props = {
  handleCreate: () => void;
};

export function Button({ handleCreate }: Props) {
  return (
    <button 
      className={styles.button} 
      onClick={() => handleCreate()}
    >
      Criar
      
      <img 
        src={Icon} 
        alt="icon-plus" 
        className={styles.icon} 
      />
    </button>
  );
}
