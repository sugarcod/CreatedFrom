import { useState } from "react";
import data from "../utils/data.json";
import styles from "../styles/Table.module.sass";
import TDRow from "../components/TDRow/TDRow";

const TestTable = () => {
  const table = data.table;
  const [info, setInfo] = useState(table);
  const [rev, setRev] = useState<boolean>(false);

  const updateData = (obj, index) => {
    let oldArr = [...info];
    oldArr.splice(index, 1, obj);
    setInfo(oldArr);
  };

  const sortim = (field: string) => {
    let infoOld = [...info];
    let temp;
    if (field == "age") {
      if (rev) {
        temp = infoOld.sort((a, b): number => {
          return a[field] > b[field] ? 1 : -1;
        });
      } else {
        temp = infoOld.sort((a, b): number => {
          return a[field] > b[field] ? -1 : 1;
        });
      }
    } else {
      if (rev) {
        temp = infoOld.sort((a, b): number => {
          return a[field][0] > b[field][0] ? 1 : -1;
        });
      } else {
        temp = infoOld.sort((a, b): number => {
          return a[field][0] > b[field][0] ? -1 : 1;
        });
      }
    }
    if (temp && temp.length !== 0) {
      setInfo(temp);
      setRev(!rev);
    }
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(info[0]).map((el) => (
              <th className="userselect" onClick={(e) => sortim(el)} key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {info.map((el, i) => {
            return <TDRow ind={i} renew={updateData} key={el.email} {...el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
