import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Inputs1 } from '../../sections/components/inputs/inputs-1';
import { Inputs2 } from '../../sections/components/inputs/inputs-2';
import { Inputs3 } from '../../sections/components/inputs/inputs-3';
import { Inputs4 } from '../../sections/components/inputs/inputs-4';
import { Inputs5 } from '../../sections/components/inputs/inputs-5';

const components = [
  {
    element: <Inputs1 />,
    title: 'Inputs 1'
  },
  {
    element: <Inputs2 />,
    title: 'Inputs 2'
  },
  {
    element: <Inputs3 />,
    title: 'Inputs 3'
  },
  {
    element: <Inputs4 />,
    title: 'Inputs 4'
  },
  {
    element: <Inputs5 />,
    title: 'Inputs 5'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Inputs | Devias Kit PRO
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
    <ComponentsLayout title="Inputs">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
