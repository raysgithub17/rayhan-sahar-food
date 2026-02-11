import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import saharData from "./data";
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaUtensils, 
  FaPhone, 
  FaSearch, 
  FaFilter,
  FaStar,
  FaHeart,
  FaShare,
  FaInfoCircle
} from "react-icons/fa";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique locations and types for filters
  const locations = ["all", ...new Set(saharData.map(item => item.location))];
  const types = ["all", ...new Set(saharData.map(item => item.type))];

  const filteredData = saharData.filter((item) => {
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesLocation = selectedLocation === "all" || item.location === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const toggleFavorite = (index) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const shareLocation = (item) => {
    const text = `Sahar Food Location: ${item.name} in ${item.location} - ${item.type}`;
    if (navigator.share) {
      navigator.share({
        title: 'Sahar Food Location',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Location copied to clipboard!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <motion.div 
        className="hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            🕌 Ramadan Sahar Foods
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Find the best Sahar food locations across Chennai
          </motion.p>
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="stat">
              <span className="stat-number">{saharData.length}</span>
              <span className="stat-label">Locations</span>
            </div>
            <div className="stat">
              <span className="stat-number">{saharData.filter(item => item.type === "Free").length}</span>
              <span className="stat-label">Free</span>
            </div>
            <div className="stat">
              <span className="stat-number">{saharData.filter(item => item.type === "Paid").length}</span>
              <span className="stat-label">Paid</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container">
        {/* Search and Filters */}
        <motion.div 
          className="search-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="search-container">
            <div className="search-input-wrapper">
              <label htmlFor="search-input" className="sr-only">Search locations</label>
              <FaSearch className="search-icon" />
              <input
                id="search-input"
                type="text"
                className="search-bar"
                placeholder="Search locations, names, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for Sahar food locations"
              />
            </div>
            <motion.button
              className={`filter-toggle ${showFilters ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={showFilters ? 'Hide filters' : 'Show filters'}
              aria-expanded={showFilters}
            >
              <FaFilter />
              Filters
            </motion.button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div 
                className="filters"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="filter-group">
                  <label htmlFor="type-filter">Type:</label>
                  <select 
                    id="type-filter"
                    value={selectedType} 
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="filter-select"
                    aria-label="Filter by food type"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter-group">
                  <label htmlFor="location-filter">Location:</label>
                  <select 
                    id="location-filter"
                    value={selectedLocation} 
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="filter-select"
                    aria-label="Filter by location"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location === "all" ? "All Locations" : location}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="results-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <p>
            Showing <strong>{filteredData.length}</strong> of <strong>{saharData.length}</strong> locations
          </p>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredData.length > 0 ? (
            <motion.div 
              className="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${searchTerm}-${selectedType}-${selectedLocation}`}
            >
              {filteredData.map((item, index) => (
                <motion.div
                  key={`${item.location}-${item.name}-${index}`}
                  className="card"
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                >
                  <div className="card-header">
                    <div className="card-title-section">
                      <h2>{item.location}</h2>
                      <p className="card-name">{item.name}</p>
                    </div>
                    <div className="card-actions">
                      <motion.button
                        className={`favorite-btn ${favorites.includes(index) ? 'active' : ''}`}
                        onClick={() => toggleFavorite(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={favorites.includes(index) ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
                      >
                        <FaHeart />
                      </motion.button>
                      <motion.button
                        className="share-btn"
                        onClick={() => shareLocation(item)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Share ${item.name} location information`}
                      >
                        <FaShare />
                      </motion.button>
                    </div>
                  </div>

                  <div className="card-badge">
                    <span className={`type-badge ${item.type.toLowerCase()}`}>
                      {item.type === "Free" ? "🆓 Free" : "💰 Paid"}
                    </span>
                    {item.price && (
                      <span className="price-badge">
                        {item.price}
                      </span>
                    )}
                  </div>

                  <div className="card-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span className="detail-label">Place:</span>
                      <span className="detail-value">{item.name}</span>
                    </div>
                    
                    <div className="detail-item">
                      <FaUtensils className="detail-icon" />
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{item.type}</span>
                    </div>
                    
                    {item.time && (
                      <div className="detail-item">
                        <FaClock className="detail-icon" />
                        <span className="detail-label">Time:</span>
                        <span className="detail-value">
                          {Array.isArray(item.time)
                            ? item.time.join(", ")
                            : item.time}
                        </span>
                      </div>
                    )}
                    
                    {item.contact && (
                      <div className="detail-item">
                        <FaPhone className="detail-icon" />
                        <span className="detail-label">Contact:</span>
                        <span className="detail-value">
                          {Array.isArray(item.contact)
                            ? item.contact.join(", ")
                            : item.contact}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="card-description">
                    <FaInfoCircle className="info-icon" />
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="no-results-content">
                <FaSearch className="no-results-icon" />
                <h3>No matching results found</h3>
                <p>Try adjusting your search terms or filters</p>
                <button 
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("all");
                    setSelectedLocation("all");
                  }}
                  aria-label="Clear all filters"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Message */}
        {filteredData.length > 0 && (
          <motion.div 
            className="footer-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="dua-container">
              <FaStar className="dua-icon" />
              <p>
                May this information be helpful. Please remember my family in your duas. 
                <br />
                <span className="dua-arabic">اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default App;
