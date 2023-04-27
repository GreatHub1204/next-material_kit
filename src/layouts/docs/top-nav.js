import NextLink from 'next/link';
import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { Box, Chip, IconButton, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Logo } from '../../components/logo';
import { paths } from '../../paths';

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onMobileNavOpen, ...other } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'text.secondary',
        left: 0,
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar
      }}
      {...other}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Stack
            alignItems="center"
            component={NextLink}
            direction="row"
            display="inline-flex"
            href={paths.index}
            spacing={1}
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                borderColor: 'divider',
                borderRadius: 1,
                borderStyle: 'solid',
                borderWidth: 1,
                display: 'flex',
                height: 40,
                p: '4px',
                width: 40
              }}
            >
              <Logo />
            </Box>
            <Box
              sx={{
                color: 'text.primary',
                fontFamily: '\'Plus Jakarta Sans\', sans-serif',
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: '0.3px',
                lineHeight: 2.5,
                '& span': {
                  color: 'primary.main'
                }
              }}
            >
              Devias Kit <span>PRO</span>
            </Box>
          </Stack>
          <Chip
            label="v6.0.0"
            size="small"
          />
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!lgUp && (
            <IconButton
              color="inherit"
              onClick={onMobileNavOpen}
            >
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
};
