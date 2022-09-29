export default function JobPost({
  featured,
  company,
  logo,
  newJob,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
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
        <span className="tag">{role}</span>
        <span className="tag">{level}</span>
        {languages &&
          languages.map((lang, index) => (
            <span key={index} className="tag">
              {lang}
            </span>
          ))}
        {tools &&
          tools.map((tool, index) => (
            <span key={index} className="tag">
              {tool}
            </span>
          ))}
      </div>
    </div>
  );
}
