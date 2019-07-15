import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { users } from "../users/users.entity";
import { comments } from "../comments/comments.entity";
import { likes } from "../likes/likes.entity";
import { tags } from "../tags/tags.entity";


@Entity("photos", { schema: "ig_clone" })
@Index("user_id", ["user",])
export class photos {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "id"
    })
    id: number;


    @Column("varchar", {
        nullable: false,
        name: "image_url"
    })
    image_url: string;



    @ManyToOne(type => users, users => users.photoss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'user_id' })
    user: users | null;


    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "created_at"
    })
    created_at: Date;



    @OneToMany(type => comments, comments => comments.photo, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    commentss: comments[];



    @OneToMany(type => likes, likes => likes.photo, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    likess: likes[];



    @ManyToMany(type => tags, tags => tags.photoss, { nullable: false, })
    @JoinTable({
        name: 'photo_tags',
        joinColumn: {
            name: 'photo_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: "tag_id",
            referencedColumnName: 'id'
        }
    })
    tagss: tags[];
}
