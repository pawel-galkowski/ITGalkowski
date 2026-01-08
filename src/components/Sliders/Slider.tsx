import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, IconButton, SxProps, Theme } from '@mui/material'
import {
  imageContainerStyles,
  leftNavButtonStyles,
  rightNavButtonStyles
} from './styles'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { SliderImageProps } from './types'

const ImageCarousel: React.FC<{ images: SliderImageProps[], imgStyles?: SxProps<Theme>, sx?: SxProps<Theme> }> = ({
  images,
  imgStyles,
  sx
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      if (w >= 1200) setVisibleCount(6)
      else if (w >= 992) setVisibleCount(5)
      else if (w >= 768) setVisibleCount(4)
      else if (w >= 480) setVisibleCount(3)
      else setVisibleCount(2)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const displayImages = useMemo(() => {
    if (!images || images.length === 0) return []
    if (images.length > visibleCount) return images

    const result: SliderImageProps[] = []
    // Repeat logos until we have at least visibleCount * 2 items for smooth movement
    while (result.length < visibleCount * 2) {
      result.push(...images)
      // safety: break if images is empty (shouldn't happen)
      if (images.length === 0) break
    }
    return result
  }, [images, visibleCount])

  const maxIndex = useMemo(() => Math.max(0, displayImages.length - visibleCount), [displayImages.length, visibleCount])

  const handlePreviousClick = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick()
    }, 4500)
    return () => clearInterval(interval)
  }, [handleNextClick])

  // reset index if displayImages changed and currentIndex is out of range
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0)
  }, [displayImages.length, maxIndex, currentIndex])

  const itemWidth = 100 / visibleCount

  return (
    <Box sx={[imageContainerStyles, sx ? sx : {}]}>
      <IconButton sx={leftNavButtonStyles} onClick={handlePreviousClick}>
        <NavigateBeforeIcon />
      </IconButton>

      <Box
        className='slider-track'
        sx={{ transform: `translateX(-${currentIndex * itemWidth}%)`, width: `${(displayImages.length * 100) / visibleCount}%` }}
      >
        {displayImages.map((image: SliderImageProps, index: number) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 ${itemWidth}%`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 2
            }}
          >
            <Box component='img' src={image.src} alt={image.alt} sx={{ height: '100%', width: 'auto', ...imgStyles }} />
          </Box>
        ))}
      </Box>

      <IconButton sx={rightNavButtonStyles} onClick={handleNextClick}>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  )
}

export default ImageCarousel
