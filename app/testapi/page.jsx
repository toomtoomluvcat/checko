"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [distanceFromGoal, setDistanceFromGoal] = useState();
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const lat1Rad = toRadians(lat1);
    const lng1Rad = toRadians(lng1);
    const lat2Rad = toRadians(lat2);
    const lng2Rad = toRadians(lng2);

    const deltaLat = lat2Rad - lat1Rad;
    const deltaLng = lng2Rad - lng1Rad;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    setDistanceFromGoal(distance);
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setError(true);
      }
    );
  }, []);
  useEffect(() => {
    if (location) {
      calculateDistance(
        location?.latitude,
        location?.longitude,
        16.476280555555554,
        102.82562222222222
      );
    }
  }, [location]);
  return (
    <div>
      <div>{error ? "dont fond any location" : location?.latitude}</div>
      <div>{error ? "dont fond any location" : location?.longitude}</div>
      <div>distance: {distanceFromGoal}</div>
      <div>{distanceFromGoal<450? "You location correct":"Your location false"}</div>
    </div>
  );
}

export default page;
