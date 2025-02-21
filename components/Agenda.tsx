import React, { ReactElement } from "react";
import { Grid, Divider, Text, Title, Alert, List } from "@mantine/core";

export const Agenda = (): ReactElement => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={6}>
        <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              Hackathon
            </Title>
          }
          w="100%"
          className="pt-4"
          c="pink.5"
          color="pink.5"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              Workshops
            </Title>
          }
          w="100%"
          className="pt-4"
          c="pink.5"
          color="pink.5"
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <Alert
          title={
            <Text size="lg" fw={650}>
              Day 1 - Start of the hack
            </Text>
          }
          c="pink.5"
          color="gray.4"
          mih="250px"
        >
          <div className="flex flex-col">
            <Divider label="AM" />
            <List  className='list-disc'>
            <List.Item><Text>Overview of the week</Text></List.Item>
            <List.Item><Text>Team intro & problem statements</Text></List.Item>
            <List.Item><Text>Hack begins!</Text></List.Item>
            <List.Item><Text fs='italic'>Python for beginners</Text></List.Item>
            </List>
            <Divider label="PM" />
            <List  className='list-disc'>
            <List.Item><Text fs='italic'>Intro session to Plotly dash</Text></List.Item>
            <List.Item><Text>More building!</Text></List.Item>
            </List>
          </div>
        </Alert>
      </Grid.Col>
      <Grid.Col span={3}>
        <Alert
          title={
            <Text size="lg" fw={650}>
              Day 2 - Presenting your products
            </Text>
          }
          c="pink.5"
          color="gray.4"
        >
          <Divider label="AM" />
          <List  className='list-disc'>
          <List.Item><Text>Kick off</Text></List.Item>
          <List.Item><Text fs='italic'>What makes a good product</Text></List.Item>
          </List>
          <Divider label="PM" />
          <List  className='list-disc'>
          <List.Item><Text>Continue building </Text></List.Item>
          <List.Item><Text>Presentating your dashboards</Text></List.Item>
          </List>
        </Alert>
      </Grid.Col>

      <Grid.Col span={3}>
        <Alert
          title={
            <Text fw={650} size="lg">
              Day 3 - Data science foundations
            </Text>
          }
          c="pink.5"
          color="gray.4"
        >
          <Divider label="AM"></Divider>
          <List  className='list-disc'>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Data Science in the UK Government</Text>
                <Text size="xs">10DS, I.AI and Departments</Text>
              </div>
            </List.Item>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Building Data Science Capability</Text>
                <Text size="xs">
                  Evidence House, Hackathons, DS Accelerator
                </Text>
              </div>
            </List.Item>
          </List>
          <Divider label="PM"></Divider>
          <List  className='list-disc'>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>The Future of Data Science in Policy Making</Text>
                <Text size="xs">What does the future hold?</Text>
              </div>
            </List.Item>
          </List>
        </Alert>
      </Grid.Col>
      <Grid.Col span={3}>
        <Alert
          title={
            <Text size="lg" fw={650}>
              Day 4 - The future of data science
            </Text>
          }
          c="pink.5"
          color="gray.4"
          mih="250px"
        >
          <Divider label="AM"></Divider>
          <List className='list-disc'>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>
                  Building Resilience in Government Using Data Science
                </Text>
                <Text size="xs">Forecasting, risk tracking</Text>
              </div>
            </List.Item>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Leveraging Data Science for Crisis Management</Text>
                <Text size="xs">Situtation Centre, Evidence House</Text>
              </div>
            </List.Item>
          </List>
          <Divider label="PM"></Divider>
          <List className='list-disc'>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Innovations in Policy Analysis</Text>
                <Text size="xs">
                  Data Science: RAPs, Dashboards, Linkage
                </Text>
                <Text size='xs'>
                AI: Consult, Redbox
                </Text>
              </div>
            </List.Item>
          </List>
        </Alert>
      </Grid.Col>
    </Grid>
  );
};
