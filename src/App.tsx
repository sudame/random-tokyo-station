import { ReactElement, useState } from "react";
import { tokyoStations } from "./tokyoStations";
import "./App.css";

interface StationView {
  name: string;
  fontSizeVw: number;
}

function getRandomStationView(): StationView {
  const randomIndex = Math.floor(Math.random() * tokyoStations.length);
  const stationName = tokyoStations[randomIndex];
  const fontSizeVw = 60 / stationName.length;
  return { name: stationName, fontSizeVw };
}

export function App(): ReactElement {
  const [stationView, setStationView] =
    useState<StationView>(getRandomStationView);

  const changeStation = () => {
    setStationView(getRandomStationView());
  };

  return (
    <main className="main">
      <div
        className="stationName"
        style={{ fontSize: `min(5rem, ${stationView.fontSizeVw}vw)` }}
      >
        {stationView.name}
      </div>
      <div className="googleMap">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${stationView.name}駅`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Google Map
        </a>
      </div>
      <footer className="changeStation">
        <button onClick={changeStation}>チェンジ</button>
      </footer>
    </main>
  );
}
