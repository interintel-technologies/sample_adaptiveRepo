import React, { useState, useEffect, useRef, useCallback } from 'react';

// CountdownTimer Component
const CountdownTimer = ({ initialDuration, onTick, onEnd, title = 'Countdown ends in' }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [running, setRunning] = useState(false);
  const tickFunctions = useRef([]);

  useEffect(() => {
    if (onTick && typeof onTick === 'function') {
      tickFunctions.current.push(onTick);
    }
  }, [onTick]);

  const parseTime = useCallback((fullSeconds) => {
    const sec_num = parseInt(fullSeconds, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - hours * 3600) / 60);
    const seconds = sec_num - hours * 3600 - minutes * 60;

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }, []);

  const startTimer = useCallback(() => {
    if (running) return;

    setRunning(true);
    const start = Date.now();
    let diff = initialDuration;

    if (diff <= 0) {
      setRunning(false);
      setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      if (onEnd && typeof onEnd === 'function') {
        onEnd();
      }
      return; // Exit if the initial duration is in the past
    }

    const timer = () => {
      diff = initialDuration - Math.floor((Date.now() - start) / 1000);
      if (diff > 0) {
        setTimeout(timer, 1000); // Use a 1-second interval for ticking
      } else {
        diff = 0;
        setRunning(false);
        if (onEnd && typeof onEnd === 'function') {
          onEnd();
        }
      }

      const timeObject = parseTime(diff);
      setTimeLeft(timeObject);

      // Call each registered tick function
      tickFunctions.current.forEach((fn) => fn(timeObject.minutes, timeObject.seconds));
    };

    timer();
  }, [running, initialDuration, parseTime, onEnd]);

  useEffect(() => {
    if (initialDuration > 0) {
      startTimer();
    } else {
      // If the initial duration is not positive, set the time left to zero
      setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
    }

    return () => {
      setRunning(false); // Cleanup on unmount or dependency change
    };
  }, [startTimer, initialDuration]);

  return (
    <div>
      <h3>{title}</h3>
      <p>
        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </p>
      {!running && initialDuration <= 0 && <p>Countdown has already ended!</p>}
    </div>
  );
};

// CountdownElementWrapper Component
const CountdownElementWrapper = ({ element }) => {
  const countdownRef = useRef(null);

  useEffect(() => {
    if (countdownRef.current && element) {
      countdownRef.current.e = element;
    }
  }, [element]);

  const computeInitialDuration = (defaultValue) => {
    const targetDate = new Date(defaultValue);
    const currentDate = new Date();
    return Math.floor((targetDate - currentDate) / 1000); // Convert milliseconds to seconds
  };

  return (
    <>
      {element ? (
        <CountdownTimer
          initialDuration={computeInitialDuration(element.defaultValue)}
          onTick={(minutes, seconds) => console.log(`Time left: ${minutes}:${seconds}`)}
          onEnd={() => console.log('Countdown has ended!')}
          title={element.name}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CountdownElementWrapper;
