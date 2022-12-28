import CardWorkers from "./CardWorkers";
import "./Times.css";

const Times = ({ time, workers }) => {
  const { title, highlight, background } = time;
  return (
    workers.length > 0 && (
      <section className="sectionTimes" style={{ background: background }}>
        <h3 style={{ color: highlight }}>{title}</h3>
        <div className="workers">
          {workers.map((worker) => (
            <CardWorkers
              background={highlight}
              key={worker.name}
              worker={worker}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Times;
