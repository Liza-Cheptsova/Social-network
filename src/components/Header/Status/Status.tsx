import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import s from "../Header.module.css";

type authPropsType = {
  status: string;
  setStatus: (status: string) => void;
  updateStatus: (status: string) => void;
};

export const Status = (props: authPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  console.log(props.status);

  const onEditMode = () => {
    setEditMode(true);
  };

  const offEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <span onDoubleClick={onEditMode} className={props.status === "" ? s.add_status : s.status_class}>
          {props.status}
        </span>
      ) : (
        <input onBlur={offEditMode} autoFocus value={status} onChange={onChangeStatus} />
      )}
    </div>
  );
};
