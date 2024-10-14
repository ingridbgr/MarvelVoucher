import ComicContainer from './ComicContainer';
import { TEXTS } from '../constants';

const ComicDisplay = ({ comics, loading, showComics, selectedYear, message, error, backgroundColor, textColor }) => {
    if (loading) {
        return <p>{TEXTS.loadingMessage}</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    if (showComics) {
        return (
            <ComicContainer
                comics={comics}
                selectedYear={selectedYear}
                message={message}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        );
    }

    return null; // Return null if nothing is to be displayed
};

export default ComicDisplay;