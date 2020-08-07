# SpaceX UI

> UI solution for displaying spaceX programms with filters to see desired result

## Implementation Steps

```
# Filter component that will provide the selected filter criteria to parent component
# Card component that will display infomation of spaceX project
# Launch service that will fetch data from REST endpoint.
# Home component responsible for interating with service, filter and card componet.
# Media queries are used for creating responsive layout (No CSS framework used).
```

## Light House report

> Desktop

![Desktop Report](https://user-images.githubusercontent.com/51847277/89610436-1ceacd00-d898-11ea-9530-9bd992d509c2.png)

![Desktop Report](https://user-images.githubusercontent.com/51847277/89620113-c936ae80-d8ac-11ea-8bd0-3e6d329162a9.png)

> Mobile

![Mobile Report](https://user-images.githubusercontent.com/51847277/89620284-11ee6780-d8ad-11ea-9ab6-ccbde9b760f3.png)

## Install dependecies

```
npm install
```

## Run app

```
# Run in dev mode
npm run start

# Run in production mode
npm run build:ssr && npm run serve:ssr
```

## Third party libraries used

```
# none
```

- Version: 1.0.0
- License: MIT
