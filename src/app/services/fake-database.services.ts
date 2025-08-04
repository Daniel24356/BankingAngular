// // src/app/services/fake-database.service.ts
// import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class FakeDatabaseService {
//   private usersKey = 'fake-users';
//   private accountsKey = 'fake-accounts';
//   private transactionsKey = 'fake-transactions';

//   constructor() {
//     this.seedData();
//   }

//   private seedData() {
//     if (!localStorage.getItem(this.usersKey)) {
//       localStorage.setItem(this.usersKey, JSON.stringify([
//         { id: 1, username: 'admin', password: 'admin123', name: 'Admin User' }
//       ]));
//     }

//     if (!localStorage.getItem(this.accountsKey)) {
//       localStorage.setItem(this.accountsKey, JSON.stringify([]));
//     }

//     if (!localStorage.getItem(this.transactionsKey)) {
//       localStorage.setItem(this.transactionsKey, JSON.stringify([]));
//     }
//   }

//   // User methods
//   getUsers() {
//     return JSON.parse(localStorage.getItem(this.usersKey)!);
//   }

//   addUser(user: any) {
//     const users = this.getUsers();
//     user.id = Date.now();
//     users.push(user);
//     localStorage.setItem(this.usersKey, JSON.stringify(users));
//   }

//   // Account methods
//   createAccount(account: any) {
//     const accounts = JSON.parse(localStorage.getItem(this.accountsKey)!);
//     account.id = Date.now();
//     accounts.push(account);
//     localStorage.setItem(this.accountsKey, JSON.stringify(accounts));
//   }

//   // Transaction methods
//   addTransaction(tx: any) {
//     const txs = JSON.parse(localStorage.getItem(this.transactionsKey)!);
//     tx.id = Date.now();
//     txs.push(tx);
//     localStorage.setItem(this.transactionsKey, JSON.stringify(txs));
//   }

//   // And so on…
// }
