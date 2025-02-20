import React, { ReactElement } from "react";
import {
  Alert,
  Text,
  SimpleGrid,
  Divider,
  Title,
  Anchor,
  List,
} from "@mantine/core";

export const SustainableStatement = (): ReactElement => {
  return (
    <Alert
      c="Energy"
      color="Energy"
      title={
        <Text fw={650} size="lg">
          Statement 1 - Sustainable Barbados
        </Text>
      }
      mih="250px"
    >
      <Text c="Energy" fw={650}>
        Potential data sources
      </Text>
      <List>
        <List.Item>
          <Text>
            {"Carbon Emissions: "}
            <Anchor href="https://ourworldindata.org/co2/country/barbados/">
              Our World in Data
            </Anchor>
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {"Sustainable Development Goals: "}
            <Anchor href="https://sdgstracker.org/listing/barbados/">
              SDGs
            </Anchor>
          </Text>
        </List.Item>
      </List>
    </Alert>
  );
};

export const HealthStatement = (): ReactElement => {
  return (
    <Alert
      c="DHSC"
      color="DHSC"
      title={
        <Text fw={650} size="lg">
          Statement 2 - Public Health
        </Text>
      }
    >
      <Text c="DHSC" fw={650}>
        Potential data sources
      </Text>
      <List>
        <List.Item>
          <Text>
            {"Annual health data: "}
            <Anchor href="https://data.who.int/countries/052">WHO</Anchor>
          </Text>
        </List.Item>
      </List>
    </Alert>
  );
};

export const DigitalStatement = (): ReactElement => {
  return (
    <Alert
      c="red"
      color="red"
      title={
        <Text fw={650} size="lg">
          Statement 3 - Digital Government
        </Text>
      }
    >
      <Text>
        Using
        <Anchor href="https://ai.gov.uk/projects/consult/">
          {" I.AI's Consult"}
        </Anchor>
        , what insights can you draw from large datasets of text?
      </Text>
    </Alert>
  );
};

export const EducationStatement = (): ReactElement => {
  return (
    <Alert
      c="Education"
      color="Education"
      title={
        <Text fw={650} size="lg">
          Statement 4 - Opportunity
        </Text>
      }
    >
      <Text c="Education" fw={650}>
        Potential data sources
      </Text>
      <List>
        <List.Item>
          <Text>
            {"Socio-Economic Data: "}
            <Anchor href="https://data.worldbank.org/country/barbados">
              World Bank
            </Anchor>
          </Text>
        </List.Item>
      </List>
    </Alert>
  );
};

export const Statements = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <Divider
        orientation="horizontal"
        label={
          <Title order={2} c="pink.5">
            Problem statements
          </Title>
        }
        w="100%"
        c="pink.5"
        color="pink.5"
      ></Divider>
      <SimpleGrid cols={4}>
        <SustainableStatement />
        <HealthStatement />
        <DigitalStatement />
        <EducationStatement />
      </SimpleGrid>
    </div>
  );
};
