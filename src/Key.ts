export class Key{
    public value:any;
    public isDown:boolean;
    public isUp:boolean;
    public press:any;
    public release:any;
    //The `downHandler`
    public downHandler(event){};
    public upHandler(event){};
    public unsubscribe(){};

}