import React, { useState, useEffect, useRef } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import {
  CloudUpload as UploadIcon,
  InsertChartOutlined as ChartIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  AccountCircle,
  Close as CloseIcon,
  Nature as NatureIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const prakritiTheme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Green
    },
    secondary: {
      main: "#81c784", // Light Green
    },
    background: {
      default: "#e8f5e9", // Very Light Green
      paper: "#ffffff",
    },
    text: {
      primary: "#1b5e20", // Dark Green
      secondary: "#33691e", // Darker Green
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.1)",
          overflow: "hidden",
        },
      },
    },
  },
});

const ConstructionSightHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(2);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const isSmallScreen = useMediaQuery(prakritiTheme.breakpoints.down("sm"));

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
    setDialogContent("You have no new notifications.");
    setOpenDialog(true);
  };

  const handleOpenDashboard = () => {
    setDialogContent(
      "Welcome to the Progress Dashboard. Here you can view real-time construction progress and analytics."
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const MotionCard = motion(Card);

  return (
    <ThemeProvider theme={prakritiTheme}>
      <CssBaseline />
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <AppBar position="static" color="primary" elevation={0}>
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            >
              <NatureIcon sx={{ mr: 1 }} />
              Prakriti123
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Typography
            variant="h4"
            gutterBottom
            color="textPrimary"
            align="center"
          >
            Sustainable Construction Monitoring
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <MotionCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <UploadIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    Upload Drone Imagery
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: 150,
                      border: "2px dashed",
                      borderColor: "primary.main",
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      mb: 2,
                      overflow: "hidden",
                    }}
                    onClick={() =>
                      document.getElementById("image-upload").click()
                    }
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Typography color="textSecondary">
                        Click to upload image
                      </Typography>
                    )}
                  </Box>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    startIcon={<UploadIcon />}
                  >
                    Upload Image
                    <input type="file" hidden onChange={handleImageUpload} />
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <ChartIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    Progress Analytics
                  </Typography>
                  <Typography variant="body2" paragraph color="textSecondary">
                    View real-time construction progress and sustainability
                    metrics.
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleOpenDashboard}
                    startIcon={<ChartIcon />}
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <NotificationsIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    Project Alerts
                  </Typography>
                  <Typography variant="body2" paragraph color="textSecondary">
                    Stay updated with eco-friendly construction practices and
                    project milestones.
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleNotificationClick}
                    startIcon={<NotificationsIcon />}
                  >
                    View Alerts
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              ConstructionSight: Monitoring sustainable construction with
              cutting-edge technology
            </Typography>
          </Box>
        </Container>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullScreen={isSmallScreen}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, bgcolor: "primary.main", color: "white" }}
        >
          Information
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>{dialogContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ConstructionSightHome;
