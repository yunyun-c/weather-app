import { images } from "../Images";

export default function WeatherImage({ weather }) {
  return (
    <>
      <img src={images.shower} alt={weather} />
    </>
  );
}
