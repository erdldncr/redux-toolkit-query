import { useState } from 'react';
import { Grid, Box, Button, Container } from '@mui/material';
import { ArtSummaryDetails } from '../components/ArtSummaryDetails';
import { useGetAllArtDetailsQuery } from '../api/getAllArtDetails';

function MainPage() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllArtDetailsQuery(page);
  if (error) {
    return <p>{error?.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(isLoading);
  return (
    <Box sx={{ flexGrow: 1, padding: '5%' }}>
      <Grid container spacing={4}>
        {data.data?.map((artSummary) => (
          <ArtSummaryDetails
            key={artSummary.id + artSummary.title}
            {...artSummary}
          />
        ))}
      </Grid>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={page === 1}
          variant="contained"
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={page === data?.data?.pagination?.total_pages}
          onClick={() => setPage((prev) => prev + 1)}
          variant="contained"
        >
          Next
        </Button>
      </Container>
    </Box>
  );
}

export default MainPage;
