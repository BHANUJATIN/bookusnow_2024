function roundDistance(distanceStr) {
  const distanceInKm = parseFloat(distanceStr);

  if (!isNaN(distanceInKm)) {
<<<<<<< HEAD
    const roundedDistance = Math.round(distanceInKm/100);
=======
    const roundedDistance = Math.round(distanceInKm);
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70

    const roundedDistanceString = String(roundedDistance);

    return roundedDistanceString;
  } else {
    return "Another Universe";
  }
}

export default roundDistance;