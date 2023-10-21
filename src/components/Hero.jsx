import { Avatar, Button, Link, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{ minHeight: { xs: "100vh", md: "80vh" }, justifyContent: "center" }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "36px",
        }}
      >
        <Avatar
          style={{
            width: 275,
            height: 275,
          }}
          src="./me.jpeg"
        />
        <Stack gap="12px" alignItems="center">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#555555",
            }}
          >
            Hello I'm
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: "600",
            }}
          >
            Soham Samantaray
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: "500",
              color: "#555555",
            }}
          >
            Frontend Developer
          </Typography>
          <Stack direction="row" gap="16px">
            <Button
              variant="outlined"
              sx={{
                background: "#ffffff",
                color: "#000000",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#ffffff",
                },
                borderRadius: "16px",
                border: "1px solid #000000",
              }}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                background: "#323232",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#ffffff",
                },
                borderRadius: "16px",
              }}
            >
              Contact Info
            </Button>
          </Stack>
          <Stack direction="row" gap="16px">
            <Link href="https://github.com/SamSoham" target="_blank">
              <Avatar src="./github.png" sx={{ width: 32, height: 32 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/soham-samantaray-69534523a/"
              target="_blank"
            >
              <Avatar src="./linkedin.png" sx={{ width: 32, height: 32 }} />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
