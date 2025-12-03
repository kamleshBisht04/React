import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const Lat = Number(searchParams.get("lat"));
  const Lng = Number(searchParams.get("lng"));

  return [Lat, Lng];
}
