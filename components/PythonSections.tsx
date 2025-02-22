import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Divider, Title, Code, Text, Tree, Group, Grid, Alert, List } from '@mantine/core';

const PythonExamples= () => {

    return (
        <div className='w-full'>
             <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              Intro to dashboarding in Python
            </Title>
          }
          w="100%"
          className="pt-4"
          c="pink.5"
          color="pink.5"
        />
        <div className='flex flex-col gap-4'>
        <AppStructure/>
        <ExampleLayout/>
        </div>

        </div>
    );
};

export default PythonExamples;


const AppStructure = () => {
    const [selectedLeaf, setSelectedLeaf] = React.useState<string|null>(null);

    const data =[
     
        {value: "components", label: "components", children: [
        {value: 'template.py', label: 'template.py'},    
        ],
        },
        {value:'layouts', label:'layouts', children: [
            {value: 'functions', label:'functions', children:[
            {value:'prep_data.py', label:'prep_data.py'},
        ],
        
            },
            {value: 'tabs', label: 'tabs', children: [
                {value:'tab1.py', label:'tab1.py'},
                {value:'tab2.py', label:'tab2.py'},
                {value:'tab3.py', label:'tab3.py'},
            ]
            },
            {value: 'dashboard.py', label: 'dashboard.py'},

        ],
    },
    {value: 'app.py', label: 'app.py'},
    {value: "main.py", label: "main.py"},
    ]

    type InfoLookupType = {
        [key: string]: string;
    };

    const infoLookup: InfoLookupType = {
        "components": "This folder should contain scripts with components we want to reuse across the dashboard such as buttons.",
        "layouts":"This folder should contain scripts with the layout for each tab of the dashboard and the functions that help build them.",
        "functions":"This folder should contain scripts with functions that help handle the data used in the dashboard.",
        "tabs":"This folder should contain scripts with the layout for each tab of the dashboard. It is easier to maintain if we break the code out into separate files.",
        "tab1.py": "The layout code for tab 1",
        "tab2.py": "The layout code for tab 2",
        "tab3.py": "The layout code for tab 3",
        "template.py": "This file is where we set the template for the plotly graphing package. This keeps graphs consistent across the dashboard without duplicating code.",
        "prep_data.py": "This file is where we ingest and process data for the dashboard. Ideally we do as little of this in the dashboard as possible to keep the code clean and easy to read.",
        "dashboard.py": "The dashboard file is where we import layouts for each of the tabs and add them to the dashboard. This way we can break the code out across multiple scripts which is much easier to maintain and debug.",
        "app.py": "We define the dash app here and import it into the other scripts as required. We also add our CSS and other styling here.",
        "main.py": "This is the main file of the dashboard and what we run when we want to run the whole dashboard. It imports the app and runs it.",
    };




    return (
        <div>
            <Text fw={650} size='xl' c='pink'>Structure of a Plotly dashboard</Text>
            <Grid>
                <Grid.Col span={6}>
                    <Alert color='gray' variant='outline' title={<Text fw={650}>Main file structure - click on a file to see more information</Text>}>
                        <Tree
                            data={data}
                            renderNode={({ node, expanded, hasChildren, elementProps }) => (
                                <Group gap={5} {...elementProps}
                                onMouseEnter={() => {setSelectedLeaf(node.value)
                                    
                                }}
                                >
                                    {hasChildren && (
                                        <IconChevronDown
                                            size={18}
                                            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    )}
                                    <span>{node.label}</span>
                                </Group>
                            )}
                            selectOnClick
                            clearSelectionOnOutsideClick
                            
                        />
                    </Alert>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Alert color='gray' h='100%' title={ <Text fw={650} c='pink' size='lg'>File: {selectedLeaf}</Text>}>
                       {selectedLeaf ? <div className='flex flex-col'>
                       <Text>{infoLookup[selectedLeaf]}</Text>
                       </div>:
                       <Text>Click on a file on the left to see more information</Text>}
                    </Alert>
                </Grid.Col>
            </Grid>
        </div>
    );

}


const ExampleLayout = () => {
    return (
        <div className='flex flex-col gap-4'>
        <div>
            <Text fw={650} size='xl' c='pink'>Example layout for a tab</Text>
            <Text>Organise imports at the top of the file</Text>
            <Code block>
                {`# third-party
import dash_html_components as dmc
from dash import html, dcc, Input, Output, State

# project
from app import app
from layouts.functions.prep_data import import_data
from layouts.functions.graphs import gapminder_graph
`}
            </Code>
            </div>
                    <div>
                    <Text>Import the data</Text>
                    <Code block>
                        {`gapminder_df = import_data()`}


                    </Code>
                    </div>

                    <div>
                    <Text>Create components for the page</Text>
                    <Text size='sm'>{"Some layouts have lots of components so it's cleaner to define them outside of the layout."}</Text>
                    <Code block>
                        {`title = dmc.Title('Gapminder data')

# drop down to select a country
country_select = dmc.Select(id='country-select', options=[{'label': i, 'value': i} for i in gapminder_df['country'].unique()])
graph = dcc.Graph(id='gapminder-graph')
`}
                    </Code>
                    </div>

                    <div>
                        <Text>Define the layout</Text>
                        <Text size='sm'>{"If we're creating an app with multiple tabs then we can import this into dashboard.py"}</Text>
                        <Code block>
                            {`layout = html.Div([
    title,
    country_select,
    graph
])`}
                        </Code>
                    </div>
                    <div>
                        <Text>Add callbacks to make the dropdown work!</Text>
                        <Text size='sm'>We use the <Code>{`@app`}</Code> decorator to provide the inputs and outputs to the update_graph function. The Input and Output functions take two main arguments:</Text>
                        <List listStyleType="disc">
                            <List.Item><Text size='sm'>{"First is the id of the component to either trigger the function e.g. selection box or to receive the output."}</Text> </List.Item>
                            <List.Item><Text size='sm'>{"The second is the props that will be updating or updated such as 'n_clicks' for buttons or 'children' to update the text in a div."}</Text></List.Item>
                        </List>
                        <Code block>
                            {`@app.callback(
    Output('gapminder-graph', 'figure'),
    Input('country-select', 'value')
    )
def update_graph(selected_country):
    return gapminder_graph(gapminder_df, selected_country)
        `}
                        </Code>
                    </div>
                    <div>
                        <Text>Congratultions you now have your first app!</Text>
                        <Text>You can experiment with different forms of input. Most of them work in the same way: the data props defines the options users can select and the value props is their selection.</Text>

                    </div>
                    <div className='h-[30px]'/>

            </div>
    )}
