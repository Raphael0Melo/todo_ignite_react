import styles from './Info.module.css'

type TaskProps = {
  counterTask: number;
  done: number;
}

export function Info({ counterTask, done}: TaskProps) {
  return (
    <div className={styles.info}>

        <div className={styles.created}>
          <div className={styles.text}>Tarefas Criadas</div>
          <div className={styles.counter}>{counterTask}</div>
        </div>

        <div className={styles.created}>
          <div className={styles.text2}>Tarefas Concluídas</div>
          <div className={styles.counter}>{done} de {counterTask}</div>
        </div>

      </div>
  )
}