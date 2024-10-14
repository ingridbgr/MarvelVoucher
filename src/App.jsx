import { useState } from "react";
import Header from "./components/Header";
import ComicForm from "./components/ComicForm";
import ComicDisplay from "./components/ComicDisplay";
import { useComicContext } from "./context/ComicsContext"; // Import the context
import { TEXTS } from "./constants"; 

const App = () => {
    const { comics, availableYears, loading, loadComics } = useComicContext();
    const [selectedYear, setSelectedYear] = useState("");
    const [message, setMessage] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState("#000000");
    const [showComics, setShowComics] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setShowComics(false);
        setError(null);
        try {
            await loadComics(); // Load comics from the API
            setShowComics(true); // Show comics after successful loading
        } catch (err) {
            setError("Failed to load comics. Please try again.");
        }
    };

    return (
        <div>
            <Header title={TEXTS.title} description={TEXTS.description} />
            <ComicForm
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                message={message}
                setMessage={setMessage}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                textColor={textColor}
                setTextColor={setTextColor}
                handleGenerate={handleGenerate}
                availableYears={availableYears}
                backgroundColorLabel={TEXTS.backgroundColorLabel}
                textColorLabel={TEXTS.textColorLabel}
                yearLabel={TEXTS.yearLabel}
                messageLabel={TEXTS.messageLabel}
                generateButtonText={TEXTS.generateButtonText}
            />
            <h2>{TEXTS.preview}</h2>
            <ComicDisplay
                comics={comics}
                loading={loading}
                showComics={showComics}
                selectedYear={selectedYear}
                message={message}
                error={error}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        </div>
    );
};

export default App;