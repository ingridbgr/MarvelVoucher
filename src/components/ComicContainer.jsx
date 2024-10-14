import ComicVoucher from './ComicVoucher';

const ComicContainer = ({ comics, selectedYear, message, backgroundColor, textColor }) => {
    const filteredComics = comics.filter(comic => {
        const yearMatch = comic.title.match(/\((\d{4})\)/);
        return selectedYear ? yearMatch && yearMatch[1] === selectedYear : true;
    });

    return (
        <div className="comic-container">
            {filteredComics.length > 0 ? (
                filteredComics.map(comic => (
                    <ComicVoucher
                        key={comic.id}
                        comic={comic}
                        message={message}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                    />
                ))
            ) : (
                <p>{TEXTS.noComicsMessage}</p>
            )}
        </div>
    );
};

export default ComicContainer;