import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import {photos} from "../photos/photos.entity";
import {users} from "../users/users.entity";


@Entity("comments",{schema:"ig_clone" } )
@Index("photo_id",["photo",])
@Index("user_id",["user",])
export class comments {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"comment_text"
        })
    comment_text:string;
        

   
    @ManyToOne(type=>photos, photos=>photos.commentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'photo_id'})
    photo:photos | null;


   
    @ManyToOne(type=>users, users=>users.commentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'user_id'})
    user:users | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
