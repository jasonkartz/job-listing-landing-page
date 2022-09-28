import jobs from "./data/data.json";

function App() {
  return (
    <>
      <header></header>
      <main>
        {jobs.map((job, index) => {
          return (
            <div
              key={index}
              className={`job-post ${job.featured && "featured-border"}`}
            >
              <img className="job-logo" src={job.logo} alt={job.company} />
              <div className="job-info-section">
                <div className="job-header">
                  <h2>{job.company}</h2>
                  {job.new && <span className="new">NEW!</span>}
                  {job.featured && <span className="featured">FEATURED</span>}
                </div>
                <h1>{job.position}</h1>

                <p className="job-details">
                  {job.postedAt} &#x2022; {job.contract} &#x2022; {job.location}
                </p>
              </div>
              <hr />
              <div className="job-tags">
                <span className="tag">{job.role}</span>
                <span className="tag">{job.level}</span>
                {job.languages &&
                  job.languages.map((lang) => (
                    <span className="tag">{lang}</span>
                  ))}
                {job.tools &&
                  job.tools.map((tool) => <span className="tag">{tool}</span>)}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
