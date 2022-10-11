import Tree from "react-d3-tree";
import { data } from "./data/data_radial";

const Child = () => {
  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}>
      <Tree data={data} />
    </div>
  );
};

export default Child;
