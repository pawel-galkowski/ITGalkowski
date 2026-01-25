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
import { Languages } from "@/i18n/types";
import { LanguageButtons } from "../utils";
import { headerStyles } from "@/components/header/Header.styles";

export const headerTestIds = {
  root: "header-root",
  nav: "header-nav",
  logo: "header-logo",
  menuButton: "header-menu-button",
  drawer: "header-drawer",
  drawerTitle: "header-drawer-title",
  drawerNav: "header-drawer-nav",
  drawerListButton: "header-drawer-list-button",
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(language);

  const navItems = [
    { key: "header.home", label: t("header.home"), url: '#' },
    { key: "header.about", label: t("header.about"), url: '#about' },
    { key: "header.subjects", label: t("header.subjects"), url: '#subjects' },
    { key: "header.timeline", label: t("header.timeline"), url: '#timeline' },
    { key: "header.faqs", label: t("header.faqs"), url: '#faqs' },
    { key: "header.projects", label: t("header.projects"), url: '#projects' },
    { key: "header.contact", label: t("header.contact"), url: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang: Languages) => {
    setLanguage(lang);
  };

  const drawer = (
    <Box sx={headerStyles.drawerBox} data-testid={headerTestIds.drawer}>
      <Typography variant="h6" sx={headerStyles.drawerTitle} data-testid={headerTestIds.drawerTitle}>
        Logo ITGalkowski
      </Typography>
      <Divider />
      <List data-testid={headerTestIds.drawerNav}>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              component="a"
              href={item.url}
              sx={headerStyles.drawerListButton}
              onClick={handleDrawerToggle}
              data-testid={headerTestIds.drawerListButton}
            >
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
        sx={headerStyles.appBar}
        data-testid={headerTestIds.root}
        aria-label="Site header navigation"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open navigation drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={headerStyles.menuButton}
            data-testid={headerTestIds.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={headerStyles.title}
          >
            <Box
              component="img"
              src="/img/logo.png"
              alt="ITGalkowski logo"
              sx={headerStyles.logo}
              data-testid={headerTestIds.logo}
            />
          </Typography>
          <Box
            sx={headerStyles.nav}
            role="navigation"
            data-testid={headerTestIds.nav}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                component="a"
                href={item.url}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
            <LanguageButtons language={language} handleLanguageChange={handleLanguageChange} />
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
          sx={headerStyles.drawer}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
