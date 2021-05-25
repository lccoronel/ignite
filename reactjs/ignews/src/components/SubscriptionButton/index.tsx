import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscriptionButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscriptionButton}>
      Subscribe now
    </button>
  );
};
