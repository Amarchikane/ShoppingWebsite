export class productInfo{
 images:String;
  fuel:Number;
  StartingFrom:Number;
  title:String;
  active:boolean;
  constructor(images:String , fuel:Number , StartingFrom:Number,title:String,  active:boolean){
    this.images= images,
    this.fuel=fuel,
    this.StartingFrom= StartingFrom,
    this.title= title,
    this.active= active
 }
}
