import { useSearchParams } from "react-router-dom";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { publications } from "../data/publications";
import cv from "../assets/Huilin_Huang_CV.pdf";
import "./Publications.css";

export default function Publications() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const status = params.get("status") || "All";
  const year = params.get("year") || "All";
  const years = [
    ...new Set(publications.map((p) => p.year).filter(Boolean)),
  ].sort((a, b) => b - a);
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === "All") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };
  const statusGroups = {
  Published: ["Published"],
  "In Press": ["Accepted", "In press", "In Press"],
  "In Review": ["Submitted", "In review", "In Review", "Preprint"],
  };
  const filtered = publications
    .filter(
      (p) =>
        (status === "All" || statusGroups[status]?.includes(p.status)) &&
        (year === "All" || String(p.year) === year) &&
        (p.title + p.authors + p.journal)
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .sort((a, b) => (b.year || 0) - (a.year || 0));
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">Publications / A growing body of work</span>
        <h1>
          Ideas, tested.
          <br />
          Knowledge, shared.
        </h1>
        <p>
          Research on wildfire, climate, land surface processes, and their
          interactions. Publication details and manuscript statuses reflect the
          December 2025 CV.
        </p>
      </header>
      <div className="publication-toolbar">
        <label className="search-field">
          <FiSearch aria-hidden="true" />
          <span className="sr-only">Search publications</span>
          <input
            type="search"
            value={query}
            onChange={(e) => update("q", e.target.value)}
            placeholder="Search title, author, or journal…"
          />
        </label>
        <label className="year-filter">
          Year
          <select
            aria-label="Publication year"
            value={year}
            onChange={(e) => update("year", e.target.value)}
          >
            <option value="All">All years</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
        <a
          className="text-link"
          href={cv}
          download="Huilin_Huang_CV_Dec2025.pdf"
        >
          Full CV ↓
        </a>
      </div>
      <div
        className="publication-filters"
        role="group"
        aria-label="Filter by publication status"
      >
        {["All", "Published", "In Press", "In Review"].map((s) => (
          <button
            key={s}
            aria-pressed={status === s}
            className={status === s ? "filter active" : "filter"}
            onClick={() => update("status", s)}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {filtered.length}{" "}
        {filtered.length === 1 ? "publication" : "publications"}
      </p>
      <div className="publication-list">
        {filtered.map((p) => (
          <article className="publication" key={p.title}>
            <div className="publication-year">
              {p.year || "Manuscript"}
              <span className="tag">
                {["Accepted", "In press", "In Press"].includes(p.status)
                  ? "In Press"
                  : ["Submitted", "In review", "In Review", "Preprint"].includes(p.status)
                    ? "In Review"
                    : p.status}
              </span>
            </div>
            <div>
              <span className="publication-journal">
                {p.journal || "Work in progress"}
              </span>
              <h2>
                {p.doi ? (
                  <a
                    href={"https://doi.org/" + p.doi}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.title}{" "}
                    <FiArrowUpRight aria-label="Opens article in a new tab" />
                  </a>
                ) : (
                  p.title
                )}
              </h2>
              <p>{p.authors}</p>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>No publications found.</h2>
          <p>
            Try a different search or clear the filters to see all publications.
          </p>
          <button className="button" onClick={() => setParams({})}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
