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
              Day 1
            </Text>
          }
          c="pink.5"
          color="gray.4"
          mih="250px"
        >
          <div className="flex flex-col">
            <Divider label="AM" />
            <Text>Overview of the week</Text>
            <Text>Team intro & problem statements</Text>
            <Divider label="PM" />
            <Text>Intro session to Plotly dash</Text>
            <Text>Building</Text>
          </div>
        </Alert>
      </Grid.Col>
      <Grid.Col span={3}>
        <Alert
          title={
            <Text size="lg" fw={650}>
              Day 2
            </Text>
          }
          c="pink.5"
          color="gray.4"
        >
          <Divider label="AM" />
          <Text>Kick off</Text>
          <Text>What makes a good product</Text>
          <Divider label="PM" />
          <Text> Continue building </Text>
          <Text>Presentating your tools</Text>
        </Alert>
      </Grid.Col>

      <Grid.Col span={3}>
        <Alert
          title={
            <Text fw={650} size="lg">
              Day 3 - Data Science in the Government
            </Text>
          }
          c="pink.5"
          color="gray.4"
        >
          <Divider label="AM"></Divider>
          <List>
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
                  Evidence House, Hackathons, Data Science Accelerator
                </Text>
              </div>
            </List.Item>
          </List>
          <Divider label="PM"></Divider>
          <List>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>The Future of Data Science in Policy Making</Text>
                <Text size="xs">What does the future hold? Blue sky</Text>
              </div>
            </List.Item>
          </List>
        </Alert>
      </Grid.Col>
      <Grid.Col span={3}>
        <Alert
          title={
            <Text size="lg" fw={650}>
              Day 4 - Data Science in Barbados
            </Text>
          }
          c="pink.5"
          color="gray.4"
          mih="250px"
        >
          <Divider label="AM"></Divider>
          <List>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>
                  Building Resilience in Government Using Data Science
                </Text>
                <Text size="xs">Forecasting</Text>
              </div>
            </List.Item>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Leveraging Data Science for Crisis Management</Text>
                <Text size="xs">SitCen</Text>
              </div>
            </List.Item>
          </List>
          <Divider label="PM"></Divider>
          <List>
            <List.Item>
              <div className="flex flex-col gap-1">
                <Text>Innovations in Policy Analysis</Text>
                <Text size="xs">
                  AI: Consult, Redbox; Data: RAPs, Dashboards, Data Linkage
                </Text>
              </div>
            </List.Item>
          </List>
        </Alert>
      </Grid.Col>
    </Grid>
  );
};
