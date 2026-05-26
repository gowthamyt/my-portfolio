function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="split-heading">
      <div>
        {eyebrow}
        <h2>{title}</h2>
      </div>
      {action || (description ? <p>{description}</p> : null)}
    </div>
  );
}

export default SectionHeading;
