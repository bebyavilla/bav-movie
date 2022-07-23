
import VueApollo from "vue-apollo";
import { ApolloClient, HttpLink, InMemoryCache, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

Vue.config.productionTip = false;


const httpLink = new HttpLink({
  uri: 'https://blessed-primate-32.hasura.app/v1/graphql'
});

const wsLink = new WebSocketLink({
  uri: "ws://blessed-primate-32.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    lazy: true,
    inactivityTimeout: 30000,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");