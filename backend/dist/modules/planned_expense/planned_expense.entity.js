"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planned_Expense = void 0;
const typeorm_1 = require("typeorm");
const budget_entity_1 = require("../budget/budget.entity");
const category_entity_1 = require("../category/category.entity");
let Planned_Expense = class Planned_Expense {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Planned_Expense.prototype, "plannedExpense_id", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Planned_Expense.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.Budget, (budget) => budget.planned_expenses),
    __metadata("design:type", budget_entity_1.Budget)
], Planned_Expense.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.planned_expenses),
    __metadata("design:type", category_entity_1.Category)
], Planned_Expense.prototype, "category", void 0);
Planned_Expense = __decorate([
    (0, typeorm_1.Entity)()
], Planned_Expense);
exports.Planned_Expense = Planned_Expense;
//# sourceMappingURL=planned_expense.entity.js.map