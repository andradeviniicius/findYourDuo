type Props = {
};

export default function DaysOfWeek() {
  return (
    <div className={`w-full mb-6`}>
      <p className="font-semibold leading-7 mb-2">Quando costuma jogar?</p>
      <div className="weekDays-selector font-bold text-base">
        <input type="checkbox" id="weekday-sun" className="weekday" />
        <label htmlFor="weekday-sun">D</label>
        <input type="checkbox" id="weekday-mon" className="weekday" />
        <label htmlFor="weekday-mon">S</label>
        <input type="checkbox" id="weekday-tue" className="weekday" />
        <label htmlFor="weekday-tue">T</label>
        <input type="checkbox" id="weekday-wed" className="weekday" />
        <label htmlFor="weekday-wed">Q</label>
        <input type="checkbox" id="weekday-thu" className="weekday" />
        <label htmlFor="weekday-thu">Q</label>
        <input type="checkbox" id="weekday-fri" className="weekday" />
        <label htmlFor="weekday-fri">S</label>
        <input type="checkbox" id="weekday-sat" className="weekday" />
        <label htmlFor="weekday-sat">S</label>
      </div>
    </div>
  );
}
