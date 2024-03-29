import styles from './flib.module.scss';

/* eslint-disable-next-line */
export interface FlibProps {}

export function Flib(props: FlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Flib!</h1>
    </div>
  );
}

export default Flib;
