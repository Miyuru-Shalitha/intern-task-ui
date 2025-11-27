import { useContext } from "react";
import { WindowContext } from "../../context/WindowContext";

export default function DebugWindowPropsDisplay() {
  const windowContext = useContext(WindowContext);

  return (
    <div
      style={{
        backgroundColor: "#0005",
        color: "#FFF",
        border: "1px solid #FFF",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 1000,
        padding: 8,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <span style={{ fontSize: 8 }}>
        <b>Inner width:</b> {windowContext!.windowProps.width}px
      </span>
    </div>
  );
}