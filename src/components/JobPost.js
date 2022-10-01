export default function JobPost({
  featured,
  company,
  logo,
  newJob,
  position,
  postedAt,
  contract,
  location,
  tagsList,
  tagFilter,
  setTagFilter,
}) {
  return (
    <div className={`job-post ${featured && "featured-border"}`}>
      <img className="job-logo" src={logo} alt={company} />
      <div className="job-info-section">
        <div className="job-header">
          <h2>{company}</h2>
          {newJob && <span className="new">NEW!</span>}
          {featured && <span className="featured">FEATURED</span>}
        </div>
        <h1>{position}</h1>

        <p className="job-details">
          {postedAt} &#x2022; {contract} &#x2022; {location}
        </p>
      </div>
      <hr />
      <div className="job-tags">
        {tagsList.map((tag, index) => (
          <span
            key={index}
            className="tag"
            onClick={() =>
              !tagFilter.includes(tag) && setTagFilter([...tagFilter, tag])
            }
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
