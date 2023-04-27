import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Colors1 } from '../../sections/components/colors/colors-1';
import { Colors2 } from '../../sections/components/colors/colors-2';

const components = [
  {
    element: <Colors1 />,
    title: 'Main colors'
  },
  {
    element: <Colors2 />,
    title: 'Severity colors'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Colors | Devias Kit PRO
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
          <Stack spacing={8}>
            {components.map((component) => (
              <Previewer
                key={component.title}
                title={component.title}
              >
                {component.element}
              </Previewer>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    <ComponentsLayout title="Colors">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
