import {Column,Entity,Index,ManyToMany,PrimaryGeneratedColumn} from "typeorm";
import {photos} from "../photos/photos.entity";


@Entity("tags",{schema:"ig_clone" } )
@Index("tag_name",["tag_name",],{unique:true})
export class tags {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"tag_name"
        })
    tag_name:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        

   
    @ManyToMany(type=>photos, photos=>photos.tagss)
    photoss:photos[];
    
}
