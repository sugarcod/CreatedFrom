import { useState } from "react";
import data from "../utils/data.json";
import styles from "../styles/Table.module.sass";

const TestTable = () => {
  let table = data.table;
  const [info, setInfo] = useState(table);
  console.log(table, "info");
  console.log(Object.keys(info[0]), "1");

  const sortim = (field: string | number) => {
    let temp = info.sort((a, b) => {
      if (typeof field == "sting") {
        return a.field[0] > b.field[0];
      }
      if (typeof field == "number") {
        return a.field > b.field;
      }
    });
    setInfo(temp);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(info[0]).map((el) => (
              <th onClick={sortim(el)} key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {info.map((el) => {
            const { name, age, email, tel, fruits } = el;
            return (
              <tr key={age}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td>{tel}</td>
                <td>{fruits}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
