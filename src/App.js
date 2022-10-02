import jobs from "./data/data.json";
import JobPost from "./components/JobPost";
import TagFilter from "./components/TagFilter";
import { useState } from "react";

function App() {
  const [tagFilter, setTagFilter] = useState([]);
  console.log(tagFilter);
  return (
    <>
      <header></header>
      <main>
        {tagFilter.length > 0 && (
          <TagFilter tagArray={tagFilter} setTagFilter={setTagFilter} />
        )}
        {jobs.map((job, index) => {
          const tagList = [].concat(
            job.role,
            job.level,
            job.languages && job.languages,
            job.tools && job.tools
          );
          if (
            tagFilter.length === 0 ||
            tagFilter.every((item) => tagList.includes(item))
          ) {
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
                tagList={tagList}
                setTagFilter={setTagFilter}
                tagFilter={tagFilter}
              />
            );
          }
        })}
      </main>
    </>
  );
}

export default App;
