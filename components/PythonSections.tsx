import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Divider, Title, Code, Text, Tree, Group, Grid, Alert, List, Space } from '@mantine/core';

export const PythonExamples= () => {

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
            <Text c='pink'>Organise imports at the top of the file</Text>
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
                    <Text c='pink'>Import the data</Text>
                    <Text size='sm'>We use a generalised import function rather than pd.read_csv for example, so we can handle both developing with data locally and in deployment.</Text>
                    <Code block>
                        {`gapminder_df = import_data()`}


                    </Code>
                    </div>

                    <div>
                    <Text c='pink'>Create components for the page</Text>
                    <Text size='sm'>{"Some layouts have lots of components so it's cleaner to define them outside of the layout. Components are functional parts of a page such as buttons or titles. Dash has many to choose from but Dash mantine offers a similar section with more styling. You can of course style all of these using css."}</Text>
                    <Text size='sm'>Ids for components need to be unique. If you do not provide one dash will randomly generate one for you. If you'd like to dynamically alter the component in some way you should specify an id yourself - so you can use it in a callback.</Text>
                    <Code block>
                        {`title = dmc.Title('Gapminder data')

# drop down to select a country
country_select = dmc.Select(id='country-select', options=[{'label': i, 'value': i} for i in gapminder_df['country'].unique()])
graph = dcc.Graph(id='gapminder-graph')
`}
                    </Code>
                    </div>

                    <div>
                        <Text c='pink'>Define the layout</Text>
                        <Text size='sm'>{"We can wrap components into divs (or components like divs) to form a layout. If we're creating an app with multiple tabs then we can import this into dashboard.py."}</Text>
                        <Code block>
                            {`layout = html.Div([
    title,
    country_select,
    graph,
])`}
                        </Code>
                    </div>
                    <div>
                        <Text c='pink'>Add callbacks to make the dropdown work!</Text>
                        <Text size='sm'>Callbacks are how we make the dashboard interactive. We use the <Code>{`@app`}</Code> decorator to provide the inputs and outputs to the update_graph function. The Input and Output functions take two main arguments:</Text>
                        <List withPadding listStyleType="disc">
                            <List.Item><Text size='sm'>{"First is the id of the component to either trigger the function e.g. selection box or to receive the output."}</Text> </List.Item>
                            <List.Item><Text size='sm'>{"The second is the props that will be updating or updated such as 'n_clicks' for buttons or 'children' to update the text in a div."}</Text></List.Item>
                        </List>
                        <Text size='sm'>You should ideally have one callback for each component you want to change, rather than combining them together into one big callback. This makes it easier to debug. There is also a State function that works like Input but won't trigger the callback when that component is updated.</Text>
                        <Text size='sm'>NB: Callbacks don't cause errors in terminal so it's recommended to run the dashboard in debug mode when developing the dashboard.</Text>
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
                        <Text c='pink'>Congratultions you now have your first app!</Text>
                        <Text>You can experiment with different forms of input. Most of them work in the same way: the data props defines the options users can select and the value props is their selection.</Text>

                    </div>
                    <div className='h-[30px]'/>

            </div>
    )}




