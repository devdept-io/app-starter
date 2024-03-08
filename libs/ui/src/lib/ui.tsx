import styles from './ui.module.css';

import { Button } from '@mantine/core';
/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <Button>Hallo</Button>
    </div>
  );
}

export default Ui;
