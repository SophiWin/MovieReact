import React from "react";

import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Herosection from "../components/Herosection";
export default function Home() {
  return (
    <div>
      <Herosection />
      <Popular />
      <Upcoming />
    </div>
  );
}
