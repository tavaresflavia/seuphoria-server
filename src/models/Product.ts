import mongoose, {Document, Schema} from 'mongoose';

export interface IProduct{
    api_id: number;
    brand: string;
    name: string;
    price: number;
    description: string;
    category: string;
    tags: string[];
    imageUrl?: string;
    colors: [];
    rating: number|null;

}

export interface IProductModel extends  IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        name:{type:String, required:true},

    },
    {
        versionKey:false
    }
)

export default mongoose.model<IProductModel>('Product', ProductSchema)