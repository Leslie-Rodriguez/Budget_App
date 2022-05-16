"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./modules/user/user.module");
const budget_module_1 = require("./modules/budget/budget.module");
const planned_income_module_1 = require("./modules/planned_income/planned_income.module");
const planned_expense_module_1 = require("./modules/planned_expense/planned_expense.module");
const real_expense_module_1 = require("./modules/real_expense/real_expense.module");
const real_income_module_1 = require("./modules/real_income/real_income.module");
const category_module_1 = require("./modules/category/category.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot(), user_module_1.UserModule, budget_module_1.BudgetModule, planned_income_module_1.PlannedIncomeModule, planned_expense_module_1.PlannedExpenseModule, real_expense_module_1.RealExpenseModule, real_income_module_1.RealIncomeModule, category_module_1.CategoryModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map