import React, { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const createColumn = [
  {
    id: 0,
    column: "Open",
  },
];

const items = [
  {
    title: "Application",
    item: "Details",
  },
];

function DashBoard({ user }) {
  const [columns, setColumns] = useState(createColumn);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDropEnd={(e) => console.log(e)}>
        {columns.map((id, index) => {
          return (
            <Droppable droppableId={id.id}>
              {() => {
                return (
                  <div
                    style={{
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {items.map((i, x) => {
                      return (
                        <Draggable
                          key={i.title}
                          draggableId={i.title}
                          index={x}
                        >
                          {() => {
                            return (
                              <div
                                style={{
                                  userSelect: "none",
                                  padding: 16,
                                  margin: "0 0 8px 0",
                                  minHeight: "30%",

                                  color: "whitesmoke",
                                }}
                              >
                                {columns.column}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DashBoard;
