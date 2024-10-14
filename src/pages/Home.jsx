import React, { useContext } from 'react';

import { ComicsContext } from '../context/ComicsContext';
import ComicList from '../component/ComicList';

// src/pages/Home.js

const Home = () => {
	const { comics, loading } = useContext(ComicsContext);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h1>Marvel Comics</h1>
			<ComicList comics={comics} />
		</div>
	);
};

export default Home;
