import { useCallback, useState } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import { Box, ButtonBase, Collapse, SvgIcon } from '@mui/material';

export const SideNavItem = (props) => {
  const { active, children, depth = 0, icon, label, open: openProp, path, title } = props;
  const [open, setOpen] = useState(!!openProp);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const offset = depth === 0 ? 0 : 8 * depth;

  // Branch

  if (children) {
    return (
      <li>
        <ButtonBase
          onClick={handleToggle}
          sx={{
            justifyContent: 'flex-start',
            pl: `${16 + offset}px`,
            pr: '16px',
            py: '8px',
            textAlign: 'left',
            width: '100%',
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          {icon && (
            <Box
              component="span"
              sx={{
                alignItems: 'center',
                color: 'action.active',
                display: 'inline-flex',
                justifyContent: 'center',
                mr: 2,
                ...(active && {
                  color: 'primary.main'
                })
              }}
            >
              {icon}
            </Box>
          )}
          <Box
            component="span"
            sx={{
              color: 'text.primary',
              flexGrow: 1,
              fontFamily: (theme) => theme.typography.fontFamily,
              fontSize: depth > 0 ? 13 : 14,
              fontWeight: 600,
              lineHeight: '24px',
              whiteSpace: 'nowrap',
              ...(active && {
                color: 'primary.main',
                fontWeight: 700
              })
            }}
          >
            {title}
          </Box>
          <SvgIcon
            fontSize="small"
            sx={{ color: 'action.active' }}
          >
            {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </SvgIcon>
        </ButtonBase>
        <Collapse
          in={open}
          sx={{ mt: 0.5 }}
        >
          {children}
        </Collapse>
      </li>
    );
  }

  // Leaf

  let linkProps = undefined;

  if (path) {
    const isExternal = path.startsWith('http');

    linkProps = isExternal
      ? {
        component: 'a',
        href: path,
        target: '_blank'
      }
      : {
        component: NextLink,
        href: path
      };
  }

  return (
    <li>
      <ButtonBase
        sx={{
          borderRadius: 1,
          justifyContent: 'flex-start',
          pl: `${16 + offset}px`,
          pr: '16px',
          py: '8px',
          textAlign: 'left',
          width: '100%',
          '&:hover': {
            backgroundColor: 'action.hover'
          }
        }}
        {...linkProps}>
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'action.active',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'primary.main'
              })
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          sx={{
            color: 'text.primary',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: depth > 0 ? 13 : 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'primary.main',
              fontWeight: 700
            })
          }}
        >
          {title}
        </Box>
        {label && (
          <Box
            component="span"
            sx={{ ml: 2 }}
          >
            {label}
          </Box>
        )}
      </ButtonBase>
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number,
  icon: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};
