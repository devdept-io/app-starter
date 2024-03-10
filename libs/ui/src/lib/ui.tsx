import styles from './ui.module.css';

import { Button } from '@mantine/core';

export function Ui() {
  return (
    <div className={styles['container']}>
      <Button>Hallo</Button>
    </div>
  );
}

export default Ui;
