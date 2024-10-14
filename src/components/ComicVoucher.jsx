const ComicVoucher = ({ comic, message, backgroundColor, textColor }) => {
    return (
        <div className="comic-card" style={{ backgroundColor, color: textColor }}>
            <img src={comic.thumbnail} alt={comic.title} />
            <div>
                <h3>{comic.title}</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ComicVoucher;