import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import en from "@/components/ImageTiles/en.json";
import pl from "@/components/ImageTiles/pl.json";
import { useLanguage } from "@/context/LanguageContext";

const ImageTiles: React.FC = () => {
  const { language } = useLanguage();
  const itemData = language === "pl" ? pl : en;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: 3,
        width: "100%",
      }}
    >
      {itemData.map((item) => (
        <Box key={uuidv4()} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            component="img"
            src={item.src}
            alt={item.title}
            sx={{
              width: "100%",
              height: "auto",
              aspectRatio: "1",
              objectFit: "cover",
              marginBottom: 2,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ImageTiles;
