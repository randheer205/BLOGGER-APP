/* eslint-disable prettier/prettier */
import { BlogCommentEntity } from "src/entity/blog.comments.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";



@EntityRepository(BlogCommentEntity)
export class BlogCommentRepository extends Repository<BlogCommentRepository>{


    async addComment(id: number, userComment: string, user: UserEntity) {
        const comment = new BlogCommentEntity();
        comment.userComment = userComment;
        comment.blogId = id;
        if (user) {
            comment.userName = (user.firstName + user.lastName)
        }
        await comment.save();
        return comment;
    }

    async getComments(id: number) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: id });

        const comments =await query.getMany()

        if (comments) {
            return comments;
        }

    }
    async delComments(id: number) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: id });

        const comments = await query.getMany()
        if(comments.length==0)
        {
            console.log("IN HERE")
            return
        }
        else if (await comments) {
            this.delete(await comments);
        }

    }

}