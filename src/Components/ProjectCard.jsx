import PropTypes from "prop-types";

function ProjectCard({ imgSrc, title, tags, projectLink, classes }) {
  return (
    <div
      className={
        "p-4 rounded-2xl bg-zinc-200 hover:big-zinc-700/50 active:bg-zinc-500/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-700 bg-zinc-500/50
                    grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-lg grid place-items-center
                bg-sky-400 text-zinc-950 shrink-0"
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
