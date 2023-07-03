import styles from "./styles.module.scss";

export function BeneficiariesSection() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        {listItem({
          index: "",
          name: "Name",
          address: "Address",
          date: "Date",
        })}
        {listItem({
          index: "1.",
          name: "Country",
          address: "0x3477",
          date: "July, 3rd 2023",
        })}
      </div>
    </section>
  );
}
function listItem(data: {
  index: string;
  name: string;
  address: string;
  date: string;
}) {
  return (
    <div className={styles.text_content}>
      <p>
        {data.index} {data.name}
      </p>
      <p>{data.address}</p>
      <p>{data.date}</p>
    </div>
  );
}
