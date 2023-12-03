import PropTypes from "prop-types";

export default function DayCard({ day, cardClickCb, index }) {
  console.log(day.icon);
  return (
    <button
      className="flex flex-col items-center justify-between gap-1"
      onClick={cardClickCb}
    >
      <p>{index === 0 ? "Today" : index === 1 ? "Tomorrow" : "Overmorrow"}</p>
      <img src={day.icon} />
      <p className="flex items-baseline justify-between gap-4">
        <span className="font-bold">{day.maxtemp_c}</span>
        <span className="text-sm">{day.mintemp_c}</span>
      </p>
    </button>
  );
}

DayCard.propTypes = {
  day: PropTypes.object.isRequired,
  cardClickCb: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
