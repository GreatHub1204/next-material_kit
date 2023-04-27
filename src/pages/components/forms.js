import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Form1 } from '../../sections/components/forms/form-1';
import { Form2 } from '../../sections/components/forms/form-2';
import { Form3 } from '../../sections/components/forms/form-3';
import { Form4 } from '../../sections/components/forms/form-4';
import { Form5 } from '../../sections/components/forms/form-5';
import { Form6 } from '../../sections/components/forms/form-6';
import { Form7 } from '../../sections/components/forms/form-7';
import { Form8 } from '../../sections/components/forms/form-8';
import { Form9 } from '../../sections/components/forms/form-9';
import { Form10 } from '../../sections/components/forms/form-10';
import { Form11 } from '../../sections/components/forms/form-11';
import { Form12 } from '../../sections/components/forms/form-12';
import { Form13 } from '../../sections/components/forms/form-13';
import { Form14 } from '../../sections/components/forms/form-14';
import { Form15 } from '../../sections/components/forms/form-15';
import { Form16 } from '../../sections/components/forms/form-16';

const components = [
  {
    element: <Form1 />,
    title: 'Form 1'
  },
  {
    element: <Form2 />,
    title: 'Form 2'
  },
  {
    element: <Form3 />,
    title: 'Form 3'
  },
  {
    element: <Form4 />,
    title: 'Form 4'
  },
  {
    element: <Form5 />,
    title: 'Form 5'
  },
  {
    element: <Form6 />,
    title: 'Form 6'
  },
  {
    element: <Form7 />,
    title: 'Form 7'
  },
  {
    element: <Form8 />,
    title: 'Form 8'
  },
  {
    element: <Form9 />,
    title: 'Form 9'
  },
  {
    element: <Form10 />,
    title: 'Form 10'
  },
  {
    element: <Form11 />,
    title: 'Form 11'
  },
  {
    element: <Form12 />,
    title: 'Form 12'
  },
  {
    element: <Form13 />,
    title: 'Form 13'
  },
  {
    element: <Form14 />,
    title: 'Form 14'
  },
  {
    element: <Form15 />,
    title: 'Form 15'
  },
  {
    element: <Form16 />,
    title: 'Form 16'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Forms | Devias Kit PRO
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
    <ComponentsLayout title="Forms">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
