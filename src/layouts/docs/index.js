import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sections } from './config';
import { MobileSideNav } from './mobile-side-nav';
import { DesktopSideNav } from './desktop-side-nav';
import { TopNav } from './top-nav';

const SIDE_NAV_WIDTH = 280;

const useMobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleOpen,
    handleClose
  };
};

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const Layout = (props) => {
  const { children } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mobileNav = useMobileNav();

  return (
    <>
      <TopNav onMobileNavOpen={mobileNav.handleOpen} />
      {lgUp
        ? <DesktopSideNav sections={sections} />
        : (
          <MobileSideNav
            onClose={mobileNav.handleClose}
            open={mobileNav.isOpen}
            sections={sections}
          />
        )}
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};
