import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetArtDetailsByIdQuery } from '../api/getArtDetailsById';

export const ArtDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetArtDetailsByIdQuery(id);
  if (error) {
    return <p>{error?.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const { title, description, artist_title } = data?.data;
  return (
    <Container>
      <Typography gutterBottom variant="h1">
        {title ?? 'text'}
      </Typography>
      <Typography gutterBottom variant="h5">
        Description:{' '}
        {description ? (
          <span dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          'No despription for this art.'
        )}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Artist:{' '}
        {artist_title ? (
          <span>{artist_title}</span>
        ) : (
          'No artist title is for this art.'
        )}
      </Typography>
    </Container>
  );
};
