import { VaccineCenter, Coordinate } from '../interfaces';

export const getDist = (center: VaccineCenter, coord: Coordinate) => {
  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };
  const R = 6371;
  const dLat = deg2rad(center.lat - coord.lat);
  const dLng = deg2rad(center.lng - coord.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(center.lat)) *
      Math.cos(deg2rad(coord.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
