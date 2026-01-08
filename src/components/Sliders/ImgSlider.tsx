import React from 'react'
import Slider from './Slider'
import { Box, Typography } from '@mui/material'
import { sectionStyles } from './styles'

const images = [
  {
    src: 'https://media.gettyimages.com/id/2215388159/photo/responsive-web-design-concept-on-phone-and-computer-studio-portfolio-page-with-we-build.jpg?b=1&s=2048x2048&w=0&k=20&c=danXcibwq1oJUcMhBLz1eAEX68r_SEqFjD8IDgKkEW4=',
    alt: 'we build websites'
  },
  {
    src: 'https://media.gettyimages.com/id/1553547551/photo/web-development-concept-creation-digital-software-on-web-via-laptop-programming-and.jpg?b=1&s=2048x2048&w=0&k=20&c=paHukippelROd8J39dZebzC13AKCzVOEnXmiigiqYiU=',
    alt: 'we build web applications'
  },
  {
    src: 'https://media.gettyimages.com/id/2207592397/photo/creative-3d-rendering-of-html-css-and-javascript-code-snippets-with-modern-icons-on-a-dark.jpg?b=1&s=2048x2048&w=0&k=20&c=ot-OTzPPgZAeDI7vG19xmCvZpwkivXTkozNazlk7Cjg=',
    alt: 'clear intuitive code'
  },
  {
    src: 'https://media.gettyimages.com/id/1397392747/photo/web-browser.jpg?b=1&s=2048x2048&w=0&k=20&c=wzmTXwi59B0fjgDIPtw10RlSD8ml4nEHEhL9iO1rnqs=',
    alt: 'multiple device compatibility'
  },
  {
    src: 'https://media.gettyimages.com/id/846489122/photo/responsive-web-design-website-wireframe-sketch-layout-on-computer-screen.jpg?b=1&s=2048x2048&w=0&k=20&c=C4Q3g56v8nOK8JJMuL538KPafXfQ4NMzrsWOx9esrBc=',
    alt: 'complex strategy made simple'
  },
  {
    src: 'https://media.gettyimages.com/id/2203910240/photo/laptop-with-programming-source-code-coding-icon-coding-screen-web-development-concept.jpg?b=1&s=2048x2048&w=0&k=20&c=_KdAw1vSUfQyQD-tx_XSyYc9a6GfX_I_gTiMh_q8wSo=',
    alt: 'cutting-edge technology'
  }
]

const ImgSlider: React.FC = () => (
  <Box
    sx={{
      ...sectionStyles,
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: 'calc(-50vw + 0px)',
      marginRight: 'calc(-50vw + 0px)',
      padding: '3rem 0'
    }}>
    <Box sx={{ maxWidth: 1200, width: '100%', margin: '0 auto' }}>
      <Typography variant='h2' sx={{ textAlign: 'center', mt: 0, mb: 2 }}>
        Proudly Supported by
      </Typography>
    </Box>
    <Slider images={images} sx={{ height: 700 }} />
  </Box>
)
export default ImgSlider
