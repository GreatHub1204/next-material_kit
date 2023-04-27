import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { Drawer, Stack } from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { SideNavSection } from './side-nav-section';

const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 280;

export const DesktopSideNav = (props) => {
  const { sections = [] } = props;
  const pathname = usePathname();

  return (
    <Drawer
      anchor="left"
      open
      PaperProps={{
        sx: {
          height: `calc(100% - ${TOP_NAV_HEIGHT}px)`,
          top: `${TOP_NAV_HEIGHT}px`,
          width: `${SIDE_NAV_WIDTH}px`,
          zIndex: 100
        }
      }}
      variant="permanent"
    >
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          }
        }}
      >
        <Stack
          component="nav"
          spacing={3}
          sx={{ p: 2 }}
        >
          {sections.map((section, index) => (
            <SideNavSection
              items={section.items}
              key={index}
              pathname={pathname}
              subheader={section.subheader}
            />
          ))}
        </Stack>
      </Scrollbar>
    </Drawer>
  );
};

DesktopSideNav.propTypes = {
  sections: PropTypes.array
};
