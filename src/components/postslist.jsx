import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

function PostsList(props) {
	const { posts } = props;
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell align="center">Title</TableCell>
							<TableCell align="center">Body</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{posts.map((row) => (
							<TableRow
								key={row.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell
									component="th"
									scope="row"
									align="center"
								>
									{row.title}
								</TableCell>
								<TableCell align="center">{row.body}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default PostsList;
