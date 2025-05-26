import styles from './CardCountry.module.css';

interface Props {
  name: string;
  emoji: string;
}

export default function CardCountry({ name, emoji }: Props) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{emoji}</p>
    </div>
  );
}
