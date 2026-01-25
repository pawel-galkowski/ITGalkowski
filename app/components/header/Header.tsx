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
    <Box sx={headerStyles.drawerBox} data-testid={headerTestIds.drawer} role="presentation">
      <Typography variant="h6" sx={headerStyles.drawerTitle} data-testid={headerTestIds.drawerTitle}>
        Logo ITGalkowski
      </Typography>
      <Divider />
      <nav aria-label="Mobile navigation menu">
        <List data-testid={headerTestIds.drawerNav}>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                component="a"
                href={item.url}
                sx={headerStyles.drawerListButton}
                onClick={handleDrawerToggle}
                data-testid={headerTestIds.drawerListButton}
                aria-label={`Navigate to ${item.label}`}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Box sx={{ mt: 'auto', mb: 2, display: 'flex', justifyContent: 'center' }}>
        <LanguageButtons language={language} handleLanguageChange={handleLanguageChange} />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        sx={headerStyles.appBar}
        data-testid={headerTestIds.root}
      >
        <Toolbar sx={headerStyles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
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
              alt="ITGalkowski - Professional IT Solutions"
              sx={headerStyles.logo}
              data-testid={headerTestIds.logo}
              loading="eager"
            />
          </Typography>
          
          {/* Mobile Language Switcher - Always Visible */}
          <Box sx={headerStyles.mobileLanguageBox}>
            <LanguageButtons language={language} handleLanguageChange={handleLanguageChange} />
          </Box>
          
          {/* Desktop Navigation */}
          <Box
            component="nav"
            sx={headerStyles.nav}
            aria-label="Desktop navigation"
            data-testid={headerTestIds.nav}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                component="a"
                href={item.url}
                sx={{ color: "#fff" }}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Button>
            ))}
            <LanguageButtons language={language} handleLanguageChange={handleLanguageChange} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        id="mobile-navigation-drawer"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={headerStyles.drawer}
        aria-label="Mobile navigation drawer"
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
