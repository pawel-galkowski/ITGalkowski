import styles from './index.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import ExperienceTimeline from '@/components/Experience/ExperienceTimeline'
import Faqs from '@/components/faqs/Faqs'
import ImageTiles from '@/components/imageTiles/ImageTiles'
import LogoSlider from '@/components/Sliders/LogoSlider'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { defaultSectionStyle } from './styles'
import EntrySection from '@/sections/EntrySection'
import InovationSection from '../sections/InovationSection'
import ImgSlider from '@/components/Sliders/ImgSlider'

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
        <EntrySection />
        <InovationSection />
        <Box sx={defaultSectionStyle}>
          <Container>
            <ImageTiles />
            <ImgSlider />
            <Typography variant='h2' sx={{ textAlign: 'center', mt: 6, mb: 2 }}>
              My work timeline
            </Typography>
            <ExperienceTimeline />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
              }}>
              <Box
                component='img'
                src='https://media.gettyimages.com/id/2205520230/photo/3d-icon-for-web-development-and-software-engineering.jpg?b=1&s=2048x2048&w=0&k=20&c=sg_V1rAwBQp9fP76ToxnVeXoaam_4c4bW_yFprT0AVY='
                alt='Placeholder'
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <Box
                sx={{
                  ml: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}>
                <Typography variant='h3'>
                  Empowering Digital Solutions in Katowice
                </Typography>
                <Typography variant='body2'>
                  Located in the heart of Katowice, Software Engineering
                  showcases a diverse portfolio of full-stack JavaScript
                  projects that highlight innovation and expertise. Specializing
                  in building seamless user experiences, our work combines
                  cutting-edge technology with a passion for solving complex
                  problems. We are committed to delivering high-quality software
                  solutions that drive success for businesses around the world.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Container>
          <Faqs />
        </Container>
        <Box
          sx={{
            width: '100%',
            height: 400,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'black',
            gap: 2,
            backgroundImage:
              'url(https://media.gettyimages.com/id/1413283697/photo/writing-code-creating-website-dashboards-and-programming-help-for-technology-website-upkeep.jpg?b=1&s=2048x2048&w=0&k=20&c=uRu5fvA1eopJyvF5AiiQIOlK6xvaoHhBrucKIupMQdM=)'
          }}>
          <Typography variant='h1'>Elevate Your Web Experience</Typography>
          <Typography variant='body1'>
            Showcasing a robust full-stack JavaScript portfolio built on a
            TypeScript foundation, right from the heart of Katowice.
          </Typography>
          <Button variant='contained' color='primary'>
            Explore Portfolio
          </Button>
        </Box>
      </Box>

      <Footer />
    </main>
  )
}
export default Home
