const code = `
import useData from "nsus";

const app = () => {
  const state = useData({ count: 0 });
  return <button onClick={() => state.count++}>{state.count}</button>;
};
`;

export default code;
