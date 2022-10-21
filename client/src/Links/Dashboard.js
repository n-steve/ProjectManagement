import React, { useContext } from "react";
import FetchContext from "./FetchContext";
import KanBanBoard from "./KanbanBoard";
function DashBoard() {
  // const { user } = useContext(FetchContext);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>KanBanBoard</h1>
      <KanBanBoard />
    </div>
  );
}

export default DashBoard;
