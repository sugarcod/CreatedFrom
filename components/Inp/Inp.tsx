import { useState } from "react";
import styles from "./Inp.module.sass";
import { InpProps } from "./Inp.props";

const Inp = ({ data, changefn }: InpProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>(data);

  return show ? (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder={data}
      />
      <button
        onClick={() => {
          setShow(false);
          changefn(value);
        }}
      >
        save
      </button>
    </div>
  ) : (
    <div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default Inp;
