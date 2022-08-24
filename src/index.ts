import { useState } from "react";

interface Data {
  [T: string | symbol]: any;
}

const useData = (newData: Data) => {
  const [data, setData] = useState(newData);

  return new Proxy(data, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return undefined;
    },
    set(target, prop, val) {
      if (prop in target) {
        target[prop] = val;
        setData({ ...target });
        return true;
      }
      return false;
    },
  });
};

export default useData;
