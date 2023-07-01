import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function Button() {
  const router = useRouter();
  return (
    <div className={styles.link}>
      <input
        type="button"
        value="Join the free speakers"
        onClick={() => router.push("/signin")}
      />
    </div>
  );
}
