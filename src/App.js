import jobs from "./data/data.json";
import JobPost from "./components/JobPost";

function App() {
  return (
    <>
      <header></header>
      <main>
        <div className="tag-filter">
          <div className="tags-selected-container">
            <div className="tag-selected">
              <span>Frontend</span>
              <button className="btn-tag-clear"></button>
            </div>
            <div className="tag-selected">
              <span>CSS</span>
              <button className="btn-tag-clear"></button>
            </div>
            <div className="tag-selected">
              <span>JavaScript</span>
              <button className="btn-tag-clear"></button>
            </div>
          </div>
          <button className="btn-clear-all">Clear</button>
        </div>
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
