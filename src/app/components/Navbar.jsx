'use client'
import React, { useState } from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const ResponsiveSidebar = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="logo">
            jaguar
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
        
        open
      >
        <Box sx={{ width: 240, mt: 8 }}>
          <List>
            {["Home", "movies", "Services", "Contact"].map((text) => (
              <ListItem button key={text}>
                {/* <ListItemText primary={text} /> */}
                <Link href={`/${text.toLowerCase()}`} >{text}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Drawer for smaller screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {["Home", "About", "Services", "Contact"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - 240px)` },
          ml: { md: "240px" },
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveSidebar;
