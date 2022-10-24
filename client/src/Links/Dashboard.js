import React, { useContext } from "react";
import FetchContext from "./FetchContext";
import KanBanBoard from "./KanbanBoard";
function DashBoard() {
  const { user } = useContext(FetchContext);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>KanBanBoard</h1>
      {user?.map((x) =>
        x.apps.map((t) =>
          t.tickets.map((c) => (
            <KanBanBoard key={x} userInfo={x} appInfo={t} ticketInfo={c} />
          ))
        )
      )}
    </div>
  );
}

export default DashBoard;
