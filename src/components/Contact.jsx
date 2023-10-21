import { Avatar, Link, Stack, Typography } from "@mui/material";

7;

export default function Contact() {
  return (
    <Stack alignItems="center" sx={{ margin: "16px 0" }}>
      <Typography>Get in Touch</Typography>
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "600",
          marginBottom: "24px",
        }}
      >
        Contact Me
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          padding: { xs: "8px", md: "16px" },
          border: "1px solid black",
          width: "fit-content",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Avatar sx={{ width: 32, height: 32 }} src="./email.png" />
          <Link
            href="mailto:samsoham02@gmail.com"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            <Typography>samsoham02@gmail.com</Typography>
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Avatar sx={{ width: 32, height: 32 }} src="./linkedin.png" />
          <Link
            href="https://www.linkedin.com/in/soham-samantaray-69534523a/"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            <Typography>LinkedIn</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
