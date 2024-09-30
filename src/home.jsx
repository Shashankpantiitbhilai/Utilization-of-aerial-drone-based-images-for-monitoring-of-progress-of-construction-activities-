import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Upload as UploadIcon,
  BarChart as BarChartIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  AccountCircle,
} from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
  },
});

const ConstructionSightHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(2);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = () => {
    setNotifications(0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ConstructionSight
            </Typography>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              onClick={handleNotificationClick}
            >
              <NotificationsIcon />
              {notifications > 0 && (
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "error.main",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                  }}
                >
                  {notifications}
                </Typography>
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Monitor Construction Progress with Aerial Imagery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <UploadIcon /> Image Upload
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    border: "2px dashed grey",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    mb: 2,
                  }}
                  onClick={() =>
                    document.getElementById("image-upload").click()
                  }
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  ) : (
                    <Typography>Click to upload image</Typography>
                  )}
                </Box>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <Button variant="contained" component="label" fullWidth>
                  Upload Drone Image
                  <input type="file" hidden onChange={handleImageUpload} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <BarChartIcon /> Progress Dashboard
                </Typography>
                <Typography variant="body2" paragraph>
                  View real-time construction progress and analytics.
                </Typography>
                <Button variant="contained" fullWidth>
                  Open Dashboard
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <NotificationsIcon /> Notifications
                </Typography>
                <Typography variant="body2" paragraph>
                  Check alerts and updates for your projects.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleNotificationClick}
                >
                  View Notifications
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ConstructionSightHome;
