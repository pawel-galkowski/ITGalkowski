"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

const drawerWidth = 240;

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const navItems = [
    { key: "header.home", label: t("header.home") },
    { key: "header.about", label: t("header.about") },
    { key: "header.contact", label: t("header.contact") },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo ITGalkowski
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ padding: 2 }}
        data-testid="header"
        aria-label="Site header navigation"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open navigation drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="/img/logo.png"
              alt="ITGalkowski logo"
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxWidth: 300,
              }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} role="navigation">
            {navItems.map((item) => (
              <Button key={item.key} sx={{ color: "#fff" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav aria-label="Main navigation">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
