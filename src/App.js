import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import * as React from "react";
import Times from "./components/Times";

export default function App() {
  const [workers, setWorkers] = React.useState([]);

  const list = [
    { title: "Programação", highlight: "#57C278", background: "#D9F7E9" },
    { title: "Front End", highlight: "#82CFFA", background: "#E8F8FF" },
    { title: "Data Science", highlight: "#A6D157", background: "#F0F8E2" },
    { title: "Devops", highlight: "#E06B69", background: "#FDE7E8" },
    { title: "UX e Design", highlight: "#DB6EBF", background: "#FAE9F5" },
    { title: "Mobile", highlight: "#FFBA05", background: "#FFF5D9" },
    { title: "Inovação e Gestão", highlight: "#FF8A29", background: "#FFEEDF" },
  ];
  return (
    <div className="App">
      <Banner />
      <Form
        times={list}
        sendForm={(worker) => setWorkers([...workers, worker])}
      />
      {list.map((time) => (
        <Times
          key={time.title}
          time={time}
          workers={workers.filter((worker) => worker.squad === time.title)}
        />
      ))}
    </div>
    
  );
}
