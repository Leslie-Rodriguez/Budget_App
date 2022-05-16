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
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const planned_expense_entity_1 = require("../planned_expense/planned_expense.entity");
const planned_income_entity_1 = require("../planned_income/planned_income.entity");
const real_expense_entity_1 = require("../real_expense/real_expense.entity");
const real_income_entity_1 = require("../real_income/real_income.entity");
let Category = class Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Category.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => planned_expense_entity_1.Planned_Expense, (planned_expense) => planned_expense.category),
    __metadata("design:type", Array)
], Category.prototype, "planned_expenses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => planned_income_entity_1.Planned_Income, (planned_income) => planned_income.category),
    __metadata("design:type", Array)
], Category.prototype, "planned_income", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => real_expense_entity_1.Real_Expense, (real_expense) => real_expense.category),
    __metadata("design:type", Array)
], Category.prototype, "real_expense", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => real_income_entity_1.Real_Income, (real_income) => real_income.category),
    __metadata("design:type", Array)
], Category.prototype, "real_income", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map