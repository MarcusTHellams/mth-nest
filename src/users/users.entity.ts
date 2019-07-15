import {Column,Entity,Index,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {comments} from "../comments/comments.entity";
import {follows} from "../follows/follows.entity";
import {likes} from "../likes/likes.entity";
import {photos} from "../photos/photos.entity";
import { ApiModelProperty } from '@nestjs/swagger';



@Entity("users",{schema:"ig_clone" } )
@Index("username",["username",],{unique:true})
export class users {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        
    @ApiModelProperty()
    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"username"
        })
    username:string;
        
    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        

   
    @OneToMany(type=>comments, comments=>comments.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    commentss:comments[];
    

   
    @OneToMany(type=>follows, follows=>follows.follower,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    followss:follows[];
    

   
    @OneToMany(type=>follows, follows=>follows.followee,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    followss2:follows[];
    

   
    @OneToMany(type=>likes, likes=>likes.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    likess:likes[];
    

   
    @OneToMany(type=>photos, photos=>photos.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photoss:photos[];
    
}
