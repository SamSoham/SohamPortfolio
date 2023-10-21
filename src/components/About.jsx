import { EmojiEvents } from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <Stack
      alignItems="center"
      gap="16px"
      sx={{ minHeight: "80vh", margin: "16px 0" }}
    >
      <Typography>Get To Know More</Typography>
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "600",
          marginBottom: "24px",
        }}
      >
        About Me
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="column"
          sx={{
            borderRadius: "16px",
            border: "2px solid #555555",
            width: "250px",
            alignItems: "center",
            padding: "16px 24px",
            gap: "8px",
          }}
        >
          <Avatar src="./experience.png" />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Experience
          </Typography>
          <Typography
            sx={{
              color: "#555555",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            2+ Years
          </Typography>
          <Typography
            sx={{
              color: "#555555",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            Frontend Development
          </Typography>
        </Stack>
        <Stack
          direction="column"
          sx={{
            borderRadius: "16px",
            border: "2px solid #555555",
            width: "250px",
            alignItems: "center",
            padding: "16px 24px",
            gap: "8px",
          }}
        >
          <Avatar src="./education.png" />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Education
          </Typography>
          <Typography
            sx={{
              color: "#555555",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            CSE Undergrad
          </Typography>
        </Stack>
      </Stack>
      <Typography
        sx={{
          maxWidth: { xs: "80vw", md: "60vw" },
          fontSize: { xs: "16px", md: "20px" },
        }}
      >
        I'm a passionate Frontend Developer in Web Development, specializing in
        the <span> MERN stack</span>, and well-versed in{" "}
        <span>UI/UX design </span> principles. With a deep understanding of{" "}
        <span> MUI, Antd, and Mantine UI libraries</span>, I bring your digital
        visions to life with stunning and user-centric interfaces. My journey is
        all about harmonizing aesthetics with functionality, and I thrive on
        creating exceptional web experiences. Explore my portfolio to witness
        the fusion of technology and design, where every pixel tells a story of
        seamless interactivity and visual delight
      </Typography>
    </Stack>
  );
}
