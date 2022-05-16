import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CategoryService } from './category.service';
import { InsertCategoryDto } from './dto/insert-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}
    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':category_id')
    findOne(@Param('category_id') id: string): Promise<Category> {
        return this.categoryService.findOne(id);
    }

    @Delete(':category_id')
    remove(@Param('category_id') id: string): Promise<void> {
        return this.categoryService.remove(id);
    }

    @Post()
    addCategory(@Body() insertCategoryDto:InsertCategoryDto): Promise<Category> {
        return this.categoryService.insertCategory(insertCategoryDto)
    }
    
    @Put(':category_id')
    async update(@Param('category_id') category_id: string, @Body() categoryData: UpdateCategoryDto) {
        return await this.categoryService.update(category_id, categoryData);
      }

}
