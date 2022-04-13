import React, { useEffect } from "react";

const Timer = ({ initial }) => {
  const [time, setTime] = React.useState(initial);

  useEffect(() => {
    if (time === 0) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const timerStyle = {
    width: `${(time / initial) * 100}%`,
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-bar" style={timerStyle}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default Timer;
