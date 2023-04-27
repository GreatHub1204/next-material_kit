import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Typography1 } from '../../sections/components/typography/typography-1';

export const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Typography | Devias Kit PRO
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Previewer title="Typography">
            <Typography1 />
          </Previewer>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    <ComponentsLayout title="Typography">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
