import React from 'react';
import backgroundImage from './winterBackground.jpg';
import '@fontsource/press-start-2p'; // Install with `npm install @fontsource/press-start-2p`
import './App.css';
import * as Mui from '@mui/material';
import {Box, Typography, Grid2, Card, CardMedia, Link, useTheme} from "@mui/material";

const cardsData = [
    {
        cardColor: '#456273',
        cardWidth: '100%',
        imageLink: '',
        title: 'Welcome',
        desc: 'This is a work in progress link page, you see nothing',
        link: '',
        circleImage: false,
    },
    {
        cardColor: '#456273',
        cardWidth: 'flex',
        imageLink: 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png',
        title: 'Discord',
        desc: '@vast_the_doge',
        link: '',
        circleImage: true,
    },
    {
        cardColor: '#456273',
        cardWidth: 'flex',
        imageLink: 'https://www.generation4x4mag.fr/wp-content/uploads/2022/12/Steam-logo-png.png.webp',
        title: 'Steam',
        desc: '@VAST_THE_DOGE',
        link: 'https://steamcommunity.com/profiles/76561199207708404',
        circleImage: true,
    },
    {
        cardColor: '#456273',
        cardWidth: 'flex',
        imageLink: 'https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png',
        title: 'YouTube',
        desc: '@VAST_THE_DOGE',
        link: 'https://www.youtube.com/@VAST_THE_DOGE',
        circleImage: true,
    },
    {
        cardColor: '#456273',
        cardWidth: 'flex',
        imageLink: 'https://pngimg.com/uploads/github/github_PNG40.png',
        title: 'Github',
        desc: '@VAST-THE-DOGE',
        link: 'https://github.com/VAST-THE-DOGE',
        circleImage: true,
    },
    {
        cardColor: '#456273',
        cardWidth: 'flex',
        imageLink: 'https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png',
        title: 'Email',
        desc: 'vastspacewill@gmail.com',
        link: 'mailto:vastspacewill@gmail.com',
        circleImage: true,
    },
    {
        cardColor: '#456273',
        cardWidth: '50%',
        imageLink: 'https://repository-images.githubusercontent.com/738748647/2edc846e-d2db-40c6-ba53-b9711eada980',
        title: 'Tiles',
        desc: 'Check out my game called Tiles on Github that I have been working on!',
        link: 'https://github.com/VAST-THE-DOGE/Tiles',
        circleImage: false,
    },
];

function App() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                overflowX: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp6839057.jpg)', // Replace with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    zIndex: -1,
                }}
            />

            <Box>
                <Box
                    sx={{
                        size: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    <Typography variant="h2" sx={{
                        opacity: 1,
                        textShadow: '8px 8px 10px rgba(0, 0, 0, 0.7)',
                        fontFamily: '"Press Start 2P"',
                        color: 'white',
                        fontSize: 'clamp(8px, 3vw, 64px)',
                        marginTop: '16px',
                    }}>
                        The Vast Page of Stuff
                    </Typography>

                </Box>
                <Box
                    sx={{
                        size: '10%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                <Typography variant="h5" sx={{
                    opacity: 1,
                    textShadow: '8px 8px 10px rgba(0, 0, 0, 0.7)',
                    fontFamily: '"Press Start 2P"',
                    color: 'white',
                    fontSize: 'clamp(8px, 1.5vw, 32px)',
                    marginTop: '16px',
                    marginBottom: '16px',
                }}>
                    By: VAST THE DOGE / William Herbert
                </Typography></Box>

                <Grid2
                    sx={{
                        backgroundColor: 'rgba(50, 50, 50, 0.8)', // Transparent dark gray
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '16px auto',
                        width: '80%',
                        color: '#fff',
                        boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.7)',
                    }}
                    container spacing={3}
                    justifyContent="center"
                >
                    {
                    cardsData.map((card, index) => (
                            <MediaCard
                                cardColor={card.cardColor}
                                cardWidth={card.cardWidth}
                                imageLink={card.imageLink}
                                title={card.title}
                                desc={card.desc}
                                link={card.link}
                                circle={card.circleImage}
                            />
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
}

interface MediaCardProps {
    cardColor: string;
    cardWidth: string;
    imageLink: string;
    title: string;
    desc: string;
    link: string;
    circle: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({
                                                 cardColor,
                                                 cardWidth,
                                                 imageLink,
                                                 title,
                                                 desc,
                                                 link,
                                                 circle,
                                             }) =>
{
    const theme = useTheme();
    const textColor = theme.palette.getContrastText(cardColor)

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: cardWidth,
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: cardColor,
                color: 'white',
                boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
            }}
        >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {imageLink === '' ? (<Box></Box>) :
                        (<CardMedia
                            component="img"
                            image={imageLink}
                            alt="CardImage"
                            sx={{
                                width: imageLink === '' ? "1px" : '64px',
                                height: '64px',
                                borderRadius: circle ? '50%' : '15%',
                            }}
                        />)
                    }
                <Typography variant="h5" sx={{
                    flex: 1,
                    fontWeight: 'bold',
                    color: textColor,
                    textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
                    fontFamily: '"Press Start 2P"', }}>
                    {title}
                </Typography>
            </Box>

            <Typography
                variant="body2"
                sx={{
                    textShadow: link === "" ? '4px 4px 10px rgba(0, 0, 0, 0.5)' : '4px 4px 5px rgba(100, 200, 250, 1)',
                    fontFamily: '"Press Start 2P"',
                    textAlign: 'center',
                    marginTop: '16px',
                    color: textColor,
                }}
            >
                {link === "" ? (desc)
                        :
                    (<Link href={link} target="_blank" underline="always" sx={{ color: textColor, }}>
                    {desc}
                    </Link>)
                }
            </Typography>
        </Card>
    );
};

export default App;
