import {Column,Entity,Index,JoinColumn,ManyToOne} from "typeorm";
import {users} from "../users/users.entity";


@Entity("follows",{schema:"ig_clone" } )
@Index("followee_id",["followee",])
export class follows {

   
    @ManyToOne(type=>users, users=>users.followss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'follower_id'})
    follower:users | null;


   
    @ManyToOne(type=>users, users=>users.followss2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'followee_id'})
    followee:users | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
