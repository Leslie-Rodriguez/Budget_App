import { CategoryService } from './category.service';
import { InsertCategoryDto } from './dto/insert-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.entity';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    remove(id: string): Promise<void>;
    addCategory(insertCategoryDto: InsertCategoryDto): Promise<Category>;
    update(category_id: string, categoryData: UpdateCategoryDto): Promise<Category>;
}
