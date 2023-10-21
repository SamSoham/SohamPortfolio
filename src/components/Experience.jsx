import { BookmarkAdd } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ minHeight: { xs: "90vh", md: "70vh" }, margin: "16px 0" }}
    >
      <Typography>Explore My</Typography>
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "600",
          marginBottom: "24px",
        }}
      >
        Experience
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
          sx={{
            maxWidth: "280px",
            border: "2px solid #555555",
            padding: "16px",
            borderRadius: "8px",
            gap: "16px",
          }}
        >
          <Stack direction="row" alignItems="center" gap="8px">
            <BookmarkAdd />
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Frontend Development
            </Typography>
          </Stack>
          <Typography
            sx={{ color: "#555555", fontSize: { xs: "16px", md: "18px" } }}
          >
            Crafting dynamic websites and applications using cutting-edge
            technologies, with a primary focus on delivering top-notch user
            experiences.
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: "280px",
            border: "2px solid #555555",
            padding: "16px",
            borderRadius: "8px",
            gap: "16px",
          }}
        >
          <Stack direction="row" alignItems="center" gap="8px">
            <BookmarkAdd />
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Backend Development
            </Typography>
          </Stack>
          <Typography
            sx={{ color: "#555555", fontSize: { xs: "16px", md: "18px" } }}
          >
            Intermediate-level Backend Developer proficient in Node.js,
            Express.js, and Git. Committed to building robust, scalable
            server-side solutions while continuously learning and growing in the
            field of web development.
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: "280px",
            border: "2px solid #555555",
            padding: "16px",
            borderRadius: "8px",
            gap: "16px",
          }}
        >
          <Stack direction="row" alignItems="center" gap="8px">
            <BookmarkAdd />
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              UI & UX
            </Typography>
          </Stack>
          <Typography
            sx={{ color: "#555555", fontSize: { xs: "16px", md: "18px" } }}
          >
            I'm a UI/UX designer with a strong proficiency in Figma, where I
            bring ideas to life through prototyping. My passion lies in creating
            seamless and delightful user experiences that make a lasting impact.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
