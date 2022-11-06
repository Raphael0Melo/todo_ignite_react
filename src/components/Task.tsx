import styles from "./Task.module.css";
import Check1 from '../assets/check.png'
import Check2 from '../assets/check2.png'
import Trash from '../assets/trash.png'

type Props = {
  name: string;
  id: number;
  done: boolean;
  handleRemove: () => void;
  handleDone: () => void;
}

export function Task({ name, id , done, handleRemove, handleDone}: Props ) {
  
  return (
    <div className={styles.task} key={id}>

      <button className={styles.button} onClick={handleDone}>
        <img src={done === false ? Check1 : Check2} alt="check" />
      </button>

      <div className={done === false ? styles.text1 : styles.text2}>{name}</div>
      
      <button className={styles.button} onClick={handleRemove}>
        <img src={Trash} alt="trash" />
      </button>

    </div>
  );
}
