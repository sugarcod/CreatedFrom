import { useState } from "react";

const TDRow = ({ name, age, email, tel, fruits, ind, renew }) => {
  const [change, setChange] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name);
  const [newAge, setNewAge] = useState<string>(age);
  const [newEmail, setNewEmail] = useState<string>(email);
  const [newTel, setNewTel] = useState<string>(tel);
  const [newFruits, setNewFruits] = useState<string>(fruits);

  const rebuild = () => setChange(!change);

  return !change ? (
    <tr key={name}>
      <td className="userselect">{newName}</td>
      <td className="userselect">{newAge}</td>
      <td className="userselect">{newEmail}</td>
      <td className="userselect">{newTel}</td>
      <td className="userselect">{newFruits}</td>
      <td>
        <button onClick={() => rebuild()}>Edit</button>
      </td>
    </tr>
  ) : (
    <tr key={age}>
      <td className="userselect">
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          placeholder={name}
        />
      </td>
      <td className="userselect">
        <input
          onChange={(e) => setNewAge(e.target.value)}
          value={newAge}
          placeholder={age}
        />
      </td>
      <td className="userselect">
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          placeholder={email}
        />
      </td>
      <td className="userselect">
        <input
          onChange={(e) => setNewTel(e.target.value)}
          value={newTel}
          placeholder={tel}
        />
      </td>
      <td className="userselect">
        <input
          onChange={(e) => setNewFruits(e.target.value)}
          value={newFruits}
          placeholder={fruits}
        />
      </td>
      <td>
        <button
          onClick={() => {
            let newOne = {
              name: newName,
              age: Number(newAge),
              email: newEmail,
              tel: newTel,
              fruits: newFruits
            };
            renew(newOne, ind);
            rebuild();
          }}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default TDRow;
