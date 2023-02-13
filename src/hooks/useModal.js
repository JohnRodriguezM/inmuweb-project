//create a custom hook to handle modal
import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return { modal, toggle };
};