import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import saharData from "./data";
import HelloBar from "./components/HelloBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUtensils,
  FaPhone,
  FaSearch,
  FaStar,
  FaHeart,
  FaShare,
  FaInfoCircle,
  FaCopy,
  FaExternalLinkAlt,
  FaList,
  FaTh,
  FaFilter,
} from "react-icons/fa";
import "./App.css";

const getItemId = (item) => `${item.location}|${item.name}`;

const buildMapsUrl = (item) => {
  const query = encodeURIComponent(`${item.name}, ${item.location}, Chennai, India`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("location"); // "location" | "type"
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("sahar-favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showFilters, setShowFilters] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("sahar-favorites", JSON.stringify(favorites));
    } catch (_) {}
  }, [favorites]);

  const locations = useMemo(() => {
    const areas = [...new Set(saharData.map((item) => item.location))].sort();
    return ["all", ...areas];
  }, []);
  const types = useMemo(
    () => ["all", ...new Set(saharData.map((item) => item.type))],
    []
  );

  const filteredData = useMemo(() => {
    let list = saharData.filter((item) => {
      const matchesSearch = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesType = selectedType === "all" || item.type === selectedType;
      const matchesLocation =
        selectedLocation === "all" || item.location === selectedLocation;
      const id = getItemId(item);
      const matchesFav = !showFavoritesOnly || favorites.includes(id);
      return matchesSearch && matchesType && matchesLocation && matchesFav;
    });

    if (sortBy === "location") {
      list = [...list].sort((a, b) =>
        a.location.localeCompare(b.location) || a.name.localeCompare(b.name)
      );
    } else {
      list = [...list].sort((a, b) => {
        if (a.type !== b.type) return a.type === "Free" ? -1 : 1;
        return a.location.localeCompare(b.location) || a.name.localeCompare(b.name);
      });
    }
    return list;
  }, [
    searchTerm,
    selectedType,
    selectedLocation,
    sortBy,
    showFavoritesOnly,
    favorites,
  ]);

  const toggleFavorite = (item) => {
    const id = getItemId(item);
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const shareLocation = (item) => {
    const text = `Sahar: ${item.name}, ${item.location} - ${item.type}`;
    if (navigator.share) {
      navigator.share({
        title: "Sahar Food - Chennai",
        text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      setCopiedId("share");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const copyContact = (item) => {
    const contact = item.contact;
    if (!contact) return;
    const str = Array.isArray(contact) ? contact.join(", ") : contact;
    navigator.clipboard.writeText(str);
    setCopiedId(getItemId(item));
    setTimeout(() => setCopiedId(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    hover: { y: -4, transition: { duration: 0.2 } },
  };

  const freeCount = saharData.filter((i) => i.type === "Free").length;
  const paidCount = saharData.filter((i) => i.type === "Paid").length;

  return (
    <>
      <HelloBar />
      <Navbar />
      <div className="app">
      {/* Hero */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-bismillah" dir="rtl" lang="ar" aria-hidden="true">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="hero-bismillah-en">In the name of Allah, the Most Gracious, the Most Merciful</p>
          <h1 className="hero-title">🕌 Ramadan Sahar Foods</h1>
          <p className="hero-subtitle">Sehri & Sahar food guide for Chennai — for the benefit of the Muslim community</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{saharData.length}</span>
              <span className="stat-label">Locations</span>
            </div>
            <div className="stat stat-free">
              <span className="stat-num">{freeCount}</span>
              <span className="stat-label">Free</span>
            </div>
            <div className="stat stat-paid">
              <span className="stat-num">{paidCount}</span>
              <span className="stat-label">Paid</span>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container">
        {/* Search + toolbar */}
        <motion.section
          className="search-section"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="search-row">
            <div className="search-wrap">
              <FaSearch className="search-icon" aria-hidden="true" />
              <input
                type="search"
                className="search-input"
                placeholder="Search name, area, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search locations"
              />
            </div>
            <div className="toolbar">
              <button
                type="button"
                className={`toolbar-btn ${showFilters ? "active" : ""}`}
                onClick={() => setShowFilters(!showFilters)}
                aria-expanded={showFilters}
                aria-label={showFilters ? "Hide filters" : "Show filters"}
              >
                <FaFilter /> Filters
              </button>
              <button
                type="button"
                className={`toolbar-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <FaTh />
              </button>
              <button
                type="button"
                className={`toolbar-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <FaList />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="filters-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="filter-pills">
                  <span className="filter-pills-label">Type:</span>
                  {["all", "Free", "Paid"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`pill ${selectedType === t ? "active" : ""}`}
                      onClick={() => setSelectedType(t)}
                    >
                      {t === "all" ? "All" : t}
                    </button>
                  ))}
                </div>
                <div className="filter-row">
                  <label htmlFor="location-filter" className="filter-label">
                    Area
                  </label>
                  <select
                    id="location-filter"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="filter-select"
                    aria-label="Filter by area"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc === "all" ? "All areas" : loc}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter-row">
                  <label htmlFor="sort-by" className="filter-label">
                    Sort
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="filter-select"
                    aria-label="Sort by"
                  >
                    <option value="location">Area A–Z</option>
                    <option value="type">Free first, then Paid</option>
                  </select>
                </div>
                <button
                  type="button"
                  className={`pill pill-fav ${showFavoritesOnly ? "active" : ""}`}
                  onClick={() => setShowFavoritesOnly((v) => !v)}
                >
                  <FaHeart />
                  Favorites ({favorites.length})
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <p className="results-count" aria-live="polite">
          Showing <strong>{filteredData.length}</strong> of {saharData.length}{" "}
          locations
        </p>

        <AnimatePresence mode="wait">
          {filteredData.length > 0 ? (
            <motion.div
              className={`cards-wrap ${viewMode}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${searchTerm}-${selectedType}-${selectedLocation}-${sortBy}-${showFavoritesOnly}-${viewMode}`}
            >
              {filteredData.map((item, index) => {
                const id = getItemId(item);
                const isFav = favorites.includes(id);
                const contactStr = item.contact
                  ? Array.isArray(item.contact)
                    ? item.contact.join(", ")
                    : item.contact
                  : null;
                return (
                  <motion.article
                    key={id}
                    className="card"
                    variants={cardVariants}
                    whileHover="hover"
                    layout
                  >
                    <div className="card-top">
                      <div className="card-head">
                        <h2 className="card-location">{item.location}</h2>
                        <p className="card-name">{item.name}</p>
                      </div>
                      <div className="card-actions">
                        <button
                          type="button"
                          className={`icon-btn fav-btn ${isFav ? "active" : ""}`}
                          onClick={() => toggleFavorite(item)}
                          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                        >
                          <FaHeart />
                        </button>
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() => shareLocation(item)}
                          aria-label="Share"
                        >
                          <FaShare />
                        </button>
                      </div>
                    </div>

                    <div className="card-badges">
                      <span className={`badge ${item.type.toLowerCase()}`}>
                        {item.type === "Free" ? "Free" : "Paid"}
                      </span>
                      {item.price && (
                        <span className="badge price">{item.price}</span>
                      )}
                    </div>

                    <div className="card-details">
                      {item.time && (
                        <div className="detail">
                          <FaClock className="detail-icon" />
                          <span>
                            {Array.isArray(item.time)
                              ? item.time.join(" · ")
                              : item.time}
                          </span>
                        </div>
                      )}
                      {item.address && (
                        <div className="detail">
                          <FaMapMarkerAlt className="detail-icon" />
                          <span>{item.address}</span>
                        </div>
                      )}
                      {contactStr && (
                        <div className="detail">
                          <FaPhone className="detail-icon" />
                          <span>{contactStr}</span>
                        </div>
                      )}
                    </div>

                    {item.description && (
                      <div className="card-desc">
                        <FaInfoCircle className="desc-icon" />
                        <p>{item.description}</p>
                      </div>
                    )}

                    <div className="card-cta">
                      {contactStr && (
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => copyContact(item)}
                        >
                          <FaCopy />
                          {copiedId === id ? "Copied!" : "Copy contact"}
                        </button>
                      )}
                      <a
                        href={buildMapsUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt />
                        Directions
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaSearch className="empty-icon" aria-hidden="true" />
              <h3>No results found</h3>
              <p>Try different search or filters, or show all locations.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setSelectedLocation("all");
                  setShowFavoritesOnly(false);
                }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredData.length > 0 && (
          <motion.footer
            className="footer-dua"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaStar className="dua-icon" aria-hidden="true" />
            <p>
              May this guide benefit the Ummah. Please remember us in your duas. Jazakallah Khair.
              <br />
              <span className="dua-arabic" dir="rtl" lang="ar">
                اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا
              </span>
            </p>
            <p className="footer-tagline">— A humble service for the Muslim community of Chennai</p>
          </motion.footer>
        )}
      </main>
    </div>
    <Footer />
    </>
  );
};

export default App;