export const IntroToPython = () => {

    return  <div className='w-full'>
    <Divider
 orientation="horizontal"
 label={
   <Title order={2} c="pink.5">
     Intro to coding in Python
   </Title>
 }
 w="100%"
 className="pt-4"
 c="pink.5"
 color="pink.5"
/>
<div className='flex flex-col gap-2'>
<Text>This section is meant to serve as a basic introduction to coding in Python. The aim is to familiarise yourself with some of the functionality available so you can understand and continue developing the following dashboarding tutorial.</Text>

<Text fw={650} size='xl' c='pink'>Data types, assigning variables and basic operations</Text>
<Text size='lg' c='pink'>Basic data types</Text>
<Code block>{`"""
Python will execute code from the top of a script to the bottom, line by line.
We can add comments to our code using # or triple quotes to explain what our code is doing.
"""

# Basic data types
x = 1 # Integer - Whole numbers e.g. counts
y = -3.4 # Float - A number with a decimal place
z = "abc" # string - denoted by quote marks
isOpen = True # boolean - true or false`}
</Code>

<Text size='lg' c='pink'>Data structures</Text>
<Text>Lists</Text>
<Code block>{`list_of_fruits = ["apples", "bananas", "pineapples"] # We define lists using square brackets.

# we can access items in lists using a index. In python, this starts at 0.
first_item = list_of_fruits[0] # apples

# we can access the last item with -1
last_item = list_of_fruits[-1] # pineapples

# we can also slice a list with colon
first_and_second_items = list_of_fruits[0:2]

# we can combine lists (concatenate) using +
vegetables = ['potato', 'tomato']
fruits_and_veg = list_of_fruits + vegetables

# we can add single items using append
list_of_fruits.append('kiwi')`}
</Code>

<Text>Dictionaries</Text>
<Code block>{`# Dictionaries
# Dictionaries are defined by curly braces
countries_mapping = {
"usa": "United States of America",
"uk: "United Kingdom",
}

# dictionaries have keys and associated values
countries_mapping.keys()
> ('usa', 'uk')

# we can retrieve values using these keys
countries_mapping['uk']
> 'United Kingdom'

# we can add values to a dictionary
countries_mapping['nl'] = 'The Netherlands'
countries_mapping.keys()
> ('usa', 'uk', 'nl')`}
</Code>

<Text size='lg' c='pink'>Operations</Text>
<Text>Mathematical</Text>
<Code block>{`x = 2
y = 3

x + y
> 5

# we can also append strings together using +
name = 'John'
surname = 'Smith'

name + surname
> 'JohnSmith'
 
# Subtraction
x = 2
y = 3

x - y
> -1

# Division
x / y
> 0.666666...

# Flooring
x // y
> 0

11 // 5
> 2

# Multiplication
x * y
> 6

# Remainder (modulus)
y % x
>1`}</Code>

<Text>Other operations</Text>
<Code block>{`# Comparisons
1 > 2 # greater than
> False
 
2 < 3 # less than
> True
 
2 <= 2 # less than or equal to
> True

'hello' == 'goodbye' # assertions
> False`}</Code>

<Text size='lg' c='pink'>Loops</Text>
<Text>We can use loops to iterate through items in a list, repeat code a certain number of times or until a condition is met.</Text>
<Code block>{`# repeat for a certain number of steps
# range allows us to generate numbers from 0 to the specified.
for i in range(3):
    print(i)

>0
>1
>2`}</Code>
<Code block>{`# we can also loop through a list for example
fruits = ['apple', 'banana', 'pear']

for fruit in fruits:
    print(fruit)
    
>apple
>banana
>pear`}</Code>

<Code block>{`# loop until a condition is met

i = 0
while i < 3:
    print(i)
    i = i + 1
    
> 0
> 1
> 2`}


</Code>

<Text size='lg' c='pink'>Functions</Text>
<Text>{"We use functions for code we want to repeat across the script(s)"}</Text>
<Code block>{`# We define comments in two ways:

# 1. using def
def sum_all_numbers(list_of_numbers: list):
    total = 0

    for numbers in list_of_numbers:
        total = total + number
    
    return total
    
    
# 2. using lambda
sum_all_numbers = lambda x: sum(x)`}

</Code>
<Text>We usually prefer to use option 1. as it is clearer for other coders to read. Python has many inbuilt functions like sum which should generally be used instead of writing your own as they are often more efficient.</Text>




</div>

</div>

}


export const AdvancedPython = () => {
    return <div className='w-full flex flex-col gap-2'>
        <div>
        <Text fw={650} size='xl' c='pink'>Storing states</Text>
        <Text>You can use <Code>dcc.Store</Code> to store an object or values that the user can edit. This example uses <Code>dcc.Store</Code> to store the email address of the user to use across the dashboard.</Text>
        <Code block>{`# Email input
input = html.Div([
        dmc.TextInput(id='email-input-box', label='Enter your email address'),
        dmc.Button("Submit", id='submit-email'),
        dcc.Store(id='email-store') # add store to the layout
        ])


# this callback updates the store when the button is clicked
@app.callback(
    Output(id='email-store', 'data'),
    Input(id='submit-email', 'n_clicks'),
    State(id='email-input-box', 'value'),
    prevent_initial_call=True,
)
def update_stored_email(clicks, email):
    if clicks:
        return email

# to use the store for example
@app.callback(
    Output('text-box for example...', 'children),
    Input('email-store', 'data)
)
def update_text_box(email):
    return f"Your email is {email}"`}
        </Code>
        </div>

        <div>
        <Text fw={650} size='xl' c='pink'>Pattern matching callbacks</Text>
        <Text>You can control several components with the same callback by using pattern matching callbacks. The following code will create two columns of components: one with buttons, one with text. We use the same callback to update the text to the number of times the button has been clicked.</Text>
        <Code block>{`# Column of buttons that updates a row of text
text_column = [
    dmc.Text(
        id={'type': 'count-text', 'index': index}, 
        children='This button hasn't been clicked yet'
        ) for index in range(5)
    ]
button_column = [dmc.Button(id={'type': 'count-button', 'index': index}) for index in range(5)]

layout = dmc.Grid([
    dmc.GridCol(button_column),
    dmc.GridCol(text_column),
])

# MATCH is used to only output to the same index as the input that triggers it
@app.callback(
Output({'type': 'count-text', "index": MATCH}, 'children'),
Input({'type': 'count-button', "index": MATCH}, 'n_clicks),
prevent_initial_call=True, # we need to specify this when using patterns
)
def update_text(n_clicks):
    return f"This button has been clicked {n_clicks} times"`}</Code>
    </div>
    <Space h='20px'/>
    </div>
}