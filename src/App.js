import jobs from "./data/data.json";
import JobPost from "./components/JobPost";

function App() {
  return (
    <>
      <header></header>
      <main>
        {jobs.map((job, index) => {
          return (
            <JobPost
              key={index}
              featured={job.featured}
              company={job.company}
              logo={job.logo}
              newJob={job.new}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              role={job.role}
              level={job.level}
              languages={job.languages}
              tools={job.tools}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
