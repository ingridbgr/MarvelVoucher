const ComicForm = ({
    selectedYear,
    setSelectedYear,
    message,
    setMessage,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    handleGenerate,
    availableYears,
    backgroundColorLabel,
    yearLabel,
    messageLabel,
    generateButtonText,
    textColorLabel
}) => {
    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length <= 100) { // Limit message length to 100 characters
            setMessage(value);
        }
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="comic-form">
            <div className="filter-container">
                <div className="filter-item">
                    <label htmlFor="year-select">{yearLabel}</label>
                    <select 
                        id="year-select" 
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="">Select a year</option>
                        {availableYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-item">
                    <label htmlFor="background-color">{backgroundColorLabel}</label>
                    <input
                        id="background-color"
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                </div>

                <div className="filter-item">
                    <label htmlFor="text-color">{textColorLabel}</label>
                    <input
                        id="text-color"
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                    />
                </div>

                <div className="filter-item">
                    <label htmlFor="message-input">{messageLabel}</label>
                    <input
                        id="message-input"
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        maxLength={100} // Enforce maximum length in the input itself
                    />
                </div>

                <button type="submit">{generateButtonText}</button>
            </div>
        </form>
    );
};

export default ComicForm;