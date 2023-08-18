# Thallo Exchange NPM SDK

## Package description

The Thallo Exchange NPM SDK allows developers to easily set up and integrate with the [Thallo Api](https://docs.market.thallo.io/).

## Getting started

1. Install the library
   `npm i @thallo.io/thallo-exchange-sdk`

2. Import the library:

    - Using TS and ESM module:

        ```ts
        import { ThalloApiSdk } from '@thallo.io/thallo-exchange-sdk'
        ```

    - CommonJS module:
        ```js
        const { ThalloApiSdk } = require('@thallo.io/thallo-exchange-sdk')
        ```

3. Create an instance of the Thallo Api Sdk client using your [Api key](https://docs.market.thallo.io/#thallo-account-and-api-key) and base url:
    ```ts
    const thalloApiSdk = new ThalloApiSdk({
        apiKey: 'API_KEY',
        baseUrl: 'https://BASE_URL',
    })
    ```

## Functionality of the Thallo Exchange NPM SDK

-   [Get Market data](https://docs.market.thallo.io/api-endpoints/market)

    -   Request code example:

        ```ts
        const response = await thalloApiSdk.marketData.getMarketData()
        ```

    -   Successful response with market data and pagination example:

        ```ts
        {
            projects: [
                {
                    projectId: '003c1hatqib9jbpwwl',
                    vintages: [
                        {
                            vintageId: '004l7azww8l14bnxio',
                            vintageYear: 2014,
                            sellOrders: [
                                {
                                sellOrderId: '006qhwycj9iruixah7',
                                quantityGrams: '300000000',
                                priceCents: '600'
                                }
                            ]
                        },
                        {
                            vintageId: '004hlpexhy9dec7ef1',
                            vintageYear: 2019,
                            sellOrders: [
                                {
                                    sellOrderId: '0064zoo5hvefhr03yc',
                                    quantityGrams: '100000000',
                                    priceCents: '600'
                                }
                            ]
                        },
                        {
                            vintageId: '00410wiwk6v7q7aa10',
                            vintageYear: 2020,
                            sellOrders: [
                                {
                                    sellOrderId: '006o2wqvztvuzmadov',
                                    quantityGrams: '700000000',
                                    priceCents: '3000'
                                }
                            ]
                        }
                    ]
                }
            ],
            pagination: {
                perPage: 1,
                totalPages: 11,
                totalItems: 11,
                currentPage: 2,
                previousPage: 1,
                nextPage: 3
            }
        }
        ```

-   [Get Inventory data](https://docs.market.thallo.io/api-endpoints/inventory)

    -   Request code example:

        ```ts
        const response = await thalloApiSdk.inventory.getInventory()
        ```

    -   Successful response with inventory data and pagination example:

        ```ts
        {
            projects: [
                {
                    projectId: '003gpwgw7agtv6i9dn',
                    vintages: [
                        {
                            vintageId: '004n6oj3x71236shn2',
                            wallets: [
                                {
                                    type: 'CAAS',
                                    quantityGrams: 999959n,
                                    trades: [
                                        {
                                            executionDate: '2023-08-18T08:39:35.141Z',
                                            quantityGrams: 1000000n,
                                            priceCents: 20n,
                                            type: 'BUY'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            pagination: {
                perPage: 1,
                totalPages: 11,
                totalItems: 11,
                currentPage: 2,
                previousPage: 1,
                nextPage: 3
            }
        }
        ```

-   [Get Project data](https://docs.market.thallo.io/api-endpoints/projects):

    -   Request code example:

        ```ts
        const response = await thalloApiSdk.projectData.getProjectData({
            projectIds: ['003c1hatqib9jbpwwl'],
        })
        ```

    -   Successful response example:

        ```ts
        {
            projects: [
                {
                    projectId: '003c1hatqib9jbpwwl',
                    projectName: 'Project 10',
                    type: 'Hydro',
                    location: 'TD',
                    registryProjectUrl: 'https://registry.verra.org/app/projectDetail/CCB/904',
                    sdgs: [
                        'Life Below Water',
                        'Gender Equality',
                        'Infrastructure',
                        'Quality Education',
                        'Zero Hunger',
                        'Health and Well Being',
                        'No Poverty',
                        'Water Benefit',
                        'Economic Growth',
                    ],
                    registryId: '0050yd569dw0qbw5oy',
                    registryName: 'VERRA',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    vintages: [
                        {
                            vintageId: '004l7azww8l14bnxio',
                            vintageYear: 2014,
                            registryVintageUrl:
                                'https://registry.verra.org/app/projectDetail/CCB/904',
                        },
                        {
                            vintageId: '004hlpexhy9dec7ef1',
                            vintageYear: 2019,
                            registryVintageUrl:
                                'https://registry.verra.org/app/projectDetail/CCB/904',
                        },
                        {
                            vintageId: '00410wiwk6v7q7aa10',
                            vintageYear: 2020,
                            registryVintageUrl:
                                'https://registry.verra.org/app/projectDetail/CCB/904',
                        },
                    ],
                },
            ]
        }
        ```

-   [Retire credits](https://docs.market.thallo.io/api-endpoints/caas/requestretirement) by the gram and automatically top-up inventory if required.

    -   Request code sample:

        ```ts
        const responseData = await thalloApiSdk.requestRetirement.requestRetirement({
            vintageId: '00410wiwk6v7q7aa10',
            quantityGrams: '50',
            sellOrderId: '006o2wqvztvuzmadov',
            expectedPriceCents: '3000',
            externalId: '8964e68e-8c7d-4d77-9196-66635bf7a340',
            externalRetireeId: '0eb0dc50-2a9a-4289-bf61-fe298172464e',
        })
        ```

    -   Successful response:

        ```ts
        { retirementRequestId: '00maxwb1x2ltjgh4ob', externalIdAlreadyProcessed: false }
        ```

## Build

To remove the `lib` dir and rebuild:

    npm run build:clean

Else:

    npm run build

This will generate 3 folders:

-   cjs
-   esm
-   types

This enables people to import either `CommonJS` or `ESM` and also provides `d.ts` files for typescript typings

## License

[MIT](LICENSE)
