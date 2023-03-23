import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import useFeach from "../../hooks/useFeach";

export default function AlbumList() {

  const navigate = useNavigate();
  const lists = useFeach(config.rest.url + "/bbs/lists");

  function btnWrite() {
    navigate("/album/write");
  }

  return (
    <main>
      <Box
        sx={{
          pb: 6
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            이채아 Album
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            2022.05.24
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => {
              navigate("/album/write");
            }}>등록하기</Button>
            <Button variant="outlined">두번째 액션</Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          {lists.map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: '12.25%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography>
                    {article.contents}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => {
                    navigate("/album/detail");
                  }}>보기</Button>
                  <Button size="small">수정</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>


  );
}