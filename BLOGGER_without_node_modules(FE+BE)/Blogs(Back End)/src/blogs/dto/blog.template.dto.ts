/* eslint-disable prettier/prettier */
import { BlogTag } from "../blog.tag.enum";

export class BlogTemplateDto {

    blogTitle: string;

    blogContent: string;

    blogTags: BlogTag;

    blogDate: Date;

}