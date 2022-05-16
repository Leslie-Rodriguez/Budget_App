import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InsertCategoryDto } from './dto/insert-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository<Category>,
      ) {}

    insertCategory(insertCategoryDto: InsertCategoryDto) {
        //const newUser = new UserModel(user.name, user.last_name, user.username, user.username, user.budget);
        const category = new Category();
        category.name = insertCategoryDto.name;
        category.description = insertCategoryDto.description;
        /*category.planned_expenses = insertCategoryDto.planned_expenses;
        category.planned_income = insertCategoryDto.planned_income
        category.real_expense = insertCategoryDto.real_expense;
        category.real_income = insertCategoryDto.real_income;*/
        return this.categoriesRepository.save(category);
    }

    async findAll(): Promise<Category[]> {
        return this.categoriesRepository.find();
      }
    
    findOne(category_id: string): Promise<Category> {
        return this.categoriesRepository.findOne({where: {category_id: category_id }});
    }
    
    async remove(id: string): Promise<void> {
        await this.categoriesRepository.delete(id);
    }

    async update(category_id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const category = await this.categoriesRepository.preload({
            category_id: category_id,
            ...updateCategoryDto,
        });
        if (!category) {
          throw new NotFoundException(`Item ${category_id} not found`);
        }
        return this.categoriesRepository.save(category);
      }
}
