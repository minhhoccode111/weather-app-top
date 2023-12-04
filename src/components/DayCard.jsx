import PropTypes from "prop-types";

export default function DayCard({ day, cardClickCb, index, isC, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      className={
        "text-darker flex flex-col items-center justify-between gap-1 bg-light p-4 rounded-lg transition-opacity max-w-[200px]" +
        " " +
        (isDisabled ? "opacity-80 cursor-not-allowed" : "")
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
      <p className="text-sm text-blue-500 font-bold">
        {day.daily_chance_of_rain}%
      </p>
      <p className="flex items-baseline justify-between gap-4">
        <strong className="">{isC ? day.maxtemp_c : day.maxtemp_f}</strong>
        <span className="text-sm">{isC ? day.mintemp_c : day.mintemp_f}</span>
      </p>
    </button>
  );
}

DayCard.propTypes = {
  day: PropTypes.object.isRequired,
  cardClickCb: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isC: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
