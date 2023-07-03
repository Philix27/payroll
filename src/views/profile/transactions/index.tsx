import styles from "./styles.module.scss";

export default function TransactionsHistorySection() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        {listItem({
          index: "",
          name: "Name",
          amount: "Amount",
          date: "Date",
        })}
        {listItem({
          index: "1.",
          name: "Jake",
          amount: "300 Eth",
          date: "July, 3rd 2023",
        })}
      </div>
    </section>
  );
}
function listItem(data: {
  index: string;
  name: string;
  amount: string;
  date: string;
}) {
  return (
    <div className={styles.text_content}>
      <p>
        {data.index} {data.name}
      </p>
      <p>{data.amount}</p>
      <p>{data.date}</p>
    </div>
  );
}
