# WEB701-Vue

A testing environment project for WEB701 using the Vue framework.

Below will contain an outline and summary covering the research of several functionality requirements and how they may be achieved within the Vue Framework .

Similar research and testing has been completed on the following Frameworks:

- [Express](https://github.com/Jason-MacDonald/WEB701-Express)
- [Svelte](https://github.com/Jason-MacDonald/WEB701-Svelte)

## Functionality Testing:

### Members and Customers can Login and Administer their Account.

[Building Vue and Node Apps with Authentication](https://www.linkedin.com/learning/building-vue-and-node-apps-with-authentication/what-s-the-benefit-of-vue-js?autoplay=true&u=76059146)

#### Instructions:

Open `server` folder in terminal.

```
npm start
```

Open `client` folder in terminal.

```
npm run serve
```

Browse to localhost:8080

#### Dependencies:

(Client)

- Vue - Fornt-End Framework
- Axios
- Vuex - Store
- Vue-router

(Sevrer)

- Express - Back-End Framework
- Cors
- Body-parser

- jsonwebtoken

### Members use the Auction System to Register their Products.

#### Instructions:

Open `auctionRegister` folder in terminal.

```
npm run serve
```

Browse to localhost:8080

Add a new item by entering the details on the Add New Auction Form and clicking Add Auction Item button.
The new item will be added to the list of Auction Items.

### Customers use the Auction System to Bid on Products.

#### Instructions:

Open `calculator` folder in terminal.

```
npm run serve
```

Browse to localhost:8080

Changing the fields and clicking calculate will provide a new estimated cost of postage.

### A web-based product postage calculator that provides the cost of postage according to size, weight, fragility etc.

Open `auctionBidding` folder in terminal.

```
npm run serve
```

Browse to localhost:8080

The bid can be increased or decreased by pressing the appropriate button, or entering a new bid in the number field.

### Interactive Elements that Engage the Website User

Open `interactive-element` folder in terminal.

```
npm run serve
```

Browse to localhost:8080

An interactive card component is displayed on the screen. Additional information can be viewed by selecting the drop down.

### Store and Retrieve data from a server-side database.

See Express
