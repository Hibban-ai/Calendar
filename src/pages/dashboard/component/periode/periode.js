import "./periodeStyle.css";
// let maps =
//   "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Periode = () => {
  return (
    <>
      <div className="periode mt-3 mb-4">
        <div className="img-calendar mb-2">
          <img
            src="./image/logokaleender-removebg-preview.png"
            className="img-fluid"
          />
        </div>
        <div className="text-side text-center mb-4">
          <h3 className="fw-bold">Website Redesign</h3>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
            ea ab.
          </p>
        </div>
        <div className="maps d-flex justify-content-center">
          <Calendar
            localizer={localizer}
            events={[
              {
                start: moment().toDate(),
                end: moment().add(1, "days").toDate(),
                title: "Acara Masak-Masak",
              },
            ]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
          />
        </div>
      </div>
    </>
  );
};

export default Periode;
