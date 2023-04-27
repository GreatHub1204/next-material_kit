import Head from 'next/head';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { AnalyticsStats } from '../../sections/dashboard/analytics/analytics-stats';
import { AnalyticsMostVisited } from '../../sections/dashboard/analytics/analytics-most-visited';
import { AnalyticsSocialSources } from '../../sections/dashboard/analytics/analytics-social-sources';
import { AnalyticsTrafficSources } from '../../sections/dashboard/analytics/analytics-traffic-sources';
import { AnalyticsVisitsByCountry } from '../../sections/dashboard/analytics/analytics-visits-by-country';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Head>
        <title>
          Dashboard: Analytics | Devias Kit PRO
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack spacing={1}>
                  <Typography variant="h4">
                    Analytics
                  </Typography>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Button
                    startIcon={(
                      <SvgIcon>
                        <PlusIcon />
                      </SvgIcon>
                    )}
                    variant="contained"
                  >
                    New Dashboard
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    endIcon={(
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    See sources
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [0, 170, 242, 98, 63, 56, 85, 171, 209, 163, 204, 21, 264, 0]
                  }
                ]}
                title="Impressions"
                value="36,6K"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    endIcon={(
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    See traffic
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [0, 245, 290, 187, 172, 106, 15, 210, 202, 19, 18, 3, 212, 0]
                  }
                ]}
                title="Engagements"
                value="19K"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    endIcon={(
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    See campaigns
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [0, 277, 191, 93, 92, 85, 166, 240, 63, 4, 296, 144, 166, 0]
                  }
                ]}
                title="Spent"
                value="$41.2K"
              />
            </Grid>
            <Grid
              xs={12}
              lg={8}
            >
              <AnalyticsTrafficSources
                chartSeries={[
                  {
                    name: 'Organic',
                    data: [45, 40, 37, 41, 42, 45, 42]
                  },
                  {
                    name: 'Marketing',
                    data: [19, 26, 22, 19, 22, 24, 28]
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              lg={4}
            >
              <AnalyticsVisitsByCountry
                visits={[
                  {
                    id: 'us',
                    name: 'United States',
                    seoPercentage: 40,
                    value: 31200
                  },
                  {
                    id: 'uk',
                    name: 'United Kingdom',
                    seoPercentage: 47,
                    value: 12700
                  },
                  {
                    id: 'ru',
                    name: 'Russia',
                    seoPercentage: 65,
                    value: 10360
                  },
                  {
                    id: 'ca',
                    name: 'Canada',
                    seoPercentage: 23,
                    value: 5749
                  },
                  {
                    id: 'de',
                    name: 'Germany',
                    seoPercentage: 45,
                    value: 2932
                  },
                  {
                    id: 'es',
                    name: 'Spain',
                    seoPercentage: 56,
                    value: 200
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              lg={8}
            >
              <AnalyticsMostVisited
                pages={[
                  {
                    bounceRate: 16,
                    uniqueVisits: 8584,
                    url: '/',
                    visitors: 95847
                  },
                  {
                    bounceRate: 5,
                    uniqueVisits: 648,
                    url: '/auth/login',
                    visitors: 7500
                  },
                  {
                    bounceRate: 2,
                    uniqueVisits: 568,
                    url: '/dashboard',
                    visitors: 85406
                  },
                  {
                    bounceRate: 12,
                    uniqueVisits: 12322,
                    url: '/blog/top-5-react-frameworks',
                    visitors: 75050
                  },
                  {
                    bounceRate: 10,
                    uniqueVisits: 11645,
                    url: '/blog/understand-programming-principles',
                    visitors: 68003
                  },
                  {
                    bounceRate: 8,
                    uniqueVisits: 10259,
                    url: '/blog/design-patterns',
                    visitors: 49510
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              lg={4}
            >
              <AnalyticsSocialSources
                chartSeries={[10, 10, 20]}
                labels={['Linkedin', 'Facebook', 'Instagram']}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
