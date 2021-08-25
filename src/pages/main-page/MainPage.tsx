import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { StyledMainPage } from "./styled";
import ControlsContainer from "../../components/controls-container/ControlsContainer";
import { DragEventDto } from "../../dto/dto";
import DnDTypography from "../../components/dnd-typograhy/DnDTypography";

const getComponent = (
  componentName: string
): React.ReactElement | undefined => {
  switch (componentName) {
    case "Heading":
      return (
        <DnDTypography key={Date.now()} />
      );
  }
};

export default function MainPage() {
  const [componentName, setComponentName] = useState<string>("");
  const [componentList, setComponentList] = useState<React.ReactElement[]>([]);
  return (
    <StyledMainPage className="p-1 d-flex flex-direction-column">
      <div className="action-item-container">
        <Button variant="contained" color="primary" onClick={window.print}>
          Print
        </Button>
      </div>

      <div className="d-flex container">
        <div className="w-70 mt-1">
          <div
            id="section-to-print"
            className="border p-1 h-100 p-relative work-area"
            onDrop={() => {
              const comp = getComponent(componentName);
              comp && setComponentList([...componentList, comp]);
              setComponentName("");
            }}
            onDragOver={(evt) => evt.preventDefault()}
          >
            {componentList}
          </div>
        </div>
        <div className="w-30">
          <div className="h-60 m-1">
            <ControlsContainer
              onDragStart={(event: DragEventDto) =>
                setComponentName(event.component)
              }
            />
          </div>
          <div className="h-40 m-1">
            <div className="border p-1">properties</div>
          </div>
        </div>
      </div>
    </StyledMainPage>
  );
}
