import { Stack } from "@mui/material";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Project from "../components/Project";

export default function Home() {
  return (
    <Stack sx={{ gap: { xs: "16px", md: "8px" } }}>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Stack>
  );
}
