import { useNavigate } from 'react-router';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
export const ArtSummaryDetails = ({
  title,
  id,
  place_of_origin,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={6} md={4} lg={4}>
      <Card sx={{ height: '500px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description ? (
            <Typography
              sx={{ maxHeight: '350px', overflow: 'hidden' }}
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <Typography>No Description is provided for this art.</Typography>
          )}

          <Typography gutterBottom component="div">
            {place_of_origin}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              navigate(`/${id}`);
            }}
            size="small"
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
