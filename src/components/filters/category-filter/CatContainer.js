import React from "react";
import Cat from "./Cat";

function returnCat(c, tabIndex) {
  return <Cat val={c} />;
}
function CatContainer(props) {
  return (
    <ul className={props.subcatHidden ? "hidden" : ""}>
      {props.list.map(c => returnCat(c))}
    </ul>
  );
}

export default CatContainer;
