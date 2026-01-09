import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { v4 as uuidv4 } from "uuid";

const itemData = [
  {
    img: "https://media.gettyimages.com/id/1455953950/photo/professional-development-programmer-typing-on-a-laptop-computer-keyboard-screens-show-coding.jpg?b=1&s=2048x2048&w=0&k=20&c=qu-hF5cUuFTwr4FPDF-xdV_5AXQB9uLsl2qRflEDCB0=",
    title: "Custom Web Application Development",
    content:
      "Expertly crafted, dynamic web solutions tailored to your business needs and user experiences.",
  },
  {
    img: "https://media.gettyimages.com/id/1067358382/photo/computer-laptop-tablet-and-phone-with-responsive-web-design-website-at-office-mockup.jpg?b=1&s=2048x2048&w=0&k=20&c=5Q3zFNSHVqLlq0NmuT6Yxk57r2WWz0cs3kZ-j7G3M8U=",
    title: "Responsive Frontend Design",
    content:
      "Create stunning, responsive interfaces that adapt seamlessly across all devices and platforms.",
  },
  {
    img: "https://media.gettyimages.com/id/1427444499/photo/programming-code-software-developer-computer-technology.jpg?b=1&s=2048x2048&w=0&k=20&c=bEZMsNDUIBwuE1zqUsQcoU2mqDU1rRwNSDseLQo0AtI=",
    title: "Backend API Integration",
    content:
      "Streamline your operations with robust, scalable APIs for efficient data management and connectivity.",
  },
  {
    img: "https://media.gettyimages.com/id/1266872321/photo/team-of-professional-developer-programmer-cooperation-meeting-and-brainstorming-and.jpg?b=1&s=2048x2048&w=0&k=20&c=OHXft3OCkWN1raydC-PGvwLWWrX27cBHytaLzNx4g-E=",
    title: "Full-stack JavaScript Consultation",
    content:
      "Leverage expert guidance on JavaScript development to optimize your tech stack and strategy.",
  },
];

const ImageTiles: React.FC = () => (
  <ImageList rowHeight="auto">
    {itemData.map((item) => (
      <ImageListItem key={uuidv4()}>
        <Box
          component="img"
          src={item.img}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <ImageListItemBar
          title={item.title}
          subtitle={<span>by: {item.content}</span>}
          position="below"
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export default ImageTiles;
