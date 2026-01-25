import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import en from "@/components/ImageTiles/data/en.json";
import pl from "@/components/ImageTiles/data/pl.json";
import { useLanguage } from "@/context/LanguageContext";
import { imageTilesStyles } from "@/components/imageTiles/ImageTiles.styles";

export const imageTilesTestIds = {
  root: "image-tiles-root",
  tile: "image-tiles-tile",
  image: "image-tiles-image",
};

const ImageTiles: React.FC = () => {
  const { language } = useLanguage();
  const itemData = language === "pl" ? pl : en;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={imageTilesStyles.root(isMobile)}
      data-testid={imageTilesTestIds.root}
    >
      {itemData.map((item) => (
        <Box
          key={uuidv4()}
          sx={imageTilesStyles.tile}
          data-testid={imageTilesTestIds.tile}
        >
          <Box
            component="img"
            src={item.src}
            alt={item.title}
            sx={imageTilesStyles.image}
            data-testid={imageTilesTestIds.image}
          />
          <Typography variant="h6" sx={imageTilesStyles.title}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={imageTilesStyles.content}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ImageTiles;
