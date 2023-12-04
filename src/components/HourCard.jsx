import PropTypes from "prop-types";

export default function HourCard({ hour, isC }) {
  return (
    <li className="border p-2">
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
    </li>
  );
}

HourCard.propTypes = {
  hour: PropTypes.object.isRequired,
  isC: PropTypes.bool.isRequired,
};
