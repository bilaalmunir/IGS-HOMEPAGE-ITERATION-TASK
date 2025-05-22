import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const cardData = [
  {
    title: 'Expertly crafted solutions with global reach',
    desc: 'Our procurement and supply chain processes enhance operations for your organization\'s success.',
    link: { text: "Let's Co-Create", href: '#', accent: true },
  },
  {
    title: 'Strategic, collaborative, and driven',
    desc: 'We leverage innovative strategies and cutting-edge technology to streamline our processes.',
    link: { text: 'Business Process Outsourcing', href: '#', accent: true },
  },
  {
    title: 'Fresh perspective for continuous transformation',
    desc: 'Expert teams to develop groundbreaking solutions "Yes, we can do it even better."',
    link: { text: 'Direct Procurement', href: '#', accent: true },
  },
];

const Cards = () => (
  <Grid container spacing={3} sx={{ mt: { xs: 6, md: 48 }, mb: { xs: 4, md: 0 }, px: { xs: 2, md: 8 }, justifyContent: 'center', zIndex: 1000,  }}>
    {cardData.map((card, idx) => (
      <Grid item xs={12} md={4} key={card.title} sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            bgcolor: 'rgba(97, 95, 95, 0.35)',
            borderRadius: 3,
            p: 3,
            color: 'white',
            minHeight: 180,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 3,
            height: '40%',
            backdropFilter: 'blur(1px)',
            maxWidth: { xs: '95%', sm: '80%', md: '200px', lg: '350px' }
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: 'white' }}>
            {card.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'white', fontSize: 16 }}>
            {card.desc}
          </Typography>
          <Box>
            <a
              href={card.link.href}
              style={{
                color: '#F36434',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: 16,
                display: 'inline-flex',
                alignItems: 'center',
                letterSpacing: 0.2,
              }}
            >
              {card.link.text} <span style={{ fontSize: 22, marginLeft: 4 }}>&#187;</span>
            </a>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Cards;
