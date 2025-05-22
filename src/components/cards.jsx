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
  <Grid container spacing={5} sx={{ mt: { xs: 6, md: 48 }, mb: { xs: 0, md: 0, lg: 0 }, px: { xs: 6, md: 1, }, py:{ xs: 0, md: 9, } , justifyContent: 'center', zIndex: 1000, }}>
    {cardData.map((card, idx) => (
      <Grid item key={card.title} >
        <Box
          sx={{
            bgcolor: 'rgba(97, 95, 95, 0.35)',
            borderRadius: 2,
            p: 2,
            color: 'white',
            minHeight: 130,
            minWidth: { xs: '95%', sm: '80%', md: '310px',  },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 3,
            height: '40%',
            backdropFilter: 'blur(1px)',
            maxWidth: { xs: '340px', sm: '400px', md: '310px', lg: '320px' }
          }}
        >
          <Typography variant="h7" fontWeight={600} sx={{ mb: 1, color: 'white' }}>
            {card.title}
          </Typography>
          <Typography variant="body3" sx={{ mb: 1, color: 'white', fontSize: 16 }}>
            {card.desc}
          </Typography>
          <Box>
            <a
              href={card.link.href}
              style={{
                color: '#F36434',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: 14,
                display: 'inline-flex',
                alignItems: 'center',
                letterSpacing: 0.2,
              }}
            >
              {card.link.text} <span style={{ fontSize: 18, marginLeft: 4 }}>&#187;</span>
            </a>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Cards;
