import { useEffect, useRef, useState } from 'react';
import styles from '@components/pages/home/calorie.module.css';

const calorie = 845;
const standard = 1200;

const Calorie = () => {
  const radius = 125;
  const circumference = 2 * Math.PI * radius;
  const angle = (calorie / standard) * 0.5;

  return (
    <div className={styles.calorie}>
      <div className={styles.progress_wrapper}>
        <svg className={styles.progress}>
          <path className={styles.frame} d='M 25 150 A 100 100 0 0 1 275 150' strokeWidth='45' />
          <circle
            className={angle <= 0.5 ? styles.bar : styles.overbar}
            cx='-150'
            cy='-150'
            r='125'
            strokeWidth='45'
            strokeDashoffset={angle <= 0.5 ? circumference * (1 - angle) : circumference * 0.5}
            strokeDasharray={circumference}
          />
        </svg>
        <div className={styles.calorie_wrapper}>
          <p className={styles.calorie_num}>{calorie}</p>
          <p className={styles.calorie_standard}>/ {standard}kcal</p>
        </div>
      </div>
    </div>
  );
};

export default Calorie;
