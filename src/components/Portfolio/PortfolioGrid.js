import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import elektrikell from '../../img/photos/elektrikell.png';
import furniture from '../../img/photos/furniture.png';
import resto from '../../img/photos/resto.png';
import todo from '../../img/photos/todo.png';
import weather from '../../img/photos/weather-app.png';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PortfolioGrid = () => {

    const workz = [
        {
            work: 'Restaurant Project',
            descr:
                'This project was created using the latest version of React, ensuring a modern and efficient user interface. The website is also fully responsive, providing an optimal viewing experience on all devices',
            photo: resto,
            link: 'https://qqrban.github.io/restaurant-example/',
            border: 1,
        },
        {
            work: 'Elektrikell',
            descr:
                'This website is an analogue of the Estonian website elektrikell.ee. Made on React 18 and Bootstrap 5',
            photo: elektrikell,
            link: 'https://qqrban.github.io/elektrikell/',
            border: 2,
        },
        {
            work: 'Furniture shop',
            descr:
                'This work was done in vanilla JavaScript. This project was created during my studies on the FoxmindEd platform. This project represents a kind of online furniture store',
            photo: furniture,
            link: 'https://furniture12345.netlify.app/index.html',
            border: 1,
        },
        {
            work: 'To Do List',
            descr:
                'This project was one of the first I made on React 18. The UI is in a pixel style',
            photo: todo,
            link: 'https://kurban-todo-list.netlify.app/',
            border: 2,
        },
        {
            work: 'Weather App',
            descr:
                'This weather app, built on React, provides accurate and real-time weather information with a sleek and intuitive user interface. Stay informed about the weather with just a few clicks.',
            photo: weather,
            link: 'https://thunderous-weather-app.netlify.app/',
            border: 1,
        },
    ];

    const openProj = (link) => {
        window.open(link);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                {workz.map((work, i) => (
                    <Grid className="grid-item" key={i} item lg={4} md={6} xs={12}>
                        <motion.div
                            className="home-motion"
                            initial={{ x: -9999 }}
                            animate={{ x: 1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: `0.${i + 3}`,
                                    duration: 1,
                                },
                            }}
                        >
                            <Item
                                sx={
                                    work.border === 1
                                        ? { bgcolor: '#7E74F1' }
                                        : { bgcolor: 'white' }
                                }
                            >
                                <div onClick={() => openProj(work.link)}>
                                    <h2>{work.work}</h2>
                                    <p>{work.descr}</p>
                                </div>
                                <img src={work.photo} alt={work.work} />
                            </Item>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PortfolioGrid;
