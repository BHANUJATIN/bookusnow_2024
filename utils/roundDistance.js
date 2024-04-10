function roundDistance(distanceStr) {
  const distanceInKm = parseFloat(distanceStr);

  if (!isNaN(distanceInKm)) {
    const roundedDistance = Math.round(distanceInKm);

    const roundedDistanceString = String(roundedDistance);

    return roundedDistanceString;
  } else {
    return "Another Universe";
  }
}

export default roundDistance;