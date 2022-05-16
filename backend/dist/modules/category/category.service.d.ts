import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InsertCategoryDto } from './dto/insert-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    insertCategory(insertCategoryDto: InsertCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(category_id: string): Promise<Category>;
    remove(id: string): Promise<void>;
    update(category_id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
}
