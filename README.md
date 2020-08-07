# SpaceX UI

> UI solution for displaying spaceX programms with filters to see desired result

## Implementation Steps

```
- Filter component that will provide the selected filter criteria to parent component
- Card component that will display infomation of spaceX project
- Launch service that will fetch data from REST endpoint.
- Home component responsible for interating with service, filter and card componet.
- Media queries are used for creating responsive layout (No CSS framework used).
```

## Light House report

### Desktop

![Desktop Report](https://user-images.githubusercontent.com/51847277/89609054-63d6c380-d894-11ea-8000-5989cf16f4be.png)

### Mobile

![Mobile Report](https://user-images.githubusercontent.com/51847277/89609317-2161b680-d895-11ea-9cb0-28a812623e5e.png)

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
