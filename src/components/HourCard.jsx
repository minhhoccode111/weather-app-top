import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";

export default function HourCard({ hour, isC }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={1}
      glareColor="#fff"
      glarePosition="bottom"
      className="border rounded-lg p-2 flex flex-col items-center bg-white text-darker"
    >
      <header>
        <h3 className="font-bold">{hour.time.replace(/^.*\s/g, "")}</h3>
      </header>
      <div className="w-12">
        <img
          src={"/src/assets/" + hour.condition.icon.split(".com/")[1]}
          className="w-full block"
        />
      </div>
      <p className="text-sm text-blue-500 font-bold">{hour.chance_of_rain}%</p>
      <p className="">
        <strong className="">{isC ? hour.temp_c : hour.temp_f}</strong>
      </p>
    </Tilt>
  );
}

HourCard.propTypes = {
  isC: PropTypes.bool.isRequired,
  hour: PropTypes.object.isRequired,
};
