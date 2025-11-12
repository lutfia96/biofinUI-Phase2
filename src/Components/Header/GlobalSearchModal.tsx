import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { getSiteAttractionByEntityQuery } from "../../hooks/query/websiteQuery";
import "./GlobalSearchModal.css";
interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: number;
  title: string;
  slug: string;
  category: "marine" | "forest";
  content: string | null;
  address: string | null;
  featured_image: string;
  relevanceScore: number;
}

const GlobalSearchModal = ({ isOpen, onClose }: GlobalSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "marine" | "forest"
  >("all");

  const { data: marineAttractions } = getSiteAttractionByEntityQuery("marine");
  const { data: forestAttractions } = getSiteAttractionByEntityQuery("forest");

  // Combine all attractions
  const allAttractions = useMemo(() => {
    const marine =
      marineAttractions?.map((attr) => ({
        ...attr,
        category: "marine" as const,
      })) || [];
    const forest =
      forestAttractions?.map((attr) => ({
        ...attr,
        category: "forest" as const,
      })) || [];
    return [...marine, ...forest];
  }, [marineAttractions, forestAttractions]);

  // Fuzzy search function
  const fuzzyMatch = (text: string | null, query: string | null): number => {
    if (!text || !query) return 0;
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();

    // Exact match gets highest score
    if (textLower.includes(queryLower)) {
      return queryLower.length / textLower.length;
    }

    // Character matching for fuzzy search
    let score = 0;
    let queryIndex = 0;

    for (
      let i = 0;
      i < textLower.length && queryIndex < queryLower.length;
      i++
    ) {
      if (textLower[i] === queryLower[queryIndex]) {
        score++;
        queryIndex++;
      }
    }

    return queryIndex === queryLower.length ? score / textLower.length : 0;
  };

  // Search and filter results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results = allAttractions
      .map((attraction) => {
        // Calculate relevance score based on multiple factors
        const titleScore = fuzzyMatch(attraction.title, searchQuery) * 3;
        const contentScore = fuzzyMatch(attraction.content, searchQuery) * 1;
        const addressScore = fuzzyMatch(attraction.address, searchQuery) * 2;

        // Keywords for marine and forest activities
        const marineKeywords = [
          "snorkeling",
          "diving",
          "coral",
          "reef",
          "marine",
          "ocean",
          "fish",
          "dolphin",
          "turtle",
        ];
        const forestKeywords = [
          "hiking",
          "wildlife",
          "monkey",
          "forest",
          "trees",
          "nature",
          "walking",
          "endemic",
        ];

        let keywordScore = 0;
        const queryWords = searchQuery.toLowerCase().split(" ");

        queryWords.forEach((word) => {
          if (
            attraction.category === "marine" &&
            marineKeywords.some(
              (keyword) => keyword.includes(word) || word.includes(keyword)
            )
          ) {
            keywordScore += 0.5;
          }
          if (
            attraction.category === "forest" &&
            forestKeywords.some(
              (keyword) => keyword.includes(word) || word.includes(keyword)
            )
          ) {
            keywordScore += 0.5;
          }
        });

        const totalScore =
          titleScore + contentScore + addressScore + keywordScore;

        return {
          ...attraction,
          relevanceScore: totalScore,
        } as SearchResult;
      })
      .filter((result) => result.relevanceScore > 0)
      .filter(
        (result) =>
          selectedCategory === "all" || result.category === selectedCategory
      )
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 8); // Limit to top 8 results

    return results;
  }, [searchQuery, allAttractions, selectedCategory]);

  // Auto-suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return [
        "Chumbe Island",
        "Jozani Forest",
        "snorkeling",
        "hiking",
        "coral reef",
        "red colobus monkey",
      ];
    }

    const suggestionKeywords = [
      "Chumbe Island",
      "Jozani Forest",
      "Mnemba Atoll",
      "Prison Island",
      "snorkeling",
      "diving",
      "hiking",
      "wildlife watching",
      "coral reef",
      "mangrove",
      "endemic species",
      "conservation",
      "red colobus monkey",
      "dolphins",
      "sea turtles",
      "tropical fish",
    ];

    return suggestionKeywords
      .filter(
        (keyword) =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase()) &&
          keyword.toLowerCase() !== searchQuery.toLowerCase()
      )
      .slice(0, 4);
  }, [searchQuery]);

  // Clear search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedCategory("all");
    }
  }, [isOpen]);

  const handleResultClick = () => {
    onClose();
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div
        //   className="space-y-4"
        className="search-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        {/* <div className="relative">
          <span className="fa fa-search absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search attractions, activities, species, locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg"
            autoFocus
          />
        </div> */}

        <div className="search-bar">
          <i className="search-icon fa-solid fa-search" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            autoFocus
            placeholder="Search attractions, activities, species, locations..."
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setSelectedCategory("marine")}
            className={`px-4 py-2 rounded-full border transition-colors flex items-center gap-2 ${
              selectedCategory === "marine"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
            }`}
          >
            <span className="fa fa-leaf" />
            Marine
          </button>
          <button
            onClick={() => setSelectedCategory("forest")}
            className={`px-4 py-2 rounded-full border transition-colors flex items-center gap-2 ${
              selectedCategory === "forest"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-green-300"
            }`}
          >
            <span className="fa fa-leaf" />
            Forest
          </button>
        </div>

        {/* Auto-suggestions */}
        {searchQuery && suggestions.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto space-y-3">
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <span className="fa fa-magnifyglass mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-lg">No attractions found</p>
              <p className="text-sm">
                Try different keywords or check the suggestions above
              </p>
            </div>
          )}

          {searchResults.map((result) => (
            <Link
              key={result.id}
              to={`/site/${result.slug}`}
              onClick={handleResultClick}
              className="block p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex gap-4">
                {result.featured_image && (
                  <img
                    src={result.featured_image}
                    alt={result.title}
                    className="w-20 h-20 object-cover rounded-lg shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">
                      {result.title}
                    </h3>
                    <span
                      className={`ml-2 shrink-0 badge ${
                        result.category === "marine"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {result.category === "marine" ? (
                        <>
                          <span className="mr-1 fa fa-fish" /> Marine
                        </>
                      ) : (
                        <>
                          <span className="mr-1 fa fa-leaf" /> Forest
                        </>
                      )}
                    </span>
                  </div>
                  {result.content && (
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {result.content.substring(0, 120)}...
                    </p>
                  )}
                  {result.address && (
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="fa fa-map mr-1" />
                      {result.address}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Popular searches:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Chumbe Island Coral Park",
                "Jozani Chwaka Bay",
                "Snorkeling tours",
                "Red colobus monkeys",
                "Coral conservation",
                "Mangrove forests",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="p-3 text-left border rounded-lg hover:shadow-sm transition-shadow bg-gray-50 hover:bg-gray-100"
                >
                  <p className="font-medium text-sm">{term}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearchModal;
