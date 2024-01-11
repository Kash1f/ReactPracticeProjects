import React, { useState } from "react";
import Search from "../Search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search />
      search={search}
      setSearch={setSearch}
      Weather
    </div>
  );
};

export default Weather;
