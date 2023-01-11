import styles from "../styles/Contacts.module.sass";
import Contact from "../components/Contact/Contact.tsx";
import { ContactProps } from "../components/Contact/Contact.props";
import React, { useEffect } from "react";

const data = [
  {
    name: "Pavel",
    photo: "https://assets.vercel.com/twemoji/1f929.svg",
    email: "pavelgordgon20@gmail.com",
    tel: "+972564332167"
  },
  {
    name: "Olga",
    photo: "https://assets.vercel.com/twemoji/1f600.svg",
    email: "gorestorator@yahoo.com",
    tel: "+972587441257"
  },
  {
    name: "Igal",
    photo: "https://assets.vercel.com/twemoji/1f615.svg",
    email: "igalrasch@yahoo.com",
    tel: "+972587498556"
  },
  {
    name: "Debora",
    photo: "https://assets.vercel.com/twemoji/1f62d.svg",
    email: "debraahyish@rambler.com",
    tel: "+972587498556"
  }
];

const Contacts = () => {
  const [pep, setPep] = React.useState<ContactProps[]>([]);

  useEffect(() => {
    setPep(data);
  });

  const changeMe = ({ name, photo, tel, email }: ContactProps, index) => {
    let willChange: ContactProps = {
      name,
      photo,
      tel,
      email
    };
    let tempPep: ContactProps[] = pep;
    tempPep[index] = willChange;
    setPep(tempPep);
  };

  const deleteMe = (index) => {
    let tempPep: ContactProps[] = pep.splice(index, 1);
    console.log(tempPep, "tempPep");
    setPep(tempPep);
  };

  return (
    <div>
      <h3>Contacts:</h3>
      {pep &&
        pep.map((elem, index) => (
          <Contact
            rebuild={changeMe}
            deleted={deleteMe}
            order={index}
            {...elem}
            key={elem.email}
          />
        ))}
    </div>
  );
};

export default Contacts;
