import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchComics } from "../api/marvelApi"; // Ensure the correct import path
// Create the context
export const ComicContext = createContext();

// Custom hook to use the ComicContext
export const useComicContext = () => {
    return useContext(ComicContext);
};

// Provider component
export const ComicProvider = ({ children }) => {
    const [comics, setComics] = useState([]);
    const [availableYears, setAvailableYears] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadComics = async () => {
        setLoading(true);
        try {
            const fetchedComics = await fetchComics();
            setComics(fetchedComics);

            // Extract unique years from the fetched comics
            const years = [...new Set(fetchedComics.map(comic => {
                const yearMatch = comic.title.match(/\((\d{4})\)/);
                return yearMatch ? yearMatch[1] : null;
            }).filter(Boolean))];

            setAvailableYears(years);
        } catch (error) {
            console.error("Error fetching comics:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadComics(); // Load comics when the component mounts
    }, []);

    return (
        <ComicContext.Provider value={{ comics, availableYears, loading, loadComics }}>
            {children}
        </ComicContext.Provider>
    );
};
