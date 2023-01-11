import { useState } from "react";
import styles from "./Contact.module.sass";
import { ContactProps } from "./Contact.props";
import Inp from "../Inp/Inp";

const Contact = ({ photo, name, tel, email, order, rebuild, deleted }) => {
  console.log(order, rebuild, "order, rebuild ");
  const [nname, setNname] = useState<string>(name);
  const [ntel, setNtel] = useState<string>(tel);
  const [nemail, setNemail] = useState<string>(email);

  console.log(nname, ntel, nemail, "test");

  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={photo} />
      </div>
      <div className={styles.left}>
        <div className={styles.name}>
          {nname}
          <Inp data={nname} changefn={setNname} />
        </div>
        <div className={styles.tel}>
          {ntel}
          <Inp data={ntel} changefn={setNtel} />
        </div>
        <div className={styles.email}>
          {nemail}
          <Inp data={nemail} changefn={setNemail} />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            deleted(order);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
