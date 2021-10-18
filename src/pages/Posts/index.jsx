import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import PostsList from '../../components/postslist';

function Posts() {
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
			console.log('Error: ', error);
		}
	};
	if (!posts) {
		return 'Loading';
	}
	return (
		<div>
			<Container>
				<Typography variant="h4" style={{ margin: '12px 0' }}>
					Posts
				</Typography>
				<PostsList posts={posts} />
			</Container>
		</div>
	);
}

export default Posts;
