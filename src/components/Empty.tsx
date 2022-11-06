import styles from "./Empty.module.css";
import Icon from '../assets/Clipboard.png'


export function Empty() {
  return (
    <div className={styles.tasks}>
      
      <div className={styles.empty}>
          <img src={Icon} alt="clipboard" className={styles.icon} />
          <div className={styles.titleEmpty}>
              Você ainda não tem tarefas cadastradas
          </div>
          <div className={styles.subTitleEmpty}>
              Crie tarefas e organize seus itens a fazer
          </div>
      </div>
    </div>
  );
}
