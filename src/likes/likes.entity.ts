import {Column,Entity,Index,JoinColumn,ManyToOne} from "typeorm";
import {users} from "../users/users.entity";
import {photos} from "../photos/photos.entity";


@Entity("likes",{schema:"ig_clone" } )
@Index("photo_id",["photo",])
export class likes {

   
    @ManyToOne(type=>users, users=>users.likess,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'user_id'})
    user:users | null;


   
    @ManyToOne(type=>photos, photos=>photos.likess,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'photo_id'})
    photo:photos | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
