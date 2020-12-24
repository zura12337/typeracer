import React, { useEffect, useState } from "react";

export default function Speed({ time, totalWords, done }) {
  const [wp, setWp] = useState();

  useEffect(() => {
    setWp(Math.ceil((60 / time) * totalWords * 10) / 10);
  }, []);

  return (
    done && (
      <div>
        <h3>{wp && `${wp}WP`}</h3>
      </div>
    )
  );
}
