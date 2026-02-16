import "./Publications.css"; 

const publications = [
  {
    authors: "Huang, H., McDowell, N., Chen, Y., et al.",
    title: "Warming quadruples forest vulnerability to fire-induced canopy loss across the United States",
    journal: "In Preparation",
    year: 2026,
    status: "In Preparation",
  },
  {
    authors: "Li, Z., Huang, H., et al.",
    title: "Integrating ELM-BGC simulated carbon cycling into ATS-PFLOTRAN hydro-biogeochemical modeling in a wildfire-impacted Pacific Northwest watershed",
    journal: "In Preparation",
    year: 2026,
    status: "In Preparation",
  },
  {
    authors: "Li, F., Huang, H., et al.",
    title: "The Fire Modeling Intercomparison Project (FireMIP) contribution to CMIP7",
    journal: "Geosci. Model Dev.",
    year: 2025,
    status: "In Review",
  },
  {
    authors: "Shi, H., Huang, K., Huang, H., et al.",
    title: "Across-scale shifts of the dominance of atmospheric and soil dryness in dryland vegetation growth",
    journal: "Nature Communications",
    year: 2025,
    status: "In Review",
  },
  {
    authors: "Huang, H., Adebiyi, A. A., Liu, Y., Chen, Z., et al.",
    title: "Spring dust in Colorado Plateau: Transport pathways and interannual variability derived from two decades of MERRA-2 reanalysis",
    journal: "Geophysical Research Letters",
    year: 2026,
    status: "Published",
  },
  {
    authors: "Huang, H., Qian, Y., Hao, D., McDowell, N.G., Rogers, B., et al.",
    title: "Elevated forest canopy loss after wildfires in moist and cool forests in the Pacific Northwest",
    journal: "Earth’s Future",
    year: 2025,
    status: "Published",
  },
  {
    authors: "Liu, Y., Huang, H., Wang, S. C., Zhang, T., Xu, D., et al.",
    title: "ML4Fire-XGBv1.0: Improving North American wildfire prediction by integrating a machine-learning fire model in a land surface model",
    journal: "Geosci. Model Dev.",
    year: 2025,
    status: "Published",
  },
  {
    authors: "Park, C., Takahashi, K., Fujimori, S., Jansakoo, T., Burton, C., Huang, H., et al.",
    title: "Attributing human mortality from fire PM2.5 to climate change",
    journal: "Nature Climate Change",
    year: 2024,
    status: "Published",
  },
  {
    authors: "Hao, D., Bisht, G., Wang, H., Xu, D., Huang, H., Qian, Y., and Leung, L. R.",
    title: "A cleaner snow future mitigates Northern Hemisphere snowpack loss from warming",
    journal: "Nature Communications",
    year: 2023,
    status: "Published",
  },
  {
    authors: "Huang, H., Qian, Y., Liu, Y., He, C., Zheng, J., Zhang, Z., and Gkikas, A.",
    title: "Where does the dust deposited over the Sierra Nevada snow come from?",
    journal: "Atmospheric Chemistry and Physics",
    year: 2022,
    status: "Published",
  },
  {
    authors: "Huang, H., Xue, Y., Li, F., and Liu, Y.",
    title: "Modeling long-term fire impact on ecosystem characteristics and surface energy using SSiB4/TRIFFID-Fire v1.0",
    journal: "Geosci. Model Dev.",
    year: 2020,
    status: "Published",
  },
  {
    authors: "Huang, H., Gu, Y., Xue, Y., Jiang, J., et al.",
    title: "Assessing aerosol indirect effect on clouds and regional climate of East/South Asia and West Africa using NCEP GFS",
    journal: "Climate Dynamics",
    year: 2019,
    status: "Published",
  },
  {
    authors: "Wanders, N., Bachas, A., He, X. G., Huang, H., Koppa, A., et al.",
    title: "Forecasting the Hydroclimatic Signature of the 2015/16 El Nino Event on the Western United States",
    journal: "Journal of Hydrometeorology",
    year: 2017,
    status: "Published",
  },
];

export default function Publications() {
  const sortedPublications = [...publications].sort(
    (a, b) => a.year - b.year   // ascending
  );

  return (
    <>
      <h1>Publications</h1>
      <div className="title-divider" />

      <div className="pub-list">
        {sortedPublications.map((pub, index) => (
          <div key={index} className="pub-item">
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-title">{pub.title}</p>
            <p className="pub-journal">
              {pub.journal} · {pub.year} · {pub.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
