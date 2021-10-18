import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostsList from '../../components/postslist';

function Posts(props) {
	const [posts, setPosts] = useState();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				'https://gorest.co.in/public/v1/posts'
			);
			setPosts(data.data);
		} catch (error) {
			console.log('Error: ',error);
		}
	};
	if (!posts) {
		return 'Loading';
	}
	return (
		<div>
			<Container>
				<Typography variant="h4">Posts</Typography>
				<PostsList posts={posts} />
			</Container>
		</div>
	);
}

export default Posts;
