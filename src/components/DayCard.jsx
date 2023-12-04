import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";

export default function DayCard({ day, cardClickCb, index, isC, isDisabled }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.6}
      glareColor="#ffffff"
      glarePosition="bottom"
      className={"flex items-stretch justify-stretch rounded-lg"}
    >
      <button
        disabled={isDisabled}
        className={
          "text-light flex-1 flex flex-col items-center gap-2 p-4 rounded-lg transition-opacity max-w-[200px]" +
          " " +
          (isDisabled ? "cursor-not-allowed bg-darker" : "bg-dark")
        }
        onClick={cardClickCb}
      >
        <header>
          <h3 className="font-bold">
            {index === 0 ? "Today" : index === 1 ? "Tomorrow" : "Overmorrow"}
          </h3>
        </header>
        <div className="w-12">
          <img src={day.icon} className="w-full block" />
        </div>
        <p className="text-sm text-blue-200 font-bold">
          {day.daily_chance_of_rain}%
        </p>
        <p className="flex items-baseline justify-between gap-4">
          <strong className="">{isC ? day.maxtemp_c : day.maxtemp_f}</strong>
          <span className="text-sm">{isC ? day.mintemp_c : day.mintemp_f}</span>
        </p>
      </button>
    </Tilt>
  );
}

DayCard.propTypes = {
  isC: PropTypes.bool.isRequired,
  day: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  cardClickCb: PropTypes.func.isRequired,
};
