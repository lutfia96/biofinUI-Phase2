import React, { useEffect, useRef } from "react";
import "./GlobalSearchModal.css";
interface SearchModalProps {
    onClose: () => void;
}

const GlobalSearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();

        // Disable background scroll
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div
                className="search-modal"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            >
                {/* Close Button */}
                <button className="close-btn" onClick={onClose}>
                    <i className="fa-thin fa-xmark" />
                </button>

                {/* Search Bar */}
                <div className="search-bar">
                    <i className="search-icon fa-solid fa-search" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search attractions, activities, species, locations..."
                    />
                </div>

                {/* Category Buttons */}
                <div className="category-buttons">
                    <button className="active">All Categories</button>
                    <button>
                        <i className="fa-regular fa-fish" /> Marine
                    </button>
                    <button>
                        <i className="fa-light fa-leaf" /> Forest
                    </button>
                </div>

                {/* Popular Searches */}
                <div className="popular-searches">
                    <p>Popular searches:</p>
                    <div className="search-tags">
                        <button>Chumbe Island Coral Park</button>
                        <button>Jozani Chwaka Bay</button>
                        <button>Snorkeling tours</button>
                        <button>Red colobus monkeys</button>
                        <button>Coral conservation</button>
                        <button>Mangrove forests</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalSearchModal;