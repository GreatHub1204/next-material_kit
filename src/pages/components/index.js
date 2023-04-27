import Head from 'next/head';
import NextLink from 'next/link';
import ArrowDownIcon from '@untitled-ui/icons-react/build/esm/ArrowDown';
import {
  Box,
  Card,
  Container,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { paths } from '../../paths';

const getSections = (paletteMode) => ([
  {
    title: 'Data Display',
    items: [
      {
        title: 'Detail Lists',
        subtitle: '8 components',
        image: `/assets/components/detail-list-${paletteMode}.png`,
        path: paths.components.dataDisplay.detailLists
      },
      {
        title: 'Tables',
        subtitle: '11 components',
        image: `/assets/components/tables-${paletteMode}.png`,
        path: paths.components.dataDisplay.tables
      },
      {
        title: 'Quick Stats',
        subtitle: '8 components',
        image: `/assets/components/quick-stats-${paletteMode}.png`,
        path: paths.components.dataDisplay.quickStats
      }
    ]
  },
  {
    title: 'Lists',
    items: [
      {
        title: 'Grouped Lists',
        subtitle: '11 components',
        image: `/assets/components/grouped-lists-${paletteMode}.png`,
        path: paths.components.lists.groupedLists
      },
      {
        title: 'Grid Lists',
        subtitle: '6 components',
        image: `/assets/components/grid-lists-${paletteMode}.png`,
        path: paths.components.lists.gridLists
      }
    ]
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Forms',
        subtitle: '17 components',
        image: `/assets/components/forms-${paletteMode}.png`,
        path: paths.components.forms
      }
    ]
  },
  {
    title: 'Overlays',
    items: [
      {
        title: 'Modals',
        subtitle: '12 components',
        image: `/assets/components/modals-${paletteMode}.png`,
        path: paths.components.modals
      }
    ]
  },
  {
    title: 'Charts',
    items: [
      {
        title: 'Charts',
        subtitle: '12 components',
        image: `/assets/components/charts-${paletteMode}.png`,
        path: paths.components.charts
      }
    ]
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Buttons',
        subtitle: '',
        image: `/assets/components/buttons-${paletteMode}.png`,
        path: paths.components.buttons
      },
      {
        title: 'Typography',
        subtitle: '',
        image: `/assets/components/typography-${paletteMode}.png`,
        path: paths.components.typography
      },
      {
        title: 'Colors',
        subtitle: '',
        image: `/assets/components/colors-${paletteMode}.png`,
        path: paths.components.colors
      },
      {
        title: 'Inputs',
        subtitle: '',
        image: `/assets/components/inputs-${paletteMode}.png`,
        path: paths.components.inputs
      }
    ]
  }
]);

const Page = () => {
  const theme = useTheme();
  const sections = getSections(theme.palette.mode);

  usePageView();

  return (
    <Box>
      <Head>
        <title>
          Components | Devias Kit PRO
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.800'
            : 'neutral.50',
          py: '120px'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1}>
            <Typography variant="h1">
              Browse components
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
            >
              Browse through over 100 individual components and over 35 screens
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack
            divider={<Divider />}
            spacing={4}
          >
            {sections.map((section) => (
              <Grid
                key={section.title}
                container
                spacing={4}
              >
                <Grid
                  xs={12}
                  lg={3}
                >
                  <Typography
                    sx={{ fontWeight: 600 }}
                    variant="h5"
                  >
                    {section.title}
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  lg={9}
                >
                  <Grid
                    container
                    spacing={4}
                  >
                    {section.items.map((item) => (
                      <Grid
                        key={item.title}
                        xs={12}
                        sm={6}
                        md={4}
                      >
                        <Card
                          component={NextLink}
                          href={item.path}
                          sx={{
                            display: 'block',
                            textDecoration: 'none',
                            gridColumn: {
                              xs: 'span 3',
                              sm: 'span 1'
                            }
                          }}
                          variant="outlined"
                          {...item.newTab && {
                            component: 'a',
                            target: '_blank'
                          }}>
                          <Box sx={{ p: 2 }}>
                            <Box
                              sx={{
                                position: 'relative',
                                pt: 'calc(300 / 500 * 100%)',
                                '& img': {
                                  height: 'auto',
                                  position: 'absolute',
                                  top: 0,
                                  width: '100%'
                                }
                              }}
                            >
                              <img src={item.image} />
                            </Box>
                            <Box
                              sx={{
                                alignItems: 'flex-end',
                                display: 'flex',
                                mt: 2
                              }}
                            >
                              <Typography variant="subtitle2">
                                {item.title}
                              </Typography>
                              {item.newTab && (
                                <SvgIcon
                                  color="action"
                                  sx={{ ml: 1.5 }}
                                >
                                  <ArrowDownIcon />
                                </SvgIcon>
                              )}
                            </Box>
                            <Typography
                              color="text.secondary"
                              variant="body2"
                            >
                              {item.subtitle}
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    {page}
  </MarketingLayout>
);

export default Page;
