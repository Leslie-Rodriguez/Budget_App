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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    insertCategory(insertCategoryDto) {
        const category = new category_entity_1.Category();
        category.name = insertCategoryDto.name;
        category.description = insertCategoryDto.description;
        return this.categoriesRepository.save(category);
    }
    async findAll() {
        return this.categoriesRepository.find();
    }
    findOne(category_id) {
        return this.categoriesRepository.findOne({ where: { category_id: category_id } });
    }
    async remove(id) {
        await this.categoriesRepository.delete(id);
    }
    async update(category_id, updateCategoryDto) {
        const category = await this.categoriesRepository.preload(Object.assign({ category_id: category_id }, updateCategoryDto));
        if (!category) {
            throw new common_1.NotFoundException(`Item ${category_id} not found`);
        }
        return this.categoriesRepository.save(category);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map