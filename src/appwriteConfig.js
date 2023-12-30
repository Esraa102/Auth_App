import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65899616272d2bd24b13");

export const account = new Account(client);

export default client;
