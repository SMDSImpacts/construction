import { Schema, model, models } from "mongoose"

const AppartmentSchema = new Schema (
    {   _id: {type: Number,
          required: true,
        },     
        access: {
          type:String,
          required: false
        },
        address: {          
            type:String,
            required: false
          },       
        bedrooms: Number,
        description: {
          type: String,
          required: false
        },
        house_rules: {
          type:String,
          required: false
        },
        neighborhood_overview: {
          type:String,
          required: false
        },
        price: Number,
        room_type: {
          type:String,
          required: false
        },
        kitchen: {
          type:String,
          required: false
        },
        summary: {
          type:String,
          required: false
        },
        url: {
          type:String,
          required: false
        },
        title: {
          type: String,
          required: false
        }      
      }
)

      const Appartment = models.Appartment || model("Appartment", AppartmentSchema)
      
    export default Appartment