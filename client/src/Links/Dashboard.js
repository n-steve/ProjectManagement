import React, { useContext } from "react";
import FetchContext from "./FetchContext";
import KanBanBoard from "./KanbanBoard";
function DashBoard() {
  const { user } = useContext(FetchContext);
  const displayUserData = user.map((x) =>
    x.apps.map((t) =>
      t.tickets.map((c) => (
        <KanBanBoard key={x} userInfo={x} appInfo={t} ticketInfo={c} />
      ))
    )
  );
  console.log(displayUserData);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>KanBanBoard</h1>
      {displayUserData}
    </div>
  );
}

export default DashBoard;
