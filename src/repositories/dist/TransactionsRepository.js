"use strict";
exports.__esModule = true;
var Transaction_1 = require("../models/Transaction");
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var _a = this.transactions.reduce(function (accumulator, transaction) {
            switch (transaction.type) {
                case 'income':
                    accumulator.income += transaction.value;
                    break;
                case 'outcome':
                    accumulator.outcome += transaction.value;
                    break;
                default:
                    break;
            }
            return accumulator;
        }, {
            income: 0,
            outcome: 0,
            total: 0
        }), income = _a.income, outcome = _a.outcome;
        var balance = {
            income: income,
            outcome: outcome,
            total: income - outcome
        };
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var transaction = new Transaction_1["default"]({
            title: title,
            value: value,
            type: type
        });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports["default"] = TransactionsRepository;
