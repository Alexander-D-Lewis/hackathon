import React, { ReactElement } from "react";
import { Divider, Title, Alert, List, Text, Anchor } from "@mantine/core";

const DashboardingResources = (): ReactElement => {
  return (
    <div>
      <Title c="pink.5" order={4}>
        Dashboarding resources
      </Title>
      <List>
        <List.Item>
          <div className="flex flex-row gap-1">
            <Text>Python Plotly starter repo: </Text>
            <Anchor href="https://github.com/Alexander-D-Lewis/barbados-hackathon">
              Github
            </Anchor>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row gap-1">
            <Text>Plotly dash website:</Text>
            <Anchor href="https://dash.plotly.com/">dash.plotly.com/</Anchor>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row gap-1">
            <Text>Dash Mantine:</Text>
            <Anchor href="https://www.dash-mantine-components.com/">
              www.dash-mantine-components.com/
            </Anchor>
          </div>
        </List.Item>
      </List>
    </div>
  );
};

const OtherLinks = (): ReactElement => {
  return (
    <div>
      <Title c="pink.5" order={4}>
        Other links
      </Title>
      <Text>
        {"Incubator for Artificial Intelligence: "}
        <Anchor href="https://ai.gov.uk/">I.AI</Anchor>
      </Text>
      <Text>
        {"Data linkage at scale: "}
        <Anchor href="https://moj-analytical-services.github.io/splink/index.html">
          Splink Github
        </Anchor>
      </Text>
    </div>
  );
};

export const OtherData = (): ReactElement => {
  return (    
  <div>
    <Title c="pink.5" order={4}>
      Extra data
    </Title>
    <Text>
      {"Geospatial data: "}
      <Anchor href="https://caribbeanprotectedareasgateway.com/geonode/datasets/BRB">
      caribbeanprotectedareasgateway.com
      </Anchor>
    </Text>
    <Text>
      {"General and geospatial data: "}
      <Anchor href="https://data.humdata.org/group/brb">
      data.humdata.org
      </Anchor>
    </Text>
  </div>
  );
  }

export const Resources = (): ReactElement => {
  return (
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
      <Alert c="pink.5" color="gray.4">
        <div className="flex flex-row gap-8">
          <DashboardingResources />
          <OtherData />
          <OtherLinks />
        </div>
      </Alert>
    </div>
  );
};
