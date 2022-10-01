export default function TagFilter({ tagArray, setTagFilter }) {
  const removeTag = (tag) => {
    const newArray = tagArray.filter((item) => item !== tag);
    setTagFilter([...newArray]);
  };
  return (
    <div className="tag-filter">
      <div className="tags-selected-container">
        {tagArray.map((tag, index) => {
          return (
            <div key={index} className="tag-selected">
              <span>{tag}</span>
              <button
                className="btn-tag-clear"
                onClick={() => removeTag(tag)}
              ></button>
            </div>
          );
        })}
      </div>
      <button className="btn-clear-all" onClick={() => setTagFilter([])}>
        Clear
      </button>
    </div>
  );
}
