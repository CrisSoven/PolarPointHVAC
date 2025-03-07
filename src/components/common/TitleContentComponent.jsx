import { Container, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const TitleContentComponent = ({ main, title, subtitle, children }) => {
  return (
    <Container sx={{py: 2}}>
        <Typography
          variant={"h4"}
          fontWeight={500}
          align={main ? "left" : "center"}
          mb={1}
        >
          {title}
        </Typography>
        <Typography align={main ? "left" : "center"}>
          {subtitle}
        </Typography>
        <Box py={4}>{children}</Box>
    </Container>
  );
};

TitleContentComponent.propTypes = {
  main: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TitleContentComponent;
