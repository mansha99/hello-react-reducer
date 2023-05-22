"use client";
import { useReducer } from "react";
import { fanSpeedInitial, fanSpeedReducer } from "./page-reducer";

export default function Home() {
  const [fanSpeedCurrent, fanSpeedHandler] = useReducer(fanSpeedReducer, fanSpeedInitial);

  return (
    <main style={{ padding: 20 }}>
      <div>
        <h3>Hello Reducer</h3>
        <div style={{padding:20}}>
          Fan Status is <b>&nbsp;{fanSpeedCurrent.status}</b> and Level is 
          <b>&nbsp;{fanSpeedCurrent.level}</b>
        </div>
        <div>
        <button onClick={() => fanSpeedHandler({ type: 'ROTATE_LEFT' })}>Rotate Left</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => fanSpeedHandler({ type: 'ROTATE_RIGHT' })}>Rotate Right</button>
        </div>
      </div>
    </main>
  )
}
