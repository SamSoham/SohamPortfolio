import { Avatar, Stack, Typography } from "@mui/material";

export default function Project() {
  return (
    <Stack
      alignItems="center"
      sx={{ minHeight: { xs: "90vh", md: "70vh" }, margin: "16px 0" }}
    >
      <Typography>Browse My Recent</Typography>
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "600",
          marginBottom: "24px",
        }}
      >
        Projects
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            maxWidth: "350px",
            padding: "8px",
            border: "2px solid black",
            borderRadius: "8px",
            gap: "8px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Illumina
          </Typography>
          <img src="./illumina.png" />
          <Typography
            sx={{ color: "#555555", fontSize: { xs: "16px", md: "18px" } }}
          >
            Sports fest Website with event schedules and live scoring features.
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: "350px",
            padding: "8px",
            border: "2px solid black",
            borderRadius: "8px",
            gap: "8px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Samavesh X Vassaunt
          </Typography>
          <img src="./samavesh.png" />
          <Typography
            sx={{ color: "#555555", fontSize: { xs: "16px", md: "18px" } }}
          >
            Technical & Cultural fest website that incorporated event schedules,
            participant registration directly through the site, and an automated
            ticket generation system.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
