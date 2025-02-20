"use client";
import React from "react";
import {
  Space,
  Divider,
  Text,
  SimpleGrid,
  Title,
  Alert,
  List,
  Anchor,
} from "@mantine/core";

const HomePage = () => {
  return (
    <div className="flex flex-col m-4 w-full gap-4">
      <div className="flex flex-col gap-2">
        <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              Agenda
            </Title>
          }
          w="100%"
          className="pt-4"
          c="pink.5"
          color="pink.5"
        ></Divider>
        <SimpleGrid cols={4}>
          <Alert title="Day 1" c="pink.5" color="gray" mih="250px"></Alert>
          <Alert title="Day 2" c="pink.5" color="gray">
            <Text></Text>
          </Alert>
          <Alert title="Day 3" c="pink.5" color="gray">
            <Text></Text>
          </Alert>
          <Alert title="Day 4" c="pink.5" color="gray">
            <Text></Text>
          </Alert>
        </SimpleGrid>
      </div>
      <Space h="10px" />
      <div className="flex flex-col gap-2">
        <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              Resources
            </Title>
          }
          w="100%"
          c="pink.5"
          color="pink.5"
        ></Divider>
        <Alert c="pink.5" color="gray">
          <Title c="pink.5" order={4}>
            Dashboard resources
          </Title>
          <List>
            <List.Item c="pink.5">
              <div className="flex flex-row gap-1">
                <Text>Python Plotly starter repo: </Text>
                <Anchor href="https://github.com/Alexander-D-Lewis/barbados-hackathon">
                  Github
                </Anchor>
              </div>
            </List.Item>
            <List.Item c="pink.5">
              <div className="flex flex-row gap-1">
                <Text>Plotly dash website</Text>
                <Anchor href="https://dash.plotly.com/">
                  dash.plotly.com/
                </Anchor>
              </div>
            </List.Item>
            <List.Item c="pink.5">
              <div className="flex flex-row gap-1">
                <Text>Dash Mantine:</Text>
                <Anchor href="https://www.dash-mantine-components.com/">
                  www.dash-mantine-components.com/
                </Anchor>
              </div>
            </List.Item>
          </List>
        </Alert>
      </div>
    </div>
  );
};

export default HomePage;
