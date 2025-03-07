import { Grid2, Typography, useTheme } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{
        color: "white",
        fontSize: 20,
      }}
    />
  );
};

const Title = ({ title, url }) => {
  const theme = useTheme();

  return (
    <Typography variant="body2" noWrap>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        style={{ textDecoration: "none", color: theme.palette.common.white }}
      >
        {title}
      </a>
    </Typography>
  );
};

const FooterContactInfo = ({ iconName, title, url }) => {
  return (
    <Grid2 container
      sx={{
        padding: 1,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 1,
      }}>
      <Icon iconName={iconName} />
      <Grid2 sx={{ overflow: "hidden" }}>
        <Title title={title} url={url} />
      </Grid2>
    </Grid2>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

FooterContactInfo.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FooterContactInfo;
